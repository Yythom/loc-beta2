/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ProEchart from "@/components/echart/pro_echart";
import { memo } from "react";
import DEXLeaderboard from "./DEXLeaderboard";
import './index.scss'
import SmartMoneyconsistentSwapin from "./SmartMoneyconsistentSwapin";
import SmartMoneyconsistentSwapout from "./SmartMoneyconsistentSwapout";
import SmartMoneySwapVolume from "./SmartMoneySwapVolume";
import SwapTransactions from "./SwapTransactions";
const DexTrack = memo(() => {

    return (
        <div className='dex_track' style={{ width: '100%', height: '100%', }}>
            DexTrack
            <ProEchart
                classname='test3'
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
            <DEXLeaderboard />

            <div style={{ height: '2rem' }} />

            <SwapTransactions />

            <div style={{ height: '2rem' }} />

            <SmartMoneySwapVolume />

            <div className="flex" style={{ marginTop: '2rem' }}>
                <SmartMoneyconsistentSwapin />
                <div style={{ width: '3rem' }} />
                <SmartMoneyconsistentSwapout />
            </div>

            <div style={{ height: '2rem' }} />
        </div >
    )
})

export default DexTrack;