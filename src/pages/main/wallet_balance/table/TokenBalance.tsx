/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import WalletBalanceService from '@/services/wallet_balance';
import NumberUtils from '@/utils/js_utils/number';
import { memo, useContext, useEffect, useMemo } from 'react';
import { TokenContext } from '..';
const TokenBalance = memo(() => {
    console.log('ip');

    const ctx = useContext(TokenContext)
    const req = useMemo(() => {
        return {
            page: 1,
            address: ctx?.token
        }
    }, [ctx.token])

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
        WalletBalanceService.get_tokenBalance_list,
        {
            listen_params: req
        }
    )

    const columns = useMemo(() => {
        return [
            {
                title: 'Token',
                dataIndex: 'token_info',
                render: (t: any, r: any, i: any) => <div>{t.name}</div>
            },
            {
                title: 'Token Balance ',
                dataIndex: 'price',
                render: (t: any, r: any, i: any) => <div>${t}</div>
            },
            {
                title: ' Current Value',
                dataIndex: 'usd',
                render: (t: any, r: any, i: any) => <div>${t}</div>
            },
            {
                title: '% of All Token',
                dataIndex: 'all_average',
                render: (t: any, r: any, i: any) => <div>{t}%</div>
            },
        ]
    }, []);

    return (
        <div className='table'>
            <div className='title'>Token Balance</div>
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
export default TokenBalance;