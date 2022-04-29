/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, } from "@douyinfe/semi-ui";
import { memo, useMemo, } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import { FlowInInterface, FlowParamsInterface } from "@/services/flow/in_interface";
import FlowService from "@/services/flow";
import MoreSetting from "@/components/table_component/MoreSetting";
import ModalControl from "@/pro-modal/modal_control";

const TableComponent = memo(() => {
    const history = useHistory()
    const {
        setParams,
        params,
        tableData,
        BuildTable,
        loading,
        handle: {
            setSearch
        }
    } = useTable<FlowInInterface, FlowParamsInterface>(
        FlowService.get_flow_in_list,
        {
            initParams: {
                page: 1,
                source: 'CEX'
            }
        }
    )
    const columns = useMemo(() => {
        return [
            {
                title: <>Token</>,
                dataIndex: 'token_name',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{index}</Text>
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
                title: <>Address</>,
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

        </div>
        <BuildTable columns={columns} />
    </div>

})

export default TableComponent