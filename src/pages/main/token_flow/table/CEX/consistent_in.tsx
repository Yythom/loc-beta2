/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, } from "@douyinfe/semi-ui";
import { memo, useMemo, useState } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import MoreSetting from "@/components/table_component/MoreSetting";
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import ConsistentService, { TokenFlowInterface } from "@/services/token_flow";

const ConsistentIn = memo(() => {
    const history = useHistory()
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
    } = useTable<any, TokenFlowInterface>(
        ConsistentService.get_list,
        {
            initParams: {
                page: 1,
                search: {
                    direction: 'IN',
                    source: 'CEX',
                    consistent: true,
                    time_range: 1
                }
            }
        }
    )
    const columns = useMemo(() => {
        return [
            {
                title: <>Token </>,
                dataIndex: 'token_name',
            },
            {
                title: <>Inflow times </>,
                dataIndex: 'total_times',
            },
            {
                title: <>Address</>,
                dataIndex: 'address_num',
            },
            {
                title: <>Avg Inflow Times</>,
                dataIndex: 'average_times',
            },
            {
                title: <>volume</>,
                dataIndex: 'volumes',
            },
        ]
    }, [params]);

    return <div style={{ marginTop: '12px' }}>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
        <div className="title">Consistent Token Inflow to CEX</div>
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

export default ConsistentIn