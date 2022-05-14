/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MoreSetting from '@/components/table_component/MoreSetting';
import useTable from '@/hooks/useTable';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import { memo, useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { TokenContext } from '..';
const TopGainers = memo(() => {
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

    const history = useHistory();
    const columns = useMemo(() => {
        return [
            {
                title: 'Address',
                dataIndex: '1',
                render: (text: any) => {
                    return <div className='flex hover' onClick={() => history.push('/wallet-balance?address=' + text)}>
                        <Text>{text}</Text>
                    </div>;
                },
            },
            {
                title: 'Holding Balance',
                dataIndex: '2',
            },
            {
                title: 'Holding Value',
                dataIndex: '3',
            },
            {
                title: ' Amount in',
                dataIndex: '4',
            },
            {
                title: 'Buying Price($)',
                dataIndex: '5',
            },
            {
                title: 'Amount out',
                dataIndex: '6',
            },
            {
                title: 'Selling Price($)',
                dataIndex: '7',
            },
            {
                title: 'Profit($)',
                dataIndex: '8',
            },
            {
                title: 'ROI',
                dataIndex: '9',
            },
        ]
    }, []);

    return (
        <div className='TopGainers'>
            <div className='title'>Top Gainers</div>
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
export default TopGainers;