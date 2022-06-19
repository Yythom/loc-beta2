/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import { postMainApiV1WalletBalanceList, postMainApiV1WalletBalanceTokenList } from '@/service/loc-services';
import NumberUtils from '@/utils/js_utils/number';
import { memo, useContext, useEffect, useMemo } from 'react';
import { TokenContext } from '..';
const TokenBalance = memo(() => {
    const ctx = useContext(TokenContext)
    const req = useMemo(() => {
        if (!ctx?.wallet) return null
        return {
            "page": {
                "all": true
            },
            "search": {
                "wallet_address": ctx.wallet,
            }
        }
    }, [ctx.token, ctx.wallet])

    const {
        setParams,
        params,
        tableData,
        loading,
        fetch,
        BuildTable,
        handle: {
            setSearch, //// table 自定义search
            onTableChange,
        }
    } = useTable<any, any>(
        postMainApiV1WalletBalanceList,
        {
            listen_params: req
        }
    )

    const columns = useMemo(() => {
        return [
            {
                title: 'Token',
                dataIndex: 'token_name',
            },
            {
                title: 'Token Balance',
                dataIndex: 'amount', // todo
                render: (t: any, r: any, i: any) => <div>${t}</div>
            },
            {
                title: 'Current Value',
                dataIndex: 'volumes',
                render: (t: any, r: any, i: any) => <div>${t}</div>
            },
            {
                title: '% of All Token',
                dataIndex: 'percentage',
                render: (t: any, r: any, i: any) => <div>{t}%</div>
            },
        ]
    }, []);

    return (
        <div className='table'>
            <div className='title'>Token Balance</div>
            {/* <div className='flex' style={{ justifyContent: 'flex-end' }}>
                <MoreSetting
                    setParams={setSearch}
                    params={params}
                />
            </div> */}
            <BuildTable columns={columns} hidePage={true} />
        </div>
    )
})
export default TokenBalance;