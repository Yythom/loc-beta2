/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import { memo, useContext, useMemo } from 'react';
import { TokenContext } from '..';
const ProfitinDEX = memo(() => {
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
                title: 'Invest($)',
                dataIndex: '##',
            },
            {
                title: 'Return($)',
                dataIndex: '###',
            },
            {
                title: 'Profit($)',
                dataIndex: '####',
            },
            {
                title: 'ROI',
                dataIndex: '#####',
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