/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import useRequest from "@/hooks/useRequest";
import { postMainApiV1TokenList, postMainApiV1WalletAddressDetail } from "@/service/loc-services";
// import WalletBalanceService from "@/services/wallet_balance";
import { debounce, formatUrl } from "@/utils/js_utils/format";
import { AutoComplete, Input, TabPane, Tabs, Tag, Toast } from "@douyinfe/semi-ui";
import dayjs from "dayjs";
import { createContext, memo, useMemo, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import WalletChart from "./chart";
import './index.scss'
import ProfitinDEX from "./table/ProfitinDEX";
import RecentTransactions from "./table/RecentTransactions";
import TokenBalance from "./table/TokenBalance";
import TokenInflow from "./table/TokenInflow";
import TokenInflowfromCEX from "./table/TokenInflowfromCEX";
import TokenOutflow from "./table/TokenOutflow";
import TokenOutflowfromCEX from "./table/TokenOutflowfromCEX";
const initTokenAddress = ''
// 0x0000000000000000000000000000000000000000
export const TokenContext = createContext<{ token: any, wallet: any }>({ token: '', wallet: '' });

const WalletBalance = memo(() => {
    const initAddr: any = formatUrl()
    const JumpAddress = useMemo(() => initAddr?.address || '', [])

    const [wallet_address, setWalletAddress] = useState(JumpAddress || localStorage.getItem('WalletAddress') || '')
    const [success_wallet_address, set_success_wallet_address] = useState(wallet_address)

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

    const [wallet_lables, f, setTokenTagParams, l, p] = useRequest<any, any>(postMainApiV1WalletAddressDetail, {
        initParams: {
            "condition": {},
            "search": {
                // "wallet_address": "0x6eef09b526d883f98762a7005fabd2c800dfca44"
                "wallet_address": ""
            }
        },
        callback(data) {
            set_success_wallet_address(p?.search?.wallet_address)
        },
    })

    return (
        <div className='wallet_balance' style={{ width: '100%', height: '100%', }}>
            <div style={{ height: '40px' }}></div>
            <div className="fb card searchInput" style={{ color: '#fff', height: '120px', marginBottom: '3rem' }}>
                <div className="card fd" style={{ width: '49%', height: '100%', justifyContent: 'center', position: 'relative' }} >
                    <Input
                        maxLength={42}
                        value={wallet_address}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') fetchToken()
                        }}
                        onChange={(e) => {
                            setWalletAddress(e)
                            localStorage.setItem('WalletAddress', e)
                            setTokenTagParams('search', { wallet_address: e })
                        }}
                        style={{ borderRadius: '200px', width: '500px' }}
                        prefix='Wallet Address'
                        placeholder='Search for Wallet Address'
                    />
                    {/* {
                        token && <div className="flex" style={{ width: 'max-content' }}>
                            <CopyToClipboard text={token} onCopy={() => Toast.success('copyed Token Address')} ><div className="flex hover" style={{ fontSize: '16px' }}>
                                {params?.name || params?.address}
                            </div>
                            </CopyToClipboard>
                        </div>
                    } */}
                    {
                        wallet_lables?.tags?.length > 0 && < div style={{ marginTop: '6px', position: 'absolute', top: '56px' }}>
                            {
                                wallet_lables?.tags?.map((e: any) => (
                                    <Tag style={{ marginRight: '10px' }} key={e.wallet_address}>
                                        {e.tag}
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
                                setTokenName('search', { search: e })
                            } else {
                                setTokenName('search', { search: e })
                            }
                        }}
                        onSelect={(itm: any) => {
                            console.log(itm, 'select');
                            const _name = itm.split('--')[0];
                            const _addr = itm.split('--')[1];
                            setTokenName('search', { search: _addr || '' })
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

            <TokenContext.Provider value={{ token: params?.search?.search, wallet: success_wallet_address }} >
                <WalletChart />
                {/* <TokenInflow /> */}
                {/* <ProfitinDEX /> */}
                {/* <TokenBalance /> */}

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