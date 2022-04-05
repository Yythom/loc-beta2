/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import { memo, useState } from "react";
import './index.scss'

const WalletBalance = memo(() => {
    const [tab, setTab] = useState('1')
    const tabChange = async (e: any, data?: any) => {
        setTab(e)
    }

    return (
        <div className='token_balance' style={{ width: '100%', height: '100%', }}>
            WalletBalance
        </div >
    )
})

export default WalletBalance;