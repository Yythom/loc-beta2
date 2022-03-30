import { showNotic } from "@/utils/ui_utils/toast"
import Axios from "axios"

const BaseUrl = 'https://lookonchain.com/api'
// const BaseUrl = ''

const filter = (result: any) => {
    if (result?.data) {
        return result.data
    } else {
        return false
    }
}


interface data {
    "page": number,
    "page_size": number,
    "search"?: {
        "address": string,
        "swapTimes": number,
        "timeRange": number
    },
    "sort": {
        "invest"?: string,
        "profit"?: string,
        "profitRate"?: string,
        "swapTimes"?: string
    }
}
const test = async (data: data) => {
    const result = await Axios.post(`${BaseUrl}/getLocationDetail`, {
        address: '四川省成都市武侯区'
    })
    return filter(result)
}

const getProfitRankList = async (data: data) => {
    const result = await Axios.post(`${BaseUrl}/transaction/index`, {
        ...data,
    })
    return filter(result)?.data
}


const getTransactions = async (data: {
    "page": number,
    "page_size": number,
    "search": {
        "address": string,
    },
    "sort"?: {
        "blockSignedAt"?: string,
        "createAt"?: string,
        "height"?: string,
        "investUst"?: string,
        "profitRate"?: string,
        "profitUsd"?: string
    }
}) => {
    try {
        const res = await Axios.post(`${BaseUrl}/address/transactions`, {
            ...data,
            sort: {
                'height': 'desc'
            },
        })
        return filter(res)?.data

    } catch (error) {
        showNotic('error', { content: `${error}` });
    }

}
const getBalances = async (data: {
    address: string,
}) => {
    try {
        const res = await Axios.post(`${BaseUrl}/address/holding`, {
            address: data.address
        })
        return filter(res)?.data
    } catch (error) {
        showNotic('error', { content: `${error}` });
    }
}

export {
    test,
    getTransactions,
    getBalances,
    getProfitRankList,
}

