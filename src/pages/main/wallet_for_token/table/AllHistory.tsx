/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import { memo, useContext, useMemo } from 'react';
import { TokenContext } from '..';
const AllHistory = memo(() => {
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
                title: 'DateTime',
                dataIndex: '1',
            },
            {
                title: 'Type',
                dataIndex: '2',
            },
            {
                title: 'Amount',
                dataIndex: '3',
            }, {
                title: 'Value',
                dataIndex: '4',
            },
            {
                title: 'From',
                dataIndex: '5',
            },
            {
                title: 'To',
                dataIndex: '6',
            },
            {
                title: 'Price',
                dataIndex: '7',
            },
        ]
    }, []);

    return (
        <div className='AllHistory'>
            <div className='title'>All History</div>
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
export default AllHistory;