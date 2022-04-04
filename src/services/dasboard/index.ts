import request from "../config"
import { DashboardParams } from "./interface"

export const initParams = {
    "page": 1,
    "sort": {
        profitUsd: 'desc'
    },
    "search": {
        "address": "",
        "swapTimes": 1,
        "timeRange": 1
    }
}

class DasboardService {
    static getProfitRankList = async (data: DashboardParams) => {
        const result = await request({
            url: '/transaction/index',
            data: {
                ...data,
                "page_size": 30,
            }
        })
        console.log(result, 'resultresultresult');

        return result
    }

}

export default DasboardService;