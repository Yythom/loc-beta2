/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, } from "@douyinfe/semi-ui";
import { memo, useMemo, } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import MoreSetting from "@/components/table_component/MoreSetting";
import { formatUrl } from "@/utils/js_utils/format";
import { ProModal } from "@/utils/ui_utils/toast";
import { postMainApiV1TokenFlowAddressList, postMainApiV1TokenFlowList } from "@/service/loc-services";

const FlowIn = memo(() => {
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
    } = useTable<any, any>(
        postMainApiV1TokenFlowList,
        {
            initParams: {
                "search": {
                    "is_consistent": 0,
                    "is_in": 1,
                    "is_out": 0,
                    "period": 1,
                    "is_cex": 1
                },
                "page": {
                    "page": 1,
                    "page_size": 10,
                }
            }
        }
    )
    const columns = useMemo(() => {
        return [
            {
                title: <>Token</>,
                dataIndex: 'token_name',
            },
            {
                title: <>  Inflow($)  </>,
                dataIndex: 'volumes',
                render: (text: any, record: any, index: any) => {
                    return <div className="hover" onClick={() => {
                        history.push(`/token-flow?token_address=${record?.token_address}&period=${params?.search?.period}`)
                        ProModal(<FlowInModal />, 'Token Flow in')
                    }}>
                        <div className='flex'  >
                            <Text>$ {text}</Text>
                        </div>
                    </div>
                },
            },
            {
                title: <>Address</>,
                dataIndex: 'wallet_address_count',
                render: (text: any, record: any, index: any) => {
                    return <div className="hover" onClick={() => {
                        history.push(`/token-flow?token_address=${record?.token_address}&period=${params?.search?.period}`)
                        ProModal(<FlowInModal />, 'Token Flow in')
                    }}>
                        <Text>{text}</Text>
                    </div>
                },
            },

        ]
    }, [params]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <div className="title">Token Inflow from CEX</div>
        <div className='flex' style={{ justifyContent: 'flex-end' }}>
            <MoreSetting
                setParams={setSearch}
                params={params}
            />
        </div>
        <BuildTable columns={columns} />
    </div>

})

export default FlowIn;

const FlowInModal = memo(() => {
    const history = useHistory()
    const _url_params: any = formatUrl();

    const {
        setParams,
        params,
        tableData,
        BuildTable,
        loading
    } = useTable<any, any>(
        postMainApiV1TokenFlowAddressList,
        {
            initParams: {
                "sort": {
                    "volumes": "desc"
                },
                "search": {
                    "token_address": _url_params?.token_address,
                    "period": Number(_url_params?.period),
                    "is_consistent": 0,
                    "is_in": 1,
                    "is_out": 0,
                    "is_cex": 1
                },
                "page": {
                    "page": 1,
                    "page_size": 5,
                    "total": true,
                    "all": false
                }
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
                title: <> Address  </>,
                dataIndex: 'wallet_address',
            },

            {
                title: 'Inflow',
                dataIndex: 'in_amount',
                render: (r: any) => '$' + r
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


