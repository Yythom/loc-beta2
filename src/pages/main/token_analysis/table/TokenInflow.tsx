/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
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
                title: 'Address',
                dataIndex: '1',
            },
            {
                title: 'Inflow',
                dataIndex: '2',
            },
            {
                title: 'Average Inflow Price',
                dataIndex: '3',
            },
        ]
    }, []);

    return (
        <div className='TokenInflow'>
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