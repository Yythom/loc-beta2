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
import DexTrackServices from "@/services/dex_track";
import NumberUtils from "@/utils/js_utils/number";

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
        DexTrackServices.get_SmartMoneySwapVolume_list,
        {
            initParams: {
                page: 1,
            }
        }
    )
    const columns = useMemo(() => {
        return [
            {
                title: <>Token in </>,
                dataIndex: 'in_token_name',
            },
            {
                title: <>Token out</>,
                dataIndex: 'out_token_name',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{text}</Text>
                    </div>;
                },
            },
            {
                title: <>Volume</>,
                dataIndex: 'volume',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>${NumberUtils.numToFixed(text, 2)}</Text>
                    </div>;
                },
            },
            {
                title: <>Volume Change</>,
                dataIndex: 'volume_change',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>${NumberUtils.numToFixed(text, 2)}</Text>
                    </div>;
                },
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