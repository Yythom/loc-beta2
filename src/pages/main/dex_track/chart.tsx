/* eslint-disable @typescript-eslint/no-unused-vars */
import ProEchart from "@/components/echart/pro_echart";
import useRequest from "@/hooks/useRequest";
import { postMainApiV1DexTraceTotalSwapVolumesList, postMainApiV1TokenPriceHistoryList } from "@/service/loc-services";
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import dayjs from "dayjs";
import { Fragment, memo } from "react";

const DexChart = memo(() => {
    const [VolumesList, fetch,
        setParamsVolumes,] = useRequest<any, any>(postMainApiV1DexTraceTotalSwapVolumesList, {
            initParams: {
                "search": {
                    "period": 1
                },
                "condition": {},
                "page": {
                    "page": 1,
                    "page_size": 10,
                },
                "sort": {
                    "create_at": "asc"
                }
            }
        })

    const [tokenHistoryList, f,
        setParamsTokens,] = useRequest<any, any>(postMainApiV1TokenPriceHistoryList, {
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
            <h2>Smart Money DEX Trade Trending </h2>
        </Text>
        <div className="fd" style={{ alignItems: 'flex-end' }}>
            <div className="flex more_setting"  >
                <Tabs
                    type="button"
                    defaultActiveKey="1"
                    onChange={(itemKey) => {
                        setParamsVolumes('search', {
                            period: Number(itemKey)
                        })
                        setParamsTokens('search', {
                            period: Number(itemKey)
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
                        name: ' Date',
                        data: VolumesList?.list?.map((e: any) => dayjs(e.create_at * 1000).format('YY-M-D H') + 'h') || [],
                    },
                }}
                dataSource={[
                    [
                        {
                            name: 'Eth Price',
                            list: tokenHistoryList?.list?.map((e: any) => e.price) || [],
                            y_option: {
                                min: 'dataMin', //取最小值为最小刻度
                                max: 'dataMax'
                            }
                        },
                    ],
                    [
                        {
                            name: 'volumes',
                            list: VolumesList?.list?.map((e: any) => e.swap_volumes) || [],
                            y_option: {
                                // min: 0, //取最小值为最小刻度
                                // max: 'dataMax'
                            }
                        }
                    ]
                ]}
            />
        </div>
    </Fragment>
})

export default DexChart