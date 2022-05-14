/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ErrorBoundary from "@/components/Boundary";
import ProEchart from "@/components/echart/pro_echart";
import useRequest from "@/hooks/useRequest";
import { debounce, formatUrl } from "@/utils/js_utils/format";
import { IconCopy, IconSearch } from "@douyinfe/semi-icons";
import { Input, TabPane, Tabs, Toast } from "@douyinfe/semi-ui";
import dayjs from "dayjs";
import { createContext, Fragment, memo, useMemo, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import './index.scss'
import ProfitinDEX from "./table/ProfitinDEX";
import RecentTransactions from "./table/RecentTransactions";
import TokenBalance from "./table/TokenBalance";
import TokenInflow from "./table/TokenInflow";
import TokenInflowfromCEX from "./table/TokenInflowfromCEX";
import TokenOutflow from "./table/TokenOutflow";
import TokenOutflowfromCEX from "./table/TokenOutflowfromCEX";

const initTokenAddress = '0x0f4ee9631f4be0a63756515141281a3e2b293bbe'
export const TokenContext = createContext<{ token: any }>({ token: '' });

const WalletBalance = memo(() => {
    const initAddr: any = formatUrl()
    const JumpAddress = useMemo(() => initAddr?.address || '', [])

    const [token, setToken] = useState(JumpAddress) // address

    const [tokenInfo, fetchToken, setTokenName] = useRequest<any, any>(async function name(params) {
        console.log(params, 'pp');
    }, {
        initParams: {
            search: {
                token_name: 'token_name'
            }
        },
        start_owner: true,
        callback: (ret) => {
            const addr = ret?.addr
            if (addr) {
                console.log('SHEZHI TOKEN ADDR');
                setToken(addr)
            }
        }
    })

    // const [ret, fetch, setParams,] = useRequest<any, any>(async function name(params) { }, {
    //     initParams: {
    //         search: {
    //             days: 7
    //         }
    //     }
    // })

    // const [v, setv] = useState(JumpAddress);
    return (
        <div className='token_balance' style={{ width: '100%', height: '100%', }}>
            <div style={{ height: '40px' }}></div>
            <div className="fb card" style={{ color: '#fff', height: '100px', marginBottom: '3rem' }}>
                <div className="card fd" style={{ width: '49%', height: '100%' }} >
                    <div className="title">Wallet labels</div>
                    <CopyToClipboard text={token} onCopy={() => Toast.success('copy success')} >
                        <div className="flex">
                            Token Name

                            <IconCopy />
                        </div>
                    </CopyToClipboard>
                </div>
                <div className="card fc" style={{ width: '49%', height: '100%' }}>
                    <Input
                        maxLength={42}
                        // value={v}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') fetchToken()
                        }}
                        onChange={(e) => {
                            // setv(e)
                            if (e.slice(0, 2) === '0x' && e.length === 42) {
                                setToken(e)
                            } else {
                                setTokenName(e)
                            }
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
                <TokenBalance />
                <div className="fb flex-1">
                    <TokenInflow />
                    <TokenOutflow />
                </div>
                <div className="fb flex-1" >
                    <TokenInflowfromCEX />
                    <TokenOutflowfromCEX />
                </div>
                <ProfitinDEX />
                <RecentTransactions />
            </TokenContext.Provider>
        </div >
    )
})

export default WalletBalance;