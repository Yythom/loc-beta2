import request from "../config";
import { FlowInInterface, FlowParamsInterface } from "./in_interface";
class FlowService {
    // 获取flow in列表
    static get_flow_in_list = async (data: FlowParamsInterface) => {
        const res = await request<FlowInInterface>({
            url: `/v1/user/tokenInFlow/list`,
            data: {
                "condition": {},
                "search": {
                    "source": "SmartMoney",
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
                },
            }
        })
        return res
    }

    static get_flow_in_detail = async (data: { id: string }) => {
        const res = await request<any>({
            url: `/v1/user/tokenInFlow/detail`,
            data: {
                "condition": {},
                "search": {
                    "id": data.id
                }
            }
        })
        return res
    }

    // 获取flow out列表
    static get_flow_out_list = async (data: FlowParamsInterface) => {
        const res = await request<FlowInInterface>({
            url: `/v1/user/tokenInFlow/list`,
            data: {
                "condition": {},
                "search": {
                    "source": "SmartMoney",
                    "time_range": 1,
                    "tag": 1648915200
                },
                "page": {
                    "page": data?.page || 1,
                    "page_size": 30,
                    "all": false,
                    "total": true
                },
                "sort": {
                },
            }
        })
        return res
    }

    static get_flow_out_detail = async (data: { id: string }) => {
        const res = await request<any>({
            url: `/v1/user/tokenOutFlow/detail`,
            data: {
                "condition": {},
                "search": {
                    "id": data.id
                }
            }
        })
        return res
    }
}
export default FlowService