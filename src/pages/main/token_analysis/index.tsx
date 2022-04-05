/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import { memo, useState } from "react";
import './index.scss'

const TokenAnalysis = memo(() => {
    const [tab, setTab] = useState('1')
    const tabChange = async (e: any, data?: any) => {
        setTab(e)
    }

    return (
        <div className='token_analysis' style={{ width: '100%', height: '100%', }}>
            TokenAnalysis
        </div >
    )
})

export default TokenAnalysis;