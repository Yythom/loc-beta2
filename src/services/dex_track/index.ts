import request from "../config";

class DexTrackServices {
    static get_DEXLeaderboard_list = async (data: any) => {
        const result = await request({
            url: '/v1/user/dexLeaderboard/list',
            data: {
                "condition": {},
                "search": {
                    "time_range": data?.search?.time_range || 1,
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

    static get_SwapTransactions_list = async (data: any) => {
        const result = await request({
            url: '/v1/user/dexSwapTransaction/list',
            data: {
                "condition": {},
                "search": {
                    "time_range": data?.search?.time_range || 1,
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

    static get_SmartMoneySwapVolume_list = async (data: any) => {
        const result = await request({
            url: '/v1/user/dexSwapVolume/list',
            data: {
                "condition": {},
                "search": {
                    "time_range": data?.search?.time_range || 1,
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

    static get_SmartMoneyconsistentSwap_list = async (data: any) => {
        const result = await request({
            url: '/v1/user/dexSwapConsistent/list',
            data: {
                "condition": {},
                "search": {
                    "source": data.source,
                    "time_range": data?.search?.time_range || 1,
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


}

export default DexTrackServices;