/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import TokenFlowServices from '@/services/token_flow';
import { ProModal } from '@/utils/ui_utils/toast';
import { memo, useContext, useMemo } from 'react';
import { TokenContext } from '..';

const TokenOutflowfromCEX = memo(() => {
    const ctx = useContext(TokenContext)
    const req = useMemo(() => {
        if (!ctx.wallet || !ctx?.token) return null
        return {
            page: 1,
            address: ctx.wallet,
            search: {
                source: 'CEX',
                direction: 'out',
                token_address: ctx?.token
            }
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
        TokenFlowServices.get_list,
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
                dataIndex: 'total_amount',
                render: (text: any, rec: any, index: any) => <div>${text}</div>,
            },
            {
                title: 'Outflow Value',
                dataIndex: 'volumes',
                render: (text: any, rec: any, index: any) => {
                    return (
                        <div style={{ cursor: 'pointer' }} onClick={() => ProModal(<TokenModal />, 'Top 5')}>
                            ${text}
                        </div>
                    )
                }
            },
            {
                title: 'Outflow Price',
                dataIndex: 'average_price',
                render: (text: any, rec: any, index: any) => <div>${text}</div>,
            },
        ]
    }, []);

    return (
        <div className='table'>
            <div className='title'>Token Outflow to CEX</div>
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
export default TokenOutflowfromCEX;

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