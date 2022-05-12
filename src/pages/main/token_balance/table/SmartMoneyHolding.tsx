/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useMemo } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { Collapsible, Pagination } from '@douyinfe/semi-ui';
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import LangComponent from "@/lang/local";
import MoreSetting from "@/components/table_component/MoreSetting";
import TokenBalanceService from "@/services/token_balance";
import NumberUtils from "@/utils/js_utils/number";

const SmartMoneyHolding = memo(() => {
    const history = useHistory()
    const {
        setParams,
        params,
        tableData,
        loading,
        BuildTable,
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
                dataIndex: 'token_name',
            },
            {
                title: <>Balance</>,
                dataIndex: 'token_balance',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{NumberUtils.numToFixed(text, 2)}</Text>
                    </div>;
                },
            },
            {
                title: <>Current Value</>,
                dataIndex: 'current_value',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>${NumberUtils.numToFixed(text, 2)}</Text>
                    </div>;
                },
            },
            {
                title: <>% of All Token</>,
                dataIndex: 'current_of_all',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{NumberUtils.numToFixed(text, 2)} %</Text>
                    </div>;
                },
            },
            {
                title: <>Address</>,
                dataIndex: 'address_num',
            },
            {
                title: <>Value Change</>,
                dataIndex: 'value_change',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>${NumberUtils.numToFixed(text, 2)}</Text>
                    </div>;
                },
            },
            {
                title: <>Token Change</>,
                dataIndex: 'current_change',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{NumberUtils.numToFixed(text, 2)}</Text>
                    </div>;
                },
            },

        ]
    }, [params]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <div className="title">Smart Money Holding</div>
        <div className='flex' style={{ justifyContent: 'flex-end' }}>
            <Collapsible isOpen={true}>
                <MoreSetting
                    setParams={setSearch}
                    params={params}
                />
            </Collapsible>
        </div>

        <BuildTable columns={columns} />
    </div>

})

export default SmartMoneyHolding