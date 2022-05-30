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
import { postMainApiV1DexTraceDexLeaderBoardList } from "@/service/loc-services";

const DEXLeaderboard = memo(() => {
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
        postMainApiV1DexTraceDexLeaderBoardList,
        {
            initParams: {
                page: 1,
            }
        }
    )
    const columns = useMemo(() => {
        return [
            {
                title: <>Address</>,
                dataIndex: 'address',
                render: (text: any, r: any) => {
                    return <div className='flex hover' onClick={() => history.push('/wallet-balance?address=' + r.address)}>
                        <Text>{r.name || r.address}</Text>
                    </div>;
                },
            },
            {
                title: <>Invest($)</>,
                dataIndex: 'invest_usd',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>${text}</Text>
                    </div>;
                },
            },
            {
                title: <>Return($)</>,
                dataIndex: 'return_usd',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>${text}</Text>
                    </div>;
                },
            },
            {
                title: <>Profit($)</>,
                dataIndex: 'profit_usd',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>${text}</Text>
                    </div>;
                },
            },
            {
                title: <>ROI</>,
                dataIndex: 'profit_rate',
                render: (text: any, record: any, index: any) => {
                    return <div className='flex' >
                        <Text>{text}%</Text>
                    </div>;
                },
            },
        ]
    }, []);

    return <div style={{ marginTop: '12px' }}>
        <div className="title">DEX Leaderboard</div>
        {/* <DefaultSetting setParams={setSearchParams} setOpen={setOpen} isOpen={isOpen} /> */}
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

export default DEXLeaderboard