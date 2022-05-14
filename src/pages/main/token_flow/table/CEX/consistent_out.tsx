/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, } from "@douyinfe/semi-ui";
import { memo, useMemo, useState } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import MoreSetting from "@/components/table_component/MoreSetting";
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import TokenFlowServices, { TokenFlowInterface } from "@/services/token_flow";

const ConsistentOut = memo(() => {
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
    } = useTable<any, TokenFlowInterface>(
        TokenFlowServices.get_list,
        {
            initParams: {
                page: 1,
                search: {
                    direction: 'OUT',
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
                render: (text: any, record: any, index: any) => {
                    return <div className='flex'  >
                        <Text>{text}</Text>
                    </div>;
                },
            },
            {
                title: <>Outflow times </>,
                dataIndex: 'total_times',
            },
            {
                title: <>Address </>,
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
        <div className="title">Consistent Token Outflow to CEX</div>
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

export default ConsistentOut