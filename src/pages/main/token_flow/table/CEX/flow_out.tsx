/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible } from "@douyinfe/semi-ui";
import { memo, useMemo, useState } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import MoreSetting from "@/components/table_component/MoreSetting";
import { formatUrl } from "@/utils/js_utils/format";
import { ProModal } from "@/utils/ui_utils/toast";
import { postMainApiV1TokenFlowAddressList, postMainApiV1TokenFlowList } from "@/service/loc-services";

const FlowOut = memo(() => {
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
                    "is_in": 0,
                    "is_out": 1,
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
                title: 'Token',
                dataIndex: 'token_name',
            },

            {
                title: 'Outflow($)',
                dataIndex: 'volumes',
                render: (text: any, record: any, index: any) => {
                    return <div className="hover" onClick={() => {
                        history.push(`/token-flow?token_address=${record?.token_address}&period=${params?.search?.period}`)
                        ProModal(<FlowOutModal />, 'Token Outflow to CEX')
                    }}>
                        ${text}
                    </div>
                },
            },
            {
                title: 'Address',
                dataIndex: 'wallet_address_count',
                render: (text: any, record: any, index: any) => {
                    return <div className="hover" onClick={() => {
                        history.push(`/token-flow?token_address=${record?.token_address}&period=${params?.search?.period}`)
                        ProModal(<FlowOutModal />, 'Token Outflow to CEX')
                    }}>
                        {text}
                    </div>
                },
            },
        ]
    }, [params]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <div className="title"> Token Outflow to CEX</div>
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

export default FlowOut


const FlowOutModal = memo(() => {
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
                    "is_in": 0,
                    "is_out": 1,
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
                title: 'No.  ',
                dataIndex: '#',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{index + 1}</Text>
                    </div>;
                },
            },
            {
                title: 'Address ',
                dataIndex: 'wallet_address',
            },
            {
                title: 'Outflow($)',
                dataIndex: 'out_amount',
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
