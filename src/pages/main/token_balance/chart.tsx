/* eslint-disable @typescript-eslint/no-unused-vars */
import ProEchart from "@/components/echart/pro_echart";
import useRequest from "@/hooks/useRequest";
import { postMainApiV1DexTraceTotalSwapVolumesList, postMainApiV1TokenBalanceEthList, postMainApiV1TokenBalanceStableList, postMainApiV1TokenBalanceTotalList, postMainApiV1TokenPriceHistoryList } from "@/service/loc-services";
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import dayjs from "dayjs";
import { Fragment, memo } from "react";

const TokenBalanceChart = memo((props) => {
    const [totalList, fetch,
        setParamsTotal,] = useRequest<any, any>(postMainApiV1TokenBalanceTotalList, {
            initParams: {
                "search": {
                    "period": 1
                },
                "page": {
                    "total": false,
                    "all": true
                }
            }
        })

    const [ethList, fff,
        setParamsEthList,] = useRequest<any, any>(postMainApiV1TokenBalanceEthList, {
            initParams: {
                "search": {
                    "period": 1
                },
                "page": {
                    "total": false,
                    "all": true
                }
            }
        })

    const [stableList, f,
        setParamsStable,] = useRequest<any, any>(postMainApiV1TokenBalanceStableList, {
            initParams: {
                "page": {
                    "all": true,
                    "total": false
                },
                "search": {
                    "period": 1
                }
            }
        })
    const [tokenHistoryList, ff,
        setParamsHistoryTokens,] = useRequest<any, any>(postMainApiV1TokenPriceHistoryList, {
            initParams: {
                "page": {
                    "all": true
                },
                "sort": {
                    "create_at": "desc"
                },
                "search": {
                    "token_address": "0x0000000000000000000000000000000000000000",
                    "period": 1,
                    'two_hour': true
                },
                "condition": {}
            }
        })

    return <Fragment>
        <Text>
            <h2>Portfolio Overview </h2>
        </Text>
        <div className="fd" style={{ alignItems: 'flex-end' }}>
            <div className="flex more_setting"  >
                <Tabs
                    type="button"
                    defaultActiveKey="1"
                    onChange={(itemKey) => {
                        setParamsTotal('search', {
                            period: Number(itemKey)
                        })
                    }}>
                    <TabPane tab="1 Day" itemKey="1" />
                    <TabPane tab="3 Day" itemKey="2" />
                    <TabPane tab="7 Day" itemKey="3" />
                </Tabs>
            </div>
            <ProEchart
                classname='Portfolio'
                option={{
                    x_option: {
                        name: ' Date',
                        data: totalList?.list?.map((e: any) => dayjs(e.create_at * 1000).format('YY-M-D H') + 'h') || [],
                    },
                }}
                dataSource={[{
                    name: 'Smart Money Holding',
                    list: totalList?.list?.map((e: any) => e.balance_volumes) || [],
                    y_option: {
                        min: 'dataMin', //取最小值为最小刻度 
                    }
                }]}
            />
        </div>

        {props?.children}

        {/* 表二 */}
        <Text>
            <h2>Smart Money StableCoin & ETH vs All Coins</h2>
        </Text>
        <div className="fd" style={{ alignItems: 'flex-end' }}>
            <div className="flex more_setting"  >
                <Tabs
                    type="button"
                    defaultActiveKey="1"
                    onChange={(itemKey) => {
                        setParamsStable('search', {
                            period: Number(itemKey)
                        })
                        setParamsEthList('search', {
                            period: Number(itemKey)
                        })
                        setParamsHistoryTokens('search', {
                            period: Number(itemKey)
                        })

                    }}>
                    <TabPane tab="1 Day" itemKey="1" />
                    <TabPane tab="3 Day" itemKey="2" />
                    <TabPane tab="7 Day" itemKey="3" />
                </Tabs>
            </div>
            <ProEchart
                classname='StableCoin'
                option={{
                    x_option: {
                        name: ' Date',
                        data: stableList?.list?.map((e: any) => dayjs(e.create_at * 1000).format('YY-M-D H') + 'h') || [],
                    },
                }}

                dataSource={[
                    [
                        {
                            name: 'Eth Price ($)',
                            list: tokenHistoryList?.list?.map((e: any) => e.price) || [],
                            y_option: {
                                // "axisTick": {       //y轴刻度线
                                //     "show": false
                                // },
                                min: 'dataMin', //取最小值为最小刻度 
                            }
                        },
                    ],
                    [
                        {
                            name: 'Eth percentage (%)',
                            list: ethList?.list?.map((e: any) => e.percentage) || [],
                            y_option: {

                                axisLabel: {
                                    show: false
                                },

                                min: 'dataMin', //取最小值为最小刻度 
                            }
                        },
                    ],
                    [
                        {
                            name: 'Stable percentage (%)',
                            list: stableList?.list?.map((e: any) => e.percentage) || [],
                            y_option: {
                                nameLocation: 'middle',
                                axisLabel: {
                                    show: false
                                },

                                min: 'dataMin', //取最小值为最小刻度 
                            }
                        },
                    ]
                ]}
            />
        </div>
    </Fragment>
})

export default TokenBalanceChart