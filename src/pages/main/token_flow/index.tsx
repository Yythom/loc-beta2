/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { memo, } from "react";
import './index.scss'
import ConsistentIn from "./table/CEX/consistent_in";
import ConsistentOut from "./table/CEX/consistent_out";
import FlowIn from "./table/CEX/flow_in";
import FlowOut from "./table/CEX/flow_out";
import ConsistentInCon from "./table/SmartMoney/consistent_in_con";
import ConsistentOutCon from "./table/SmartMoney/consistent_out_con";
import FlowInCon from "./table/SmartMoney/flow_in_con";
import FlowOutCon from "./table/SmartMoney/flow_out_con";

const TokenFlow = memo(() => {

    return (
        <div className='flow flex' style={{ width: '100%', height: '100%', }}>
            <FlowInCon />
            <FlowOutCon />
            <ConsistentInCon />
            <ConsistentOutCon />

            <FlowIn />
            <FlowOut />
            <ConsistentIn />
            <ConsistentOut />
        </div >
    )
})

export default TokenFlow;