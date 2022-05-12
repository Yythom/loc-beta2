/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ProEchart from "@/components/echart/pro_echart";
import useRequest from "@/hooks/useRequest";
import { IconSearch } from "@douyinfe/semi-icons";
import { Input, TabPane, Tabs } from "@douyinfe/semi-ui";
import dayjs from "dayjs";
import { createContext, Fragment, memo, useMemo, useState } from "react";
import './index.scss'
import AllHistory from "./table/AllHistory";
import BorrowAndLendHistory from "./table/BorrowAndLendHistory";
import CEXhistory from "./table/CEXhistory";
import LpHistory from "./table/LpHistory";
import SwapHistory from "./table/SwapHistory";
import TokenInflow from "./table/TokenInflow";
import TokenOutflow from "./table/TokenOutflow";
import Tokeninfo from "./tokeninfo";

export const TokenContext = createContext<{ token: any, setToken?: any }>({ token: null, });

const WalletForToken = memo(() => {
    const [token, setToken] = useState({ token_name: '1231' })
    const [ret, fetch,
        setParams,] = useRequest<any, any>(async function name(params) {

        }, {
            initParams: {
                search: {
                    days: 7
                }
            }
        })

    return (
        <div className='wallet_for_token' style={{ width: '100%', height: '100%', }}>
            <div style={{ height: '40px' }}></div>
            <TokenContext.Provider value={{ token, setToken }}>
                <Tokeninfo />

                {/* <Fragment>
                    <div className="title">Profit Over Time with Historical Price</div>
                    <div className="fd" style={{ color: '#fff', marginBottom: '3rem', alignItems: 'flex-end' }}>
                        <div className="flex more_setting">
                            <Tabs
                                type="button"
                                defaultActiveKey="7"
                                onChange={(itemKey) => {
                                    setParams('search', {
                                        days: itemKey || ''
                                    })
                                }}>
                                <TabPane tab="1 Day" itemKey="1" />
                                <TabPane tab="3 Day" itemKey="3" />
                                <TabPane tab="7 Day" itemKey="7" />
                            </Tabs>
                        </div>
                        {
                            <ProEchart
                                classname='test3'
                                option={{
                                    x_option: {
                                        name: 'Date',
                                        data: [12312331, 12739812]?.map((e: any) => dayjs(e.tag * 1000).format('MM/DD YYYY')),
                                    },
                                }}
                                dataSource={[{
                                    name: 'balance',
                                    list: [1, 23, 23, 153, 254]
                                }]}
                            />
                        }
                    </div>
                </Fragment> */}

                <Fragment >
                    <div className="flex flex-1">
                        <TokenInflow />
                        <TokenOutflow />
                    </div>
                    <AllHistory />
                    <SwapHistory />
                    <LpHistory />
                    <BorrowAndLendHistory />
                    <CEXhistory />
                </Fragment>


            </TokenContext.Provider>

        </div >
    )
})

export default WalletForToken;