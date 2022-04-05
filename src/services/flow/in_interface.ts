
export interface FlowParamsInterface {
    search?: Search;
    page?: number;
    sort?: Sort;
}

interface Search {
    source?: string;
    time_range?: number;
    tag?: number;
}

interface Sort {
    create_at?: {};
    amount?: {};
    total?: {};
    times?: {};
    address_num?: {};
    avg_num?: {};
}


export interface FlowInInterface {
    list: List[];
    page: number;
    page_size: number;
    total: number;
}

interface List {
    id: string;
    token_address: string;
    token_name: string;
    type: string;
    md5: string;
    amount: string;
    price: string;
    total: string;
    address_num: number;
    time_range: number;
    tag: number;
    create_at: number;
    update_at: number;
    token: any[];
}



export type FlowInDetailInterface = FlowInDetailitem[]
interface FlowInDetailitem {
    from_address: string;
    to_address: string;
    total: string;
    address: string;
    type: string;
    price: string;
    total_usd: string;
}

