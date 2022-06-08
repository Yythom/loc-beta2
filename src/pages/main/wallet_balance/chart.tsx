/* eslint-disable @typescript-eslint/no-unused-vars */
import ProEchart from "@/components/echart/pro_echart";
import useRequest from "@/hooks/useRequest";
import { postMainApiV1DexTraceTotalSwapVolumesList, postMainApiV1TokenPriceHistoryList, postMainApiV1WalletBalanceTokenList, postMainApiV1WalletBalanceTotalList } from "@/service/loc-services";
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import { Fragment, memo, useContext } from "react";
import { TokenContext } from ".";

const WalletChart = memo(() => {
    const ctx = useContext(TokenContext)
    const [walletBalanceTotal, fetch,
        setParamsTotal,] = useRequest<any, any>(postMainApiV1WalletBalanceTotalList, {
            initParams: {
                "page": {
                    "all": true
                },
                "search": {
                    "period": 1,
                    "wallet_address": "0xea5abc1a1689984ebfdc41130886bdaeb5c24078"
                }
            }
        })

    const [walletBalances, f,
        setParamsTokens,] = useRequest<any, any>(postMainApiV1WalletBalanceTokenList, {
            initParams: {
                "page": {
                    "all": true
                },
                "search": {
                    "token_address": "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
                    "period": 1,
                    "wallet_address": "0xdbf5e9c5206d0db70a90108bf936da60221dc080"
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
                    "period": 1
                },
                "condition": {}
            }
        })

    return <Fragment>
        <Text>
            <h2>Token Overview</h2>
        </Text>
        <div className="fd" style={{ alignItems: 'flex-end' }}>
            <div className="flex more_setting"  >
                <Tabs
                    type="button"
                    defaultActiveKey="1"
                    onChange={(itemKey) => {
                        setParamsTotal('search', {
                            period: Number(itemKey || '')
                        })
                        setParamsTokens('search', {
                            period: Number(itemKey || '')
                        })
                        setParamsHistoryTokens('search', {
                            period: Number(itemKey || '')
                        })
                    }}>
                    <TabPane tab="1 Day" itemKey="1" />
                    <TabPane tab="3 Day" itemKey="2" />
                    <TabPane tab="7 Day" itemKey="3" />
                </Tabs>
            </div>
            <ProEchart
                classname='test3'
                option={{
                    x_option: {
                        name: 'Date',
                        data: tokenHistoryList?.list?.map((e: any) => `111`) || [],
                    },
                }}
                dataSource={[
                    [
                        {
                            name: 'Eth Price',
                            list: walletBalances?.list?.map((e: any) => e.current_price) || []
                        },
                    ],
                    [
                        {
                            name: '',
                            list: tokenHistoryList?.list?.map((e: any) => e.price) || [],
                            y_option: {
                                axisLabel: {
                                    show: false
                                }
                            }
                        },
                    ],
                    [
                        {
                            name: 'volume',
                            list: walletBalanceTotal?.list?.map((e: any) => e.volumes) || []
                        },
                    ],
                ]}
            />
        </div>
    </Fragment>
})

export default WalletChart