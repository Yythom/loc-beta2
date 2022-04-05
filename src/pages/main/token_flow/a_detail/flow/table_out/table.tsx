/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, ConfigProvider, LocaleProvider, Table } from "@douyinfe/semi-ui";
import { memo, useMemo, useState } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { Pagination } from '@douyinfe/semi-ui';
import MoreSetting, { PopContent, } from "./search-setting/MoreSetting";
import DefaultSetting from "./search-setting/DefaultSetting";
import { useHistory } from "react-router";
import { DashboardParams } from "@/services/ranking/interface";
import useTable from "@/hooks/useTable";
import { ChangeInfo, SortOrder } from "@douyinfe/semi-ui/lib/es/table";
import LangComponent from "@/lang/local";
import { FlowInDetailInterface, FlowInInterface, FlowParamsInterface } from "@/services/flow/in_interface";
import FlowService from "@/services/flow";
import { formatUrl } from "@/utils/js_utils/format";
import loacl from "@/lang/semi-ui-local";

const TableComponent = memo(() => {
    const history = useHistory()
    const _url_params: any = formatUrl();

    const {
        setParams,
        params,
        tableData,
        loading
    } = useTable<FlowInDetailInterface, FlowParamsInterface>(
        FlowService.get_flow_out_detail,
        {
            initParams: {
                id: _url_params?.id
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
                title: <>No.  </>,
                dataIndex: '#',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{index + 1}</Text>
                    </div>;
                },
            },
            {
                title: <>
                    Address
                </>,
                dataIndex: 'address',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{text}</Text>
                    </div>;
                },
            },

            {
                title: <>
                    Outflow (1day)
                </>,
                dataIndex: 'total_usd',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>- $ {text}</Text>
                    </div>;
                },
            },
        ]
    }, [params, sortProfit]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        {/* <Collapsible isOpen={true}>
            <MoreSetting
                setParams={setSearchParams}
                params={params}
            />
        </Collapsible> */}
        {/* <div className='flex' style={{ justifyContent: 'flex-end' }}>
            <Pagination
                showTotal
                total={tableData?.total}
                currentPage={params?.page}
                pageSize={30}
                onPageChange={page => setParams('page', page)}
                size='small'
                hoverShowPageSelect
            />
        </div> */}

        <div className='Portfolio card' style={{ marginTop: '20px' }}>
            <LocaleProvider locale={loacl['en_US']}>
                <ConfigProvider locale={loacl['en_US']}>
                    <Table
                        onChange={onChange}
                        loading={loading}
                        className='table'
                        pagination={false}
                        columns={columns}
                        dataSource={tableData}
                    />
                </ConfigProvider>
            </LocaleProvider>
        </div>
    </div>

})

export default TableComponent