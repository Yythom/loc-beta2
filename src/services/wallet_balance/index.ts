

import request from "../config";

class WalletBalanceService {
    static get_whiteTransaction_list = async (data: any) => {
        const result = await request({
            url: '/v1/user/whiteTransaction/list',
            data: {
                "condition": {},
                "search": {
                    "source": data?.source, // 有 cex = CEX  SMARTMONEY
                    "time_range": data?.search?.time_range || 1, // 天数
                    "type": data?.search?.type, // 类型 inflow = in  outflow = out
                    address: data?.search?.address,
                },
                "page": {
                    "page": data?.page,
                    "page_size": 20,
                    "all": false,
                    "total": true
                },
                "sort": {
                }
            }
        })
        return result
    }

    static get_walletTransaction_list = async (data: any) => {
        if (!data?.address && !data?.search?.token_address) return false
        const result = await request({
            url: '/v1/user/walletTransaction/list',
            data: {
                "condition": {},
                "search": {
                    address: data?.address,
                    token_address: data?.search?.token_address,
                    "time_range": data?.search?.time_range || 1, // 天数
                },
                "page": {
                    "page": data?.page,
                    "page_size": 20,
                    "all": false,
                    "total": true
                },
                "sort": {
                }
            }
        })
        return result
    }

    static get_tokenBalance_list = async (data: any) => {
        const result = await request({
            url: '/v1/user/walletBalance/list',
            data: {
                "condition": {},
                "search": {
                    "time_range": data?.search?.time_range || 1, // 天数
                    address: data?.address || '',
                },
                "page": {
                    "page": data?.page,
                    "page_size": 20,
                    "all": false,
                    "total": true
                },
                "sort": {
                }
            }
        })
        return result
    }

    static get_tokenInfo = async (data: any) => {
        const result = await request({
            url: '/v1/user/tokenWhiteList/list',
            data: {
                "condition": {},
                "search": {
                    "address": data?.address || '',
                    "name": data?.name || ''
                },
                "page": {
                    "page": data?.page,
                    "page_size": 20,
                    "all": true,
                    "total": true
                },
                "sort": {
                }
            }
        })
        return result
    }
    static get_tokenTag = async (data: any) => {
        if (!data?.address) return false
        const result = await request({
            url: '/v1/user/addressTag/list',
            data: {
                "condition": {},
                "search": {
                    "address": data?.address
                },
                "page": {
                    "page": data?.page,
                    "page_size": 10,
                    "all": false,
                    "total": true
                },
                "sort": {
                }
            }
        })
        return result
    }

    static get_profit_list = async (data: any) => {
        // console.log(data, 'data?.search?.address');

        if (!data?.search?.address) return false
        const result = await request({
            url: '/v1/user/dexLeaderboardToken/list',
            data: {
                "condition": {},
                "search": {
                    address: data?.search?.address,
                    "time_range": data?.search?.time_range || 1, // 天数
                },
                "page": {
                    "page": data?.page,
                    "page_size": 20,
                    "all": true,
                    "total": true
                },
                "sort": {
                }
            }
        })
        return result
    }
}

export default WalletBalanceService;