/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import { memo, useState } from "react";
import ConsistentIn from "./consistent_in";
import ConsistentOut from "./consistent_out";
import FlowIn from "./flow_in";
import FlowOut from "./flow_out";
import './index.scss'

const TokenFlow = memo(() => {
    const [tab, setTab] = useState('1')
    const tabChange = async (e: any, data?: any) => {
        setTab(e)
    }

    return (
        <div className='flow' style={{ width: '100%', height: '100%', }}>
            <Tabs activeKey={tab} onChange={(e) => {
                tabChange(e)
            }}>
                <TabPane tab="Flow In" itemKey="1">
                    {tab === '1' && <FlowIn />}
                </TabPane>
                <TabPane tab="Flow Out" itemKey="2">
                    {tab === '2' && <FlowOut />}
                </TabPane>
                <TabPane tab="Consistent In" itemKey="3">
                    {tab === '3' && <ConsistentIn />}
                </TabPane>
                <TabPane tab="Consistent Out" itemKey="4">
                    {tab === '4' && <ConsistentOut />}
                </TabPane>
            </Tabs>
        </div >
    )
})

export default TokenFlow;