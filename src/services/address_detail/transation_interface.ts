export interface TransactionInterface {
    list: TransactionList[];
    page: number;
    page_size: number;
    total: number;
}

export interface TransactionParams {
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
}
interface TransactionList {
    address: string;
    blockSignedAt: number;
    contractAddress: string;
    createAt: Date;
    details: Details;
    enable: number;
    fun: string;
    height: number;
    id: number;
    investUsd: number;
    log: string;
    poolAddress: string;
    profitRate: number;
    profitUsd: number;
    returnUsd: number;
    title: string;
    to: string;
    txHash: string;
    updateAt: Date;
    proDate?: string
}

interface Details {
    height: number;
    "invest usd": number;
    "profit rate": number;
    "profit usd": number;
    "return usd": number;
    swap: string;
    type: string;
}
