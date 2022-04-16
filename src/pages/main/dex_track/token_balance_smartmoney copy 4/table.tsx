/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, Table } from "@douyinfe/semi-ui";
import { memo, useMemo } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { Pagination } from '@douyinfe/semi-ui';
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import LangComponent from "@/lang/local";
import MoreSetting from "@/components/table_component/MoreSetting";
import TokenBalanceService from "@/services/token_balance";

const TableComponent = memo(() => {
    const history = useHistory()
    const {
        setParams,
        params,
        tableData,
        loading,
        handle: {
            setSearch
        }
    } = useTable<any, any>(
        TokenBalanceService.get_smartmoney_holding_list,
        {
            initParams: {
                page: 1,
            }
        }
    )
    const columns = useMemo(() => {
        return [
            {
                title: <>Token</>,
                dataIndex: '#',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{index}</Text>
                    </div>;
                },
            },
            {
                title: <>Balance</>,
                dataIndex: '#1',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{index}</Text>
                    </div>;
                },
            },
            {
                title: <>Current Value</>,
                dataIndex: '#2',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{index}</Text>
                    </div>;
                },
            },
            {
                title: <>Holding Percenatge</>,
                dataIndex: '#3',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{index}</Text>
                    </div>;
                },
            },
            {
                title: <>Balance  Change</>,
                dataIndex: '#4',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{index}</Text>
                    </div>;
                },
            },
            {
                title: <>Holding Value Change</>,
                dataIndex: '#5',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{index}</Text>
                    </div>;
                },
            },
            {
                title: <>Holding Percenatge change</>,
                dataIndex: '#6',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{index}</Text>
                    </div>;
                },
            },

        ]
    }, [params]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <div className='flex' style={{ justifyContent: 'flex-end' }}>
            <Collapsible isOpen={true}>
                <MoreSetting
                    setParams={setSearch}
                    params={params}
                />
            </Collapsible>
            <Pagination
                showTotal
                total={tableData?.total}
                currentPage={params?.page}
                pageSize={10}
                onPageChange={page => setParams('page', page)}
                size='small'
                hoverShowPageSelect
            />
        </div>

        <div className='Portfolio card' style={{ marginTop: '20px' }}>
            <LangComponent>
                <Table
                    loading={loading}
                    className='table'
                    pagination={false}
                    columns={columns}
                    dataSource={tableData?.list}
                />
            </LangComponent>
        </div>
    </div>

})

export default TableComponent