import request from "../config";
import { ConsistentInDetailInterface, ConsistentOutDetailInterface } from "./detail-interface";
import { ConsistentInListParamsInterface, ConsistentOutListInterface } from "./in_interface";
import { ConsistentOutListParamsInterface } from "./out_interface";

class TokenFlowServices {
    // 获取consistent out列表
    static get_consistent_out_list = async (data: ConsistentOutListParamsInterface) => {
        const res = await request<ConsistentOutListInterface>({
            url: `/v1/user/consistentOutFlow/list`,
            data: {
                "condition": {},
                "search": {
                    "source": data?.source,
                    "time_range": data?.search?.time_range || 1,
                },
                "page": {
                    "page": data?.page || 1,
                    "page_size": 10,
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
                "search": {
                    id: data.id
                }
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
                    "source": data?.source,
                    "time_range": data?.search?.time_range || 1,
                },
                "page": {
                    "page": data?.page || 1,
                    "page_size": 10,
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
                "search": {
                    id: data.id
                }
            }
        })
        return res
    }


    static get_list = async (data?: TokenFlowInterface) => {
        const res = await request<ConsistentInDetailInterface>({
            url: `/v1/user/token/flow/list`,
            data: {
                "condition": {},
                "search": {
                    "direction": data?.search?.direction?.toLocaleLowerCase(),
                    "source": data?.search?.source,
                    "time_range": data?.search?.time_range || 1,
                    "consistent": data?.search?.consistent,
                    "address": data?.address,
                    token_address: data?.search?.token_address
                },
                "page": {
                    "page": data?.page || 1,
                    "page_size": 10,
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
}

export interface TokenFlowInterface {
    page?: number,
    "address"?: string,
    search?: Partial<{
        "direction": 'IN' | 'OUT',
        "source": 'SMARTMONEY' | 'CEX',
        "time_range": number | string,
        "consistent": boolean,
        "token_address": string
    }>
}
export default TokenFlowServices