/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, Table } from "@douyinfe/semi-ui";
import { memo, useMemo, useState } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import MoreSetting from "@/components/table_component/MoreSetting";
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import { postMainApiV1TokenFlowAddressList, postMainApiV1TokenFlowList } from "@/service/loc-services";
import { formatUrl } from "@/utils/js_utils/format";
import { ProModal } from "@/utils/ui_utils/toast";

const ConsistentOutCon = memo(() => {
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
                    "is_consistent": 1,
                    "is_in": 0,
                    "is_out": 1,
                    "period": 1,
                    "is_cex": 0
                },
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
                title: 'Outflow times',
                dataIndex: 'times',
            },
            {
                title: 'Address',
                dataIndex: 'wallet_address_count',
                render: (text: any, record: any, index: any) =>
                    <div className="hover" onClick={() => {
                        history.push(`/token-flow?token_address=${record?.token_address}&period=${params?.search?.period}`)
                        ProModal(<Modal />, ' Consistent Token Outflow')
                    }}>
                        $ {text}
                    </div>,
            },
            {
                title: 'Avg Outflow Times',
                dataIndex: 'average_times',
            },
            {
                title: 'volume',
                dataIndex: 'volumes',
                render: (r: any) => '$' + r
            },
        ]
    }, [params]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <div className="title"> Consistent Token Outflow</div>
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

export default ConsistentOutCon

const Modal = memo(() => {
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
                    "is_consistent": 1,
                    "is_in": 0,
                    "is_out": 1,
                    "is_cex": 0
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
                render: (text: any, record: any, index: any) => index + 1,
            },
            {
                title: 'Address  ',
                dataIndex: 'wallet_address',
            },

            {
                title: 'Inflow($)',
                dataIndex: 'in_amount',
                render: (r: any) => '$' + r
            },
        ]
    }, []);

    return <div style={{ marginTop: '12px' }}>
        <div className='Portfolio card' style={{ marginTop: '20px' }}>
            <BuildTable columns={columns} />
        </div>
    </div>
})


