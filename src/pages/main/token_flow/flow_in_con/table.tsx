/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, Table } from "@douyinfe/semi-ui";
import { memo, useMemo, useState } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { Pagination } from '@douyinfe/semi-ui';
import { useHistory } from "react-router";
import { DashboardParams } from "@/services/ranking/interface";
import useTable from "@/hooks/useTable";
import { ChangeInfo, SortOrder } from "@douyinfe/semi-ui/lib/es/table";
import LangComponent from "@/lang/local";
import { FlowInInterface, FlowParamsInterface } from "@/services/flow/in_interface";
import FlowService from "@/services/flow";
import ModalControl from "@/pro-modal/modal_control";
import Storage from "@/utils/js_utils/storage";
import MoreSetting from "@/components/table_component/MoreSetting";

const TableComponent = memo(() => {
    const history = useHistory()
    const {
        setParams,
        params,
        tableData,
        loading,
        handle: {
            setSearch
        }
    } = useTable<FlowInInterface, FlowParamsInterface>(
        FlowService.get_flow_in_list,
        {
            initParams: {
                page: 1,
                source: 'SmartMoney'
            }
        }
    )
    const [isOpen, setOpen] = useState<boolean>(false);


    const columns = useMemo(() => {
        return [
            {
                title: <>Token</>,
                dataIndex: 'token_name',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{text}</Text>
                    </div>;
                },
            },

            {
                title: <>  Inflow($)  </>,
                dataIndex: 'total',
                render: (text: any, record: FlowInInterface['list'][0], index: any) => {
                    return <ModalControl bindKey="token_flow_detail" onClick={() => {
                        history.push(`/token-flow?id=${record?.id}&type=in`)
                    }}>
                        <div className='flex'  >
                            <Text>$ {text}</Text>
                        </div>
                    </ModalControl>
                },
            },
            {
                title: <>address</>,
                dataIndex: 'address_num',
                render: (text: any, record: any, index: any) => {
                    return <ModalControl bindKey="token_flow_detail" onClick={() => {
                        history.push(`/token-flow?id=${record?.id}&type=in`)
                    }}>
                        <div className='flex'  >
                            <Text>{text}</Text>
                        </div>
                    </ModalControl>
                },
            },
        ]
    }, [params]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}

        <div className='flex' style={{ justifyContent: 'flex-end' }}>
            <Collapsible isOpen={true}>
                <MoreSetting
                    setParams={setSearch}
                    params={params}
                />
            </Collapsible>
            <Pagination
                showTotal
                total={tableData?.total}
                currentPage={params?.page}
                pageSize={10}
                onPageChange={page => setParams('page', page)}
                size='small'
                hoverShowPageSelect
            />
        </div>

        <div className='Portfolio card' style={{ marginTop: '20px' }}>
            <LangComponent>
                <Table
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