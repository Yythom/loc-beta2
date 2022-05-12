/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible } from "@douyinfe/semi-ui";
import { memo, useMemo, useState } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import { FlowInDetailInterface, FlowInInterface, FlowParamsInterface } from "@/services/flow/in_interface";
import FlowService from "@/services/flow";
import MoreSetting from "@/components/table_component/MoreSetting";
import { formatUrl } from "@/utils/js_utils/format";
import { ProModal } from "@/utils/ui_utils/toast";

const FlowInCon = memo(() => {
    const history = useHistory()
    const {
        setParams,
        params,
        tableData,
        loading,
        BuildTable,
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
                    return <div className="hover" onClick={() => {
                        history.push(`/token-flow?id=${record?.id}&type=in`)
                    }}>
                        <div className='flex'  >
                            <Text>$ {text}</Text>
                        </div>
                    </div>
                },
            },
            {
                title: <>Address</>,
                dataIndex: 'address_num',
                render: (text: any, record: any, index: any) => {
                    return <div className="hover" onClick={() => {
                        history.push(`/token-flow?id=${record?.id}&type=in`)
                        ProModal(<FlowInModal />, 'Token Flow in')
                    }}>
                        <div className='flex'  >
                            <Text>{text}</Text>
                        </div>
                    </div>
                },
            },

        ]
    }, [params]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <div className="title">Token Inflow from Smart Money</div>
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

export default FlowInCon


const FlowInModal = memo(() => {
    const history = useHistory()
    const _url_params: any = formatUrl();

    const {
        setParams,
        params,
        tableData,
        BuildTable,
        loading
    } = useTable<FlowInDetailInterface, FlowParamsInterface>(
        FlowService.get_flow_in_detail,
        {
            initParams: {
                id: _url_params?.id
            }
        }
    )


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
                    Inflow
                </>,
                dataIndex: 'total_usd',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>$ {text}</Text>
                    </div>;
                },
            },
        ]
    }, []);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        {/* <Collapsible isOpen={true}>
            <MoreSetting
                setParams={setSearchParams}
                params={params}
            />
        </Collapsible> */}
        <div className='Portfolio card' style={{ marginTop: '20px' }}>
            <BuildTable columns={columns} />
        </div>
    </div>
})
