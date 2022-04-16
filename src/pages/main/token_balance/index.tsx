/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ProEchart from "@/components/echart/pro_echart";
import { memo } from "react";
import TokenBalanceofSmartMoney from "./token_balance_smartmoney";
import './index.scss'
import SmartMoneyDensity from "./SmartMoneyDensity";

const TokenBalance = memo(() => {
    return (
        <div className='wallet_balance' style={{ width: '100%', height: '100%', }}>
            <ProEchart
                classname='test1'
                option={{
                    x_option: {
                        name: 'X',
                        data: [1, 2, 3, 4, 5, 6, 7],
                    },
                    y_option: {
                        name: 'Y'
                    },
                }}
                dataSource={[1, 2, 3]}
            />
            <TokenBalanceofSmartMoney />
            <div style={{ height: '2rem' }}></div>
            <SmartMoneyDensity />
            <ProEchart
                classname='test2'
                option={{
                    x_option: {
                        name: 'X',
                        data: [1, 2, 3, 4, 5, 6, 7],
                    },
                    y_option: {
                        name: 'Y'
                    },
                }}
                dataSource={[[1, 2, 3], [2, 3, 5]]}
            />
        </div >
    )
})

export default TokenBalance;