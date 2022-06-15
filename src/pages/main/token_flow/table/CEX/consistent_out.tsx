/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collapsible, } from "@douyinfe/semi-ui";
import { memo, useMemo, useState } from "react";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import MoreSetting from "@/components/table_component/MoreSetting";
import { useHistory } from "react-router";
import useTable from "@/hooks/useTable";
import { postMainApiV1TokenFlowList } from "@/service/loc-services";

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
    } = useTable<any, any>(
        postMainApiV1TokenFlowList,
        {
            initParams: {
                sort: { volumes: 'asc' },
                "search": {
                    "is_consistent": 1,
                    "is_in": 0,
                    "is_out": 1,
                    "period": 1,
                    "is_cex": 1
                },
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
                title: <>Token </>,
                dataIndex: 'token_name',
            },
            {
                title: <>Outflow times </>,
                dataIndex: 'times',
            },
            {
                title: <>Address </>,
                dataIndex: 'wallet_address_count',
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