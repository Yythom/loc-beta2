export interface ConsistentInListParamsInterface {
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


export interface ConsistentOutListInterface {
    list: List[];
    page: number;
    page_size: number;
    total: number;
}

interface List {
    id: string;
    contract_address: string;
    contract_name: string;
    source: string;
    md5: string;
    amount: string;
    times: number;
    price: string;
    total: string;
    address_num: number;
    avg_num: number;
    time_range: number;
    tag: number;
    create_at: number;
    update_at: number;
}
