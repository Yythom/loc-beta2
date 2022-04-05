import request from "../config";
import { ConsistentInDetailInterface, ConsistentOutDetailInterface } from "./detail-interface";
import { ConsistentInListParamsInterface } from "./in_interface";
import { ConsistentOutListInterface, ConsistentOutListParamsInterface } from "./out_interface";
class ConsistentService {
    // 获取consistent out列表
    static get_consistent_out_list = async (data: ConsistentOutListParamsInterface) => {
        const res = await request<ConsistentOutListInterface>({
            url: `/v1/user/consistentOutFlow/list`,
            data: {
                "condition": {},
                "search": {
                    "source": "cex",
                    "time_range": data?.search?.time_range || 1,
                    "tag": 1648915200
                },
                "page": {
                    "page": data?.page || 1,
                    "page_size": 30,
                    "all": false,
                    "total": true
                },
                "sort": {
                    total: 'desc'
                },
            }
        })
        return res
    }

    static get_consistent_out_detail = async (data: any) => {
        const res = await request<ConsistentOutDetailInterface>({
            url: `/v1/user/consistentOutFlow/detail`,
            data: {
                "condition": {},
                "search": {}
            }
        })
        return res
    }

    // 获取consistent in列表
    static get_consistent_in_list = async (data: ConsistentInListParamsInterface) => {
        const res = await request<ConsistentInListParamsInterface>({
            url: `/v1/user/consistentInFlow/list`,
            data: {
                "condition": {},
                "search": {
                    "source": "cex",
                    "time_range": data?.search?.time_range || 1,
                    "tag": 1648915200
                },
                "page": {
                    "page": data?.page || 1,
                    "page_size": 30,
                    "all": false,
                    "total": true
                },
                "sort": {
                    total: 'desc'
                },
            }
        })
        return res
    }

    static get_consistent_in_detail = async (data: any) => {
        const res = await request<ConsistentInDetailInterface>({
            url: `/v1/user/consistentInFlow/detail`,
            data: {
                "condition": {},
                "search": {}
            }
        })
        return res
    }
}
export default ConsistentService