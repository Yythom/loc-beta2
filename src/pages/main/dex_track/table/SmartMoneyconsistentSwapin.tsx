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
import NumberUtils from "@/utils/js_utils/number";
import { postMainApiV1DexTraceSwapConsistentList } from "@/service/loc-services";

const SmartMoneyconsistentSwapin = memo(() => {
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
        postMainApiV1DexTraceSwapConsistentList,
        {
            initParams: {
                "condition": {},
                "search": {
                    "period": 1,
                    "swap_direction": 1
                },
                "page": {
                    "page": 1,
                    "page_size": 10,
                },
                "sort": {
                    "volumes": "desc"
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
                title: 'Swap in Times',
                dataIndex: 'times',
            },
            {
                title: 'Address',
                dataIndex: 'address_count',
            },
            {
                title: 'Avg Swap in Times',
                dataIndex: 'avg_swap_times',
            },
            {
                title: 'Swap in volume',
                dataIndex: 'volumes',
                render: (r: any) => '$' + r
            },
        ]
    }, [params]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <div className="title">Smart Money Consistent Swap in</div>
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

export default SmartMoneyconsistentSwapin