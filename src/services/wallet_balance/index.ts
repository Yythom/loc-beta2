

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
                    "type": data?.type, // 类型 inflow = in  outflow = out
                    address: data?.address,
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
        console.log(data, 'DADA');

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

}

export default WalletBalanceService;