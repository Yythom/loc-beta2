/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ProEchart from "@/components/echart/pro_echart";
import { memo } from "react";
import './index.scss'
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import SmartMoneyDensity from "./table/SmartMoneyDensity";
import TokenBalanceSmartMoney from "./table/TokenBalanceSmartmoney";

const TokenBalance = memo(() => {
    return (
        <div className='wallet_balance' style={{ width: '100%', height: '100%', }}>
            <Text>
                <h2>Portfolio Overview </h2>
            </Text>
            <ProEchart
                classname='test1'
                option={{
                    x_option: {
                        name: 'X',
                        data: [1, 2, 3, 4, 5, 6, 7],
                    },
                }}
                dataSource={[{
                    name: 'y',
                    list: [1, 2, 3]
                }]}
            />
            <TokenBalanceSmartMoney />
            <div style={{ height: '2rem' }}></div>
            <SmartMoneyDensity />

            <div style={{ height: '2rem' }}></div>

            <Text>
                <h2>Smart Money  StableCoin & ETH vs All Coins</h2>
            </Text>
            <ProEchart
                classname='test2'
                option={{
                    x_option: {
                        name: '',
                        data: [1, 2, 3, 4, 5, 6, 7],
                    },
                }}
                dataSource={[
                    [
                        {
                            name: '1',
                            list: [1, 2, 3]
                        },
                    ],
                    [
                        {
                            name: '2',
                            list: [1, 4, 6]
                        }
                    ],
                ]
                }
            />
        </div >
    )
})

export default TokenBalance;