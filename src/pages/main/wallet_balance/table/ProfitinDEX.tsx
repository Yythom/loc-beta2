/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import { postMainApiV1WalletBalanceProfitList } from '@/service/loc-services';
import { memo, useContext, useMemo } from 'react';
import { TokenContext } from '..';
const ProfitinDEX = memo(() => {
    const ctx = useContext(TokenContext)

    const req = useMemo(() => {
        if (!ctx?.wallet) return null
        return {
            "page": {
                "page": 1,
                "page_size": 20
            },
            "search": {
                "period": 1,
                "wallet_address": ctx.wallet
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
        postMainApiV1WalletBalanceProfitList,
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
                title: 'Invest',
                dataIndex: 'invest_value',
                render: (e: any) => '$' + e
            },
            {
                title: 'Return',
                dataIndex: 'return_value',
                render: (e: any) => '$' + e
            },
            {
                title: 'Profit',
                dataIndex: 'profit',
                render: (e: any) => '$' + e
            },
            {
                title: 'ROI',
                dataIndex: 'roi',
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