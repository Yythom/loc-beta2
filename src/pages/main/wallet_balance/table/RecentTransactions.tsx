/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import { postMainApiV1WalletBalanceTransactionsList } from '@/service/loc-services';
import { getSubStr } from '@/utils/js_utils/format';
import dayjs from 'dayjs';
import { memo, useContext, useMemo } from 'react';
import { TokenContext } from '..';

const RecentTransactions = memo(() => {
    const ctx = useContext(TokenContext)
    const req = useMemo(() => {
        if (!ctx?.wallet) return null
        return {
            "sort": {
                "create_at": "desc"
            },
            "search": {
                "wallet_address": ctx.wallet,
            },
            "condition": {},
            "page": {
                "page_size": 20,
                "page": 1
            }
        }
    }, [ctx?.wallet, ctx?.token])

    const {
        setParams,
        params,
        tableData,
        loading,
        BuildTable,
        handle: {
            setSearch, //// table 自定义search
            onTableChange,
        }
    } = useTable<any, any>(
        postMainApiV1WalletBalanceTransactionsList,
        {
            listen_params: req
        }
    )
    const columns = useMemo(() => {
        return [
            {
                title: 'DateTime',
                dataIndex: 'create_at',
                render: (t: any) => <div>{dayjs(t * 1000).format('YYYY-MM-DD HH:mm:ss')}</div>
            },
            {
                title: 'Type',
                dataIndex: 'type',
                render: (t: any) => {
                    if (t === 1) return 'Send'
                    if (t === 2) return 'Received'
                    if (t === 3) return 'Swap'
                }
            },
            {
                title: 'From',
                dataIndex: 'from_info',
                render: (t: any, r: any) => {
                    return t?.type === 1 ?
                        <div >
                            <div>{t?.value}</div>
                            <div>{t?.token?.symbol}</div>
                        </div> :
                        <div>
                            <div>From</div>
                            <div>{getSubStr(r.from)}</div>
                        </div>
                }
            },
            {
                title: 'To',
                dataIndex: 'to_info',
                render: (t: any, r: any) => {
                    return t?.type === 1 ?
                        <div >
                            <div>{t?.value}</div>
                            <div>{t?.token?.symbol}</div>
                        </div> :
                        <div>
                            <div>To</div>
                            <div>{getSubStr(r.to)}</div>
                        </div>
                }
            },

            {
                title: 'Value',
                dataIndex: 'value',
            },
        ]
    }, []);

    return (
        <div className='table'>
            <div className='title'>Recent Transactions</div>
            <div className='flex' style={{ justifyContent: 'flex-end' }}>
                <MoreSetting
                    setParams={setSearch}
                    params={params}
                />
            </div>
            <BuildTable columns={columns} />
        </div>
    )
})
export default RecentTransactions;