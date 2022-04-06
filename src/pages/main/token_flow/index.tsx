/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import { memo, useState } from "react";
import ConsistentIn from "./consistent_in";
import ConsistentInCon from "./consistent_in_con";
import ConsistentOut from "./consistent_out";
import ConsistentOutCon from "./consistent_out_con";
import FlowIn from "./flow_in";
import FlowInCon from "./flow_in_con";
import FlowOut from "./flow_out";
import FlowOutCon from "./flow_out_con";
import './index.scss'

const TokenFlow = memo(() => {
    const [tab, setTab] = useState('1')
    const tabChange = async (e: any, data?: any) => {
        setTab(e)
    }

    return (
        <div className='flow flex' style={{ width: '100%', height: '100%', }}>
            <FlowIn />
            <FlowOut />
            <ConsistentIn />
            <ConsistentOut />
            <FlowInCon />
            <FlowOutCon />
            <ConsistentInCon />
            <ConsistentOutCon />
        </div >
    )
})

export default TokenFlow;