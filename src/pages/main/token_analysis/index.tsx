/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, Fragment, memo, useEffect, useState } from "react";
import './index.scss'
import TokenInflow from "./table/TokenInflow";
import TokenOutflow from "./table/TokenOutflow";
import TopGainers from "./table/TopGainers";
import TopHolders from "./table/TopHolders";
import TopLossers from "./table/TopLossers";
import TopTransactions from "./table/TopTransactions";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tokeninfo from "./tokeninfo";
import Charts from "./chart";

export const TokenContext = createContext<{ token: any, setToken?: any }>({ token: null, });
const TokenAnalysis = memo(() => {
    const [token, setToken] = useState({ token: '' })
    useEffect(() => {
        setTimeout(() => {
            setToken({ token: '127398172389' })
        }, 3000);

    }, [])
    return (
        <div className='token_analysis' style={{ width: '100%', height: '100%', }}>
            <div style={{ height: '40px' }}></div>
            <Fragment>
                <TokenContext.Provider value={{ token, setToken }}>
                    <Tokeninfo />
                    <Charts />

                    <TopHolders />
                    <TopGainers />
                    <TopLossers />
                    <div className="flex flex-1">
                        <TokenInflow />
                        <TokenOutflow />
                    </div>
                    <TopTransactions />
                </TokenContext.Provider>
            </Fragment>
        </div >
    )
})

export default TokenAnalysis;