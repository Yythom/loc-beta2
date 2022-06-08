/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import ErrorBoundary from "@/components/Boundary";
import ProEchart from "@/components/echart/pro_echart";
import useRequest from "@/hooks/useRequest";
import { postMainApiV1TokenList } from "@/service/loc-services";
// import WalletBalanceService from "@/services/wallet_balance";
import { debounce, formatUrl } from "@/utils/js_utils/format";
import { IconCopy, IconSearch } from "@douyinfe/semi-icons";
import { AutoComplete, Input, TabPane, Tabs, Tag, Toast } from "@douyinfe/semi-ui";
import dayjs from "dayjs";
import { createContext, Fragment, memo, ReactChild, ReactFragment, ReactPortal, useMemo, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import WalletChart from "./chart";
import './index.scss'
import ProfitinDEX from "./table/ProfitinDEX";
import TokenBalance from "./table/TokenBalance";
// import ProfitinDEX from "./table/ProfitinDEX";
// import RecentTransactions from "./table/RecentTransactions";
// import TokenBalance from "./table/TokenBalance";
import TokenInflow from "./table/TokenInflow";
import TokenInflowfromCEX from "./table/TokenInflowfromCEX";
import TokenOutflow from "./table/TokenOutflow";
import TokenOutflowfromCEX from "./table/TokenOutflowfromCEX";
// import TokenInflowfromCEX from "./table/TokenInflowfromCEX";
// import TokenOutflow from "./table/TokenOutflow";
// import TokenOutflowfromCEX from "./table/TokenOutflowfromCEX";

const initTokenAddress = '0x0000000000000000000000000000000000000000'
// 0x0000000000000000000000000000000000000000
export const TokenContext = createContext<{ token: any, wallet: any }>({ token: '', wallet: '' });

const WalletBalance = memo(() => {
    const initAddr: any = formatUrl()
    const JumpAddress = useMemo(() => initAddr?.address || '', [])
    const [wallet_address, setWalletAddress] = useState(JumpAddress || localStorage.getItem('WalletAddress') || '')

    const [tokenInfoList, fetchToken, setTokenName, loading, params] = useRequest<any, any>(postMainApiV1TokenList, {
        initParams: {
            "sort": {
                "create_at": "desc"
            },
            "search": {
                "search": initTokenAddress
            },
            "page": {
                "all": true,
            }
        },
    })

    const [wallet_lables, f, setTokenTagParams] = useRequest<any, any>(async function name(params) {
    }, {
        initParams: {
            address: wallet_address
        }
    })

    return (
        <div className='wallet_balance' style={{ width: '100%', height: '100%', }}>
            <div style={{ height: '40px' }}></div>
            <div className="fb card" style={{ color: '#fff', height: '120px', marginBottom: '3rem' }}>
                <div className="card fd" style={{ width: '49%', height: '100%', justifyContent: 'center' }} >
                    <Input
                        maxLength={42}
                        value={wallet_address}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') fetchToken()
                        }}
                        onChange={(e) => {
                            setWalletAddress(e)
                            localStorage.setItem('WalletAddress', e)
                            setTokenTagParams({ address: e })
                        }}
                        style={{ borderRadius: '200px', width: '500px' }}
                        prefix='Wallet Address'
                        placeholder='Search for Wallet Address'
                    />
                    {/* {
                        token && <div className="flex" style={{ width: 'max-content' }}>
                            <CopyToClipboard text={token} onCopy={() => Toast.success('copyed Token Address')} ><div className="flex hover" style={{ fontSize: '16px' }}>
                                {params?.name || params?.address}
                                <IconCopy />
                            </div>
                            </CopyToClipboard>
                        </div>
                    } */}

                    {
                        wallet_lables?.list?.length > 0 && < div style={{ marginTop: '6px' }}>
                            {
                                wallet_lables?.list?.map((e: any) => (
                                    <Tag style={{ marginRight: '10px' }} key={e.name}>
                                        {e.name}
                                    </Tag>
                                ))
                            }
                        </div>
                    }
                </div>
                <div className="card fc" style={{ width: '49%', height: '100%' }}>
                    <AutoComplete
                        loading={loading}
                        value={params?.search?.search}
                        data={tokenInfoList?.list?.length > 0 ? tokenInfoList?.list?.map((e: any) => e.token_name + "--" + e.token_address) : ['No result']}
                        showClear
                        prefix='Token Address'
                        placeholder='Search for Token'
                        onSearch={(e: any) => {
                            if (e.slice(0, 2) === '0x' && e.length === 42) {
                                // setToken(e)
                                //address
                                setTokenName('search', { search: e })
                            } else {
                                setTokenName('search', { search: e })
                            }
                        }}
                        onSelect={(itm: any) => {
                            console.log(itm, 'select');
                            const _name = itm.split('--')[0];
                            const _addr = itm.split('--')[1];
                            setTokenName('search', { search: _name })
                        }}
                        renderSelectedItem={(itm: any) => {
                            return itm?.value?.split('--')[1]
                        }}
                        renderItem={(data: any) => {
                            return (
                                <div>
                                    <div style={{ fontSize: '16px' }}> {data.split('--')[0]}</div>
                                    <div style={{ fontSize: '12px' }}> {data.split('--')[1]}</div>
                                </div>
                            )
                        }}
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
            <TokenContext.Provider value={{ token: params?.search?.search, wallet: wallet_address }} >
                <WalletChart />
                {/* <TokenInflow /> */}
                {/* <ProfitinDEX /> */}
                {/* <TokenBalance /> */}

                {/* <TokenBalance />
                <div className="fb flex-1">
                    <TokenInflow />
                      <TokenOutflow />
                </div>
                <div className="fb flex-1" >
                    <TokenInflowfromCEX />
                    <TokenOutflowfromCEX />
                </div>
                <ProfitinDEX />
                <RecentTransactions /> */}
            </TokenContext.Provider>
        </div >
    )
})

export default WalletBalance;