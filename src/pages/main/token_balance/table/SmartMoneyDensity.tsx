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
import NumberUtils from "@/utils/js_utils/number";

const SmartMoneyDensity = memo(() => {
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
        TokenBalanceService.get_smartMoneyDensity_list,
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
                title: <>Market Cap</>,
                dataIndex: 'market_cap',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>${NumberUtils.numToFixed(text, 2)}</Text>
                    </div>;
                },
            },
            {
                title: <>Market Cap Holding by SmartMoney</>,
                dataIndex: 'total_value',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>${NumberUtils.numToFixed(text, 2)}</Text>
                    </div>;
                },
            },
            {
                title: <>% of Market Cap</>,
                dataIndex: 'market_cap_of_ratio',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{NumberUtils.numToFixed(text, 2)} %</Text>
                    </div>;
                },
            },
            {
                title: <>% of Market Cap Change(1d)</>,
                dataIndex: 'market_cap_change_ratio',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{NumberUtils.numToFixed(text, 2)} %</Text>
                    </div>;
                },
            },
        ]
    }, [params]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <div className="title">Smart Money Density</div>
        <div className='flex' style={{ justifyContent: 'flex-end' }}>
            {/* <Collapsible isOpen={true}>
                <MoreSetting
                    setParams={setSearch}
                    params={params}
                />
            </Collapsible> */}
        </div>

        <BuildTable columns={columns} />
    </div>

})

export default SmartMoneyDensity