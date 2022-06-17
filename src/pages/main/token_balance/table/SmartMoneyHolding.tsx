/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useMemo } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { Collapsible, Pagination } from '@douyinfe/semi-ui';
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import LangComponent from "@/lang/local";
import MoreSetting from "@/components/table_component/MoreSetting";
import NumberUtils from "@/utils/js_utils/number";
import { postMainApiV1TokenBalanceHolding } from "@/service/loc-services";

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
        postMainApiV1TokenBalanceHolding,
        {
            initParams: {
                "page": {
                    "page": 1,
                    "page_size": 10,
                }
            }
        }
    )
    const columns = useMemo(() => {
        return [
            {
                title: 'Token',
                dataIndex: 'token_name',
            },
            {
                title: 'Token Balance',
                dataIndex: 'position_amount',

            },
            {
                title: 'Current Value',
                dataIndex: 'position_volumes',
                render: (r: any) => '$' + r
            },
            {
                title: '% of All Token',
                dataIndex: 'percentage',
                render: (r: any) => r + '%'
            },
            {
                title: 'Address',
                dataIndex: 'address_count',
            },
            {
                title: 'Value Change',
                dataIndex: 'volumes_change',
                render: (r: any) => '$' + r
            },
            {
                title: 'Token Change',
                dataIndex: 'amount_change',
            },

        ]
    }, [params]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <div className="title">Smart Money Holding</div>
        {/* <div className='flex' style={{ justifyContent: 'flex-end' }}>
            <Collapsible isOpen={true}>
                <MoreSetting
                    setParams={setSearch}
                    params={params}
                />
            </Collapsible>
        </div> */}

        <BuildTable columns={columns} />
    </div>

})

export default SmartMoneyHolding