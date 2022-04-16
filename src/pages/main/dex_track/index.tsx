/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ProEchart from "@/components/echart/pro_echart";
import useRequest from "@/hooks/useRequest";
import DexTrackServices from "@/services/dex_track";
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import dayjs from "dayjs";
import { memo, useMemo } from "react";
import DEXLeaderboard from "./DEXLeaderboard";
import './index.scss'
import SmartMoneyconsistentSwapin from "./SmartMoneyconsistentSwapin";
import SmartMoneyconsistentSwapout from "./SmartMoneyconsistentSwapout";
import SmartMoneySwapVolume from "./SmartMoneySwapVolume";
import SwapTransactions from "./SwapTransactions";
const DexTrack = memo(() => {
    const [ret, fetch,
        setParams,] = useRequest<any, any>(DexTrackServices.get_dexTradeTrending_list, {
            initParams: {
                search: {
                    days: 7
                }
            }
        })
    const data = useMemo(() => {
        if (ret) {
            const arr = [
                ret?.map((e: any) => {
                    return {
                        name: 'Eth Price',
                        list: ret?.map((e: any) => e.eth_price)
                    }
                })
                ,
                ret?.map((e: any) => {
                    return {
                        name: 'volume',
                        list: ret?.map((e: any) => e.volume)
                    }
                })]
            return arr
        }
        return []
    }, [ret])
    return (
        <div className='dex_track' style={{ width: '100%', height: '100%', }}>
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
                        dataSource={data}
                    />
                }
            </div>
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