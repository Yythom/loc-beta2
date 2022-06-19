/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, Modal, Table } from "@douyinfe/semi-ui";
import { memo, useMemo } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { Pagination } from '@douyinfe/semi-ui';
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import LangComponent from "@/lang/local";
import MoreSetting from "@/components/table_component/MoreSetting";
import NumberUtils from "@/utils/js_utils/number";
import { postMainApiV1DexTraceDexLeaderBoardList, postMainApiV1DexTraceDexLeaderBoardListDetail } from "@/service/loc-services";
import { ProModal } from "@/utils/ui_utils/toast";
import dayjs from "dayjs";

const DEXLeaderboard = memo(() => {
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
    } = useTable<any, any>(
        postMainApiV1DexTraceDexLeaderBoardList,
        {
            initParams: {
                "sort": {
                    "create_at": "desc",
                },
                "page": {
                    "page_size": 10,
                    "page": 1,
                },
                "search": {
                    "period": 1
                }
            }
        }
    )

    const columns = useMemo(() => {
        return [
            {
                title: 'Address ',
                dataIndex: '#####',
                render: (t: any, r: any) => {
                    const text = r?.wallet_address
                    return <div className='flex hover' onClick={() => {
                        ProModal(<DetailModal wallet_address={r?.wallet_address} period={params?.search?.period} />, <Text className="title hover" onClick={() => window.open('/wallet-balance?address=' + (text || r?.address?.wallet_address))}>{text}</Text>)
                    }} >
                        {text}
                    </div >;
                },
            },
            {
                title: 'Invest($)',
                dataIndex: 'invest_value',
                render: (r: any) => '$' + r
            },
            {
                title: 'Return($)',
                dataIndex: 'return_value',
                render: (r: any) => '$' + r
            },
            {
                title: 'Profit($)',
                dataIndex: 'profit',
                render: (r: any) => '$' + r
            },
            {
                title: 'ROI',
                dataIndex: 'roi',
                render: (r: any) => r + '%'
            },
        ]
    }, [params?.search]);

    return <div style={{ marginTop: '12px' }}>
        <div className="title">DEX Leaderboard   </div>
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

export default DEXLeaderboard


const DetailModal = memo(({ wallet_address, period }: { wallet_address: string, period: number }) => {
    const history = useHistory()

    const {
        setParams,
        params,
        tableData,
        BuildTable,
        loading
    } = useTable<any, any>(
        postMainApiV1DexTraceDexLeaderBoardListDetail,
        {
            initParams: {
                "period": period,
                "wallet_address": wallet_address,
                "page": {
                    "page_size": 5,
                    "page": 1,
                    "total": true
                }
            }
        }
    )

    const columns = useMemo(() => {
        return [
            {
                title: 'In Token',
                dataIndex: 'in_token_symbol',
            },
            {
                title: 'Out Token',
                dataIndex: 'out_token_symbol',
            },
            {
                title: 'Invest($)',
                dataIndex: 'invest_value',
                render: (r: any) => '$' + r
            },
            {
                title: 'Return($)',
                dataIndex: 'return_value',
                render: (r: any) => '$' + r
            },
            {
                title: 'Profit($)',
                dataIndex: 'profit',
                render: (r: any) => '$' + r
            },
            {
                title: 'ROI',
                dataIndex: 'roi',
                render: (r: any) => r + '%'
            },
            {
                title: 'Time',
                dataIndex: 'create_at',
                render: (r: any) => dayjs(r * 1000).format('YYYY-MM-DD HH:mm:ss')
            },
        ]
    }, []);

    return <div style={{ marginTop: '12px' }}>
        <div className='Portfolio card' style={{ marginTop: '20px' }}>
            <BuildTable columns={columns} />
        </div>
    </div>
})
