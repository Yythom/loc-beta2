/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ProEchart from "@/components/echart/pro_echart";
import { Fragment, memo } from "react";
import './index.scss'
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import SmartMoneyDensity from "./table/SmartMoneyDensity";
import SmartMoneyHolding from "./table/SmartMoneyHolding";

const TokenBalance = memo(() => {
    return (
        <div className='wallet_balance' style={{ width: '100%', height: '100%', }}>

            {/* <Fragment>
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
            </Fragment> */}

            <SmartMoneyHolding />
            <div style={{ height: '2rem' }}></div>
            <SmartMoneyDensity />

            <div style={{ height: '2rem' }}></div>

            {/* <Fragment>
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
            </Fragment> */}
        </div >
    )
})

export default TokenBalance;