/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import { memo, useState } from "react";
import './index.scss'
// import ConsistentIn from "./consistent_in";
// import ConsistentOut from "./consistent_out";

const DexTrack = memo(() => {
    const [tab, setTab] = useState('1')


    return (
        <div className='dex_track' style={{ width: '100%', height: '100%', }}>
            DexTrack

        </div >
    )
})

export default DexTrack;