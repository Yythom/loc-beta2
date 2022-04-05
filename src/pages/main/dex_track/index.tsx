/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import { memo, useState } from "react";
import './index.scss'
import ConsistentIn from "./consistent_in";
import ConsistentOut from "./consistent_out";


const DexTrack = memo(() => {
    const [tab, setTab] = useState('1')
    const tabChange = async (e: any, data?: any) => {
        setTab(e)
    }

    return (
        <div className='dex_track' style={{ width: '100%', height: '100%', }}>

            <Tabs activeKey={tab} onChange={(e) => {
                tabChange(e)
            }}>
                <TabPane tab="Consistent In" itemKey="1">
                    {tab === '1' && <ConsistentIn />}
                </TabPane>
                <TabPane tab="Consistent Out" itemKey="2">
                    {tab === '2' && <ConsistentOut />}
                </TabPane>
            </Tabs>
        </div >
    )
})

export default DexTrack;