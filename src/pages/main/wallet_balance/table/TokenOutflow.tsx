/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import { postMainApiV1WalletBalanceTokenFlow, } from '@/service/loc-services';
import { ProModal } from '@/utils/ui_utils/toast';
import { memo, useContext, useEffect, useMemo } from 'react';
import { TokenContext } from '..';

const TokenOutflow = memo(() => {
    const ctx = useContext(TokenContext)
    const req = useMemo(() => {
        if (!ctx?.wallet) return null
        return {
            "sort": {
                "create_at": "desc",
                volumes: 'asc',
            },
            "search": {
                "period": 1,
                "token_address": ctx?.token,
                "is_out": 1,
                "is_in": 0,
                "is_cex": 0,
                "wallet_address": ctx.wallet
            },
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
        postMainApiV1WalletBalanceTokenFlow,
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
                title: 'Outflow ',
                dataIndex: 'out_amount',
                render: (text: any, rec: any, index: any) => <div>${text}</div>,
            },
            {
                title: 'Outflow Value($)',
                dataIndex: 'out_volumes',
                render: (text: any, rec: any, index: any) => {
                    return (
                        <div style={{ cursor: 'pointer' }} onClick={() => ProModal(<TokenModal />, 'Top 5')}>
                            ${text}
                        </div>
                    )
                }
            },
            {
                title: 'Outflow Price($)',
                dataIndex: 'out_average_price',
                render: (text: any, rec: any, index: any) => <div>${text}</div>,
            },
        ]
    }, []);

    return (
        <div className='table'>
            <div className='title'>Token Outflow</div>
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

export default TokenOutflow;

const TokenModal = memo(() => {
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