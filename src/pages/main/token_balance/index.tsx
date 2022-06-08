/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { memo } from "react";
import './index.scss'
import SmartMoneyDensity from "./table/SmartMoneyDensity";
import SmartMoneyHolding from "./table/SmartMoneyHolding";
import TokenBalanceChart from "./chart";

const TokenBalance = memo(() => {
    return (
        <div className='wallet_balance' style={{ width: '100%', height: '100%', }}>
            <TokenBalanceChart >

                <SmartMoneyHolding />
                <div style={{ height: '2rem' }}></div>
                <SmartMoneyDensity />

                <div style={{ height: '2rem' }}></div>

            </TokenBalanceChart>

        </div >
    )
})

export default TokenBalance;