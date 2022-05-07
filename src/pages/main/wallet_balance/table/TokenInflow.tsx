/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import { ProModal } from '@/utils/ui_utils/toast';
import { memo, useContext, useMemo } from 'react';
import { TokenContext } from '..';

const TokenInflow = memo(() => {
    const ctx = useContext(TokenContext)

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
            return { list: [{}] }
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
                title: 'Token',
                dataIndex: '#',
            },
            {
                title: 'Inflow ',
                dataIndex: '##',
            },
            {
                title: 'Inflow Value($)',
                dataIndex: '###',
                render: (text: any, rec: any, index: any) => {
                    return (
                        <div style={{ cursor: 'pointer' }} onClick={() => ProModal(<TokenInflowModal />, 'Top 5')}>
                            {text || '--'}
                        </div>
                    )
                }

            },
            {
                title: 'Inflow Price($)',
                dataIndex: '####',
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