/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import WalletBalanceService from '@/services/wallet_balance';
import NumberUtils from '@/utils/js_utils/number';
import { ProModal } from '@/utils/ui_utils/toast';
import { memo, useContext, useEffect, useMemo } from 'react';
import { TokenContext } from '..';

const TokenOutflow = memo(() => {
    const ctx = useContext(TokenContext)
    const req = useMemo(() => {
        return {
            page: 1,
            source: 'SMARTMONEY',
            type: 'out',
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
        WalletBalanceService.get_whiteTransaction_list,
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
                dataIndex: 'amount',
                render: (text: any, rec: any, index: any) => <div>${NumberUtils.numToFixed(text, 6)}</div>,
            },
            {
                title: 'Outflow Value($)',
                dataIndex: 'usd',
                render: (text: any, rec: any, index: any) => {
                    return (
                        <div style={{ cursor: 'pointer' }} onClick={() => ProModal(<TokenModal />, 'Top 5')}>
                            ${NumberUtils.numToFixed(text, 6)}
                        </div>
                    )
                }
            },
            {
                title: 'Outflow Price($)',
                dataIndex: 'price',
                render: (text: any, rec: any, index: any) => <div>${NumberUtils.numToFixed(text, 6)}</div>,
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