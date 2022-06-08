/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ProEchart from "@/components/echart/pro_echart";
import { Fragment, memo } from "react";
import './index.scss'
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import SmartMoneyDensity from "./table/SmartMoneyDensity";
import SmartMoneyHolding from "./table/SmartMoneyHolding";
import TokenBalanceChart from "./chart";

const TokenBalance = memo(() => {
    return (
        <div className='wallet_balance' style={{ width: '100%', height: '100%', }}>
            <TokenBalanceChart >

                {/* <SmartMoneyHolding />
                <div style={{ height: '2rem' }}></div>
                <SmartMoneyDensity />

                <div style={{ height: '2rem' }}></div> */}

            </TokenBalanceChart>

        </div >
    )
})

export default TokenBalance;