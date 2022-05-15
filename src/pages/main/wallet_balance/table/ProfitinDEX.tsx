/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import WalletBalanceService from '@/services/wallet_balance';
import { memo, useContext, useMemo } from 'react';
import { TokenContext } from '..';
const ProfitinDEX = memo(() => {
    const ctx = useContext(TokenContext)

    const req = useMemo(() => {
        if (!ctx?.token) return null
        return {
            page: 1,
            address: ctx.wallet,
            search: {
                token_address: ctx?.token,
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
        WalletBalanceService.get_profit_list,
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
                title: 'Invest($)',
                dataIndex: 'invest_usd',
                render: (e: any) => '$' + e
            },
            {
                title: 'Return($)',
                dataIndex: 'return_usd',
                render: (e: any) => '$' + e
            },
            {
                title: 'Profit($)',
                dataIndex: 'profit_usd',
                render: (e: any) => '$' + e
            },
            {
                title: 'ROI',
                dataIndex: 'profit_rate',
                render: (e: any) => e + '%'
            },
        ]
    }, []);

    return (
        <div className='table'>
            <div className='title'>Profit in DEX</div>
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
export default ProfitinDEX;