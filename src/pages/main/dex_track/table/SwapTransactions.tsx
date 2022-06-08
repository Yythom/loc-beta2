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
                dataIndex: 'address',
                render: (text: any, r: any) => {
                    return <div className='flex hover' onClick={() => history.push('/wallet-balance?address=' + r.address)}>
                        <Text>{r.wallet_address_name || r.wallet_address}</Text>
                    </div>;
                },
            },
            {
                title: <>Time</>,
                dataIndex: 'block_signed_at',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{dayjs(text * 1000).format('MM-DD-YYYY HH:mm:ss')}</Text>
                    </div>;
                },
            },
            {
                title: <>Token in</>,
                dataIndex: 'in_token_symbol',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{text}</Text>
                    </div>;
                },
            },
            {
                title: <>Amount In</>,
                dataIndex: 'in_amount',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{text}</Text>
                    </div>;
                },
            },
            {
                title: <>Token out</>,
                dataIndex: 'out_token_symbol',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{text}</Text>
                    </div>;
                },
            },
            {
                title: <>Amount out</>,
                dataIndex: 'out_amount',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{text}</Text>
                    </div>;
                },
            },
            {
                title: <>Volume($)</>,
                dataIndex: 'volumes',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>${text}</Text>
                    </div>;
                },
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