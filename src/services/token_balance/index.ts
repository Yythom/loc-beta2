import request from "../config";

class TokenBalanceService {
    static get_smartmoney_holding_list = async (data: any) => {
        const result = await request({
            url: '/v1/user/smartMoneyHolding/list',
            data: {
                "condition": {},
                "search": {
                    // "time_range": data?.search?.time_range || 1,
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

    static get_smartMoneyDensity_list = async (data: any) => {
        const result = await request({
            url: '/v1/user/smartMoneyDensity/list',
            data: {
                "condition": {},
                "search": {
                    // "time_range": data?.search?.time_range || 1,
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

export default TokenBalanceService;