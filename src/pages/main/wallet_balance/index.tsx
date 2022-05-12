/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ErrorBoundary from "@/components/Boundary";
import ProEchart from "@/components/echart/pro_echart";
import useRequest from "@/hooks/useRequest";
import { debounce } from "@/utils/js_utils/format";
import { IconSearch } from "@douyinfe/semi-icons";
import { Input, TabPane, Tabs } from "@douyinfe/semi-ui";
import dayjs from "dayjs";
import { createContext, Fragment, memo, useMemo, useState } from "react";
import './index.scss'
import ProfitinDEX from "./table/ProfitinDEX";
import RecentTransactions from "./table/RecentTransactions";
import TokenBalance from "./table/TokenBalance";
import TokenInflow from "./table/TokenInflow";
import TokenInflowfromCEX from "./table/TokenInflowfromCEX";
import TokenOutflow from "./table/TokenOutflow";
import TokenOutflowfromCEX from "./table/TokenOutflowfromCEX";

const initToken = '0x0f4ee9631f4be0a63756515141281a3e2b293bbe'
export const TokenContext = createContext<{ token: any }>({ token: initToken });

const WalletBalance = memo(() => {
    const [token, setToken] = useState(initToken)
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
        <div className='token_balance' style={{ width: '100%', height: '100%', }}>
            <div style={{ height: '40px' }}></div>
            <div className="fb" style={{ color: '#fff', height: '100px', marginBottom: '3rem' }}>
                <div className="card fdc" style={{ width: '49%', height: '100%' }} >
                    <div className="title">Wallet labels</div>
                    <div className="flex">Token Name</div>
                </div>
                <div className="card fc" style={{ width: '49%', height: '100%' }}>
                    <Input
                        value={token}
                        onChange={(e) => {
                            setToken(e)
                        }}
                        style={{ borderRadius: '200px' }}
                        prefix={<IconSearch />} placeholder='Search for Token'
                    />
                </div>
            </div>

            {/* <Fragment>
                <div className="title">Token Overview </div>
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



            <TokenContext.Provider value={{ token }} >
                <ErrorBoundary>
                    <TokenBalance />
                </ErrorBoundary>
                <div className="fb flex-1">
                    <ErrorBoundary>
                        <TokenInflow />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <TokenOutflow />
                    </ErrorBoundary>
                </div>
                <div className="fb flex-1" >
                    <ErrorBoundary>
                        <TokenInflowfromCEX />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <TokenOutflowfromCEX />
                    </ErrorBoundary>
                </div>
                <ErrorBoundary>
                    <ProfitinDEX />
                </ErrorBoundary>
                <ErrorBoundary>
                    <RecentTransactions />
                </ErrorBoundary>
            </TokenContext.Provider>
        </div >
    )
})

export default WalletBalance;