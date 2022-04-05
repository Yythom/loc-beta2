/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, Table } from "@douyinfe/semi-ui";
import { memo, useMemo, useState } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import LangComponent from "@/lang/local";
import { Pagination } from '@douyinfe/semi-ui';
import MoreSetting, { PopContent, } from "./search-setting/MoreSetting";
import DefaultSetting from "./search-setting/DefaultSetting";
import { useHistory } from "react-router";
import NumberUtils from "@/utils/js_utils/number";
import { DashboardInterface, DashboardParams } from "@/services/ranking/interface";
import useTable from "@/hooks/useTable";
import RankingService, { initParams } from "@/services/ranking";
import { ChangeInfo, SortOrder } from "@douyinfe/semi-ui/lib/es/table";
import ConsistentService from "@/services/consistent";
import { ConsistentOutListInterface } from "@/services/consistent/in_interface";
import { ConsistentOutListParamsInterface } from "@/services/consistent/out_interface";
import ModalControl from "@/pro-modal/modal_control";

const TableComponent = memo(() => {
    const history = useHistory()
    const {
        setParams,
        params,
        tableData,
        loading
    } = useTable<ConsistentOutListInterface, ConsistentOutListParamsInterface>(
        ConsistentService.get_consistent_out_list,
        {
            initParams: {
                page: 1
            }
        }
    )
    const [isOpen, setOpen] = useState<boolean>(false);
    const [sortProfit, setSortProfit] = useState<SortOrder>('descend') // Profi受控 默认排序是他

    const onChange = (e: ChangeInfo<any>) => {
        const { sorter } = e;
        if (sorter) {
            const { sortOrder, dataIndex } = sorter;
            const sortRet: DashboardParams['sort'] = {}
            sortRet[dataIndex] = sortOrder ? `${sortOrder}`?.replace('end', '') : '';
            setParams({
                ...params,
                page: 1,
                // sort: sortRet
            })
            setSortProfit(dataIndex === "profitUsd" ? sortOrder : false);
        }
    };

    const setSearchParams = (key: String, value: any) => {
        params && setParams({
            ...params,
            page: 1,
            search: {
                ...params?.search,
                [`${key}`]: value
            }
        })
    }

    const columns = useMemo(() => {
        return [
            {
                title: <>Token </>,
                dataIndex: 'contract_name',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' style={{ cursor: 'pointer' }} >
                        <Text>{text}</Text>
                    </div>;
                },
            },
            {
                title: <>Outflow ($) </>,
                dataIndex: 'total',
                render: (text: any, record: any, index: any) => {
                    return <ModalControl bindKey="consistent_detail" onClick={() => {
                        history.push(`/token-flow?id=${record?.contract_address}&type=out`)
                    }}>
                        <div className='flex'  >
                            <Text>- $ {text}</Text>
                        </div>
                    </ModalControl>;
                },
            },
            {
                title: <>address </>,
                dataIndex: 'address_num',
                render: (text: any, record: any, index: any) => {
                    return <ModalControl bindKey="consistent_detail" onClick={() => {
                        history.push(`/token-flow?id=${record?.contract_address}&type=out`)
                    }}>
                        <div className='flex'  >
                            <Text>{text}</Text>
                        </div>
                    </ModalControl>;
                },
            },
        ]
    }, [params, sortProfit]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <Collapsible isOpen={true}>
            <MoreSetting
                setParams={setSearchParams}
                params={params}
            />
        </Collapsible>
        <div className='flex' style={{ justifyContent: 'flex-end' }}>
            <Pagination
                showTotal
                total={tableData?.total}
                currentPage={params?.page}
                pageSize={30}
                onPageChange={page => setParams('page', page)}
                size='small'
                hoverShowPageSelect
            />
        </div>

        <div className='Portfolio card' style={{ marginTop: '20px' }}>
            <LangComponent>
                <Table
                    onChange={onChange}
                    loading={loading}
                    className='table'
                    pagination={false}
                    columns={columns}
                    dataSource={tableData?.list}
                />
            </LangComponent>
        </div>
    </div>

})

export default TableComponent