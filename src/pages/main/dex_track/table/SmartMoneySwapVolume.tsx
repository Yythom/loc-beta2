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
import { postMainApiV1DexTraceSwapVolumesList } from "@/service/loc-services";

const SmartMoneySwapVolume = memo(() => {
    const history = useHistory()
    const {
        setParams,
        params,
        tableData,
        BuildTable,
        loading,
        handle: {
            setSearch
        }
    } = useTable<any, any>(
        postMainApiV1DexTraceSwapVolumesList,
        {
            initParams: {
                "sort": {
                    "volumes": "desc"
                },
                "page": {
                    "page": 1,
                    "page_size": 10
                },
                "search": {
                    "period": 1
                }
            }
        }
    )
    const columns = useMemo(() => {
        return [
            {
                title: 'Token in ',
                dataIndex: '#',
                render: (text: any, record: any, index: any) => record?.swap_pair?.in_token_symbol,
            },
            {
                title: 'Token out',
                dataIndex: '##',
                render: (text: any, record: any, index: any) => record?.swap_pair?.out_token_symbol,
            },
            {
                title: 'Volume',
                dataIndex: 'volumes',
                render: (r: any) => '$' + r
            },
            {
                title: 'Volume Change',
                dataIndex: 'volumes_change',
                render: (r: any) => '$' + r
            },
        ]
    }, [params]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <div className="title">Smart Money Swap Volume</div>
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

export default SmartMoneySwapVolume