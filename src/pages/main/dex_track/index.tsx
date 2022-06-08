/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ErrorBoundary from "@/components/Boundary";
import ProEchart from "@/components/echart/pro_echart";
import useRequest from "@/hooks/useRequest";
import { postMainApiV1DexTraceTotalSwapVolumesList } from "@/service/loc-services";
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import dayjs from "dayjs";
import { Fragment, memo, useMemo } from "react";
import DexChart from "./chart";
import './index.scss'
import DEXLeaderboard from "./table/DEXLeaderboard";
import SmartMoneyconsistentSwapin from "./table/SmartMoneyconsistentSwapin";
import SmartMoneyconsistentSwapout from "./table/SmartMoneyconsistentSwapout";
import SmartMoneySwapVolume from "./table/SmartMoneySwapVolume";
import SwapTransactions from "./table/SwapTransactions";

const DexTrack = memo(() => {

    return (
        <div className='dex_track' style={{ width: '100%', height: '100%', }}>

            <ErrorBoundary>
                <DexChart />
            </ErrorBoundary>

            <DEXLeaderboard />

            <div style={{ height: '2rem' }} />

            <SwapTransactions />

            <div style={{ height: '2rem' }} />

            <SmartMoneySwapVolume />

            <div className="flex flex-1" style={{ marginTop: '2rem' }}>
                <SmartMoneyconsistentSwapin />
                <SmartMoneyconsistentSwapout />
            </div>

            <div style={{ height: '2rem' }} />
        </div >
    )
})

export default DexTrack;