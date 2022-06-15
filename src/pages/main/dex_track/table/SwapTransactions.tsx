/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, Table } from "@douyinfe/semi-ui";
import { memo, useMemo } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { Pagination } from '@douyinfe/semi-ui';
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import LangComponent from "@/lang/local";
import MoreSetting from "@/components/table_component/MoreSetting";
import dayjs from "dayjs";
import NumberUtils from "@/utils/js_utils/number";
import { postMainApiV1DexTraceSwapList } from "@/service/loc-services";

const SwapTransactions = memo(() => {
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
        postMainApiV1DexTraceSwapList,
        {
            initParams: {
                "sort": {
                    "create_at": "desc"
                },
                "condition": {},
                "search": {
                    "period": 1
                },
                "page": {
                    "page_size": 10,
                    "page": 1,
                }
            }
        }
    )
    const columns = useMemo(() => {
        return [
            {
                title: <>Address</>,
                dataIndex: 'wallet_address',
                // render: (text: any, r: any) => {
                //     return <div className='flex hover' onClick={() => history.push('/wallet-balance?address=' + r.address)}>
                //         <Text>{r.wallet_address_name || r.wallet_address}</Text>
                //     </div>;
                // },
            },
            {
                title: <>Time</>,
                dataIndex: 'create_at',
                render: (r: any) => dayjs(r * 1000).format('MM-DD-YYYY HH:mm:ss')
            },
            {
                title: <>Token in</>,
                dataIndex: 'in_token_symbol',
            },
            {
                title: <>Amount In</>,
                dataIndex: 'in_amount',
            },
            {
                title: <>Token out</>,
                dataIndex: 'out_token_symbol',
            },
            {
                title: <>Amount out</>,
                dataIndex: 'out_amount',
            },
            {
                title: <>Volume($)</>,
                dataIndex: 'volumes',
                render: (r: any) => '$' + r
            },
        ]
    }, [params]);
    return <div style={{ marginTop: '12px' }}>
        <div className="title">Swap Transactions</div>
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

export default SwapTransactions