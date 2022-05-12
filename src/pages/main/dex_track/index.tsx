/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ProEchart from "@/components/echart/pro_echart";
import useRequest from "@/hooks/useRequest";
import DexTrackServices from "@/services/dex_track";
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import dayjs from "dayjs";
import { Fragment, memo, useMemo } from "react";
import './index.scss'
import DEXLeaderboard from "./table/DEXLeaderboard";
import SmartMoneyconsistentSwapin from "./table/SmartMoneyconsistentSwapin";
import SmartMoneyconsistentSwapout from "./table/SmartMoneyconsistentSwapout";
import SmartMoneySwapVolume from "./table/SmartMoneySwapVolume";
import SwapTransactions from "./table/SwapTransactions";
const DexTrack = memo(() => {
    const [ret, fetch,
        setParams,] = useRequest<any, any>(DexTrackServices.get_dexTradeTrending_list, {
            initParams: {
                search: {
                    days: 7
                }
            }
        })

    return (
        <div className='dex_track' style={{ width: '100%', height: '100%', }}>
            {/* {
                ret && <Fragment>
                    <Text>
                        <h2>Smart Money DEX Trade Trending </h2>
                    </Text>
                    <div className="fd" style={{ alignItems: 'flex-end' }}>
                        <div className="flex more_setting"  >
                            <Tabs
                                type="button"
                                defaultActiveKey="7"
                                onChange={(itemKey) => {
                                    setParams('search', {
                                        days: itemKey || ''
                                    })
                                }}>
                                <TabPane tab="1 Day" itemKey="1" />
                                <TabPane tab="3 Day" itemKey="3" />
                                <TabPane tab="7 Day" itemKey="7" />
                            </Tabs>
                        </div>
                        {
                            ret && <ProEchart
                                classname='test3'
                                option={{
                                    x_option: {
                                        name: 'Date',
                                        data: ret?.map((e: any) => dayjs(e.tag * 1000).format('MM/DD YYYY')),
                                    },
                                }}
                                dataSource={[
                                    [
                                        {
                                            name: 'Eth Price',
                                            list: ret?.map((e: any) => e.eth_price)
                                        },
                                        {
                                            name: 'volume',
                                            list: ret?.map((e: any) => e.volume)
                                        }
                                    ]
                                ]}
                            />
                        }
                    </div>
                </Fragment>
            } */}

            <DEXLeaderboard />

            <div style={{ height: '2rem' }} />

            <SwapTransactions />

            <div style={{ height: '2rem' }} />

            <SmartMoneySwapVolume />

            <div className="flex" style={{ marginTop: '2rem' }}>
                <SmartMoneyconsistentSwapin />
                <div style={{ width: '3rem' }} />
                <SmartMoneyconsistentSwapout />
            </div>

            <div style={{ height: '2rem' }} />
        </div >
    )
})

export default DexTrack;