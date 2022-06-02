/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import { postMainApiV1WalletBalanceTokenList } from '@/service/loc-services';
// import TokenFlowServices from '@/services/token_flow';
import { ProModal } from '@/utils/ui_utils/toast';
import { memo, useContext, useMemo } from 'react';
import { TokenContext } from '..';

const TokenInflow = memo(() => {
    const ctx = useContext(TokenContext)

    const req = useMemo(() => {
        if (!ctx?.wallet) return null
        return {
            "sort": {
                "create_at": "desc"
            },
            "search": {
                "period": "4",
                "token_address": ctx?.token,
                "is_out": 67,
                "is_in": 65,
                "is_cex": 99,
                "wallet_address": ctx.wallet
            },
        }
    }, [ctx.token, ctx.wallet])

    const {
        setParams,
        params,
        tableData,
        loading,
        BuildTable,
        fetch,
        handle: {
            setSearch, //// table 自定义search
            onTableChange,
        }
    } = useTable<any, any>(
        postMainApiV1WalletBalanceTokenList,
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
                title: 'Inflow ',
                dataIndex: 'total_amount',
                render: (text: any, rec: any, index: any) => <div>${text}</div>,
            },
            {
                title: 'Inflow Value($)',
                dataIndex: 'volumes',
                render: (text: any, rec: any, index: any) => {
                    return (
                        <div style={{ cursor: 'pointer' }} onClick={() => ProModal(<TokenInflowModal />, 'Top 5')}>
                            ${text}
                        </div>
                    )
                }
            },
            {
                title: 'Inflow Price($)',
                dataIndex: 'average_price',
                render: (text: any, rec: any, index: any) => <div>${text}</div>,
            },
        ]
    }, []);

    return (
        <div className='table' >
            <div className='title'>Token Inflow</div>
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

export default TokenInflow;

const TokenInflowModal = memo(() => {
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
        async function name() {

        },
        {
            initParams: {
                page: 1,
                source: 'CEX'
            }
        }
    )

    const columns = useMemo(() => {
        return [
            {
                title: 'No.',
                dataIndex: '#',
                render: (text: any, rec: any, index: any) => index
            },
            {
                title: 'Address ',
                dataIndex: '##',
            },
            {
                title: 'Inflow/Ouflow',
                dataIndex: '###',
            },
        ]
    }, []);

    return (
        <div className='table' style={{ width: '800px' }} >
            <BuildTable columns={columns} />
        </div>
    )
})