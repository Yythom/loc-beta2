export interface ConsistentOutDetailInterface {
    code: number;
    msg: string;
    data: Data;
}

interface Data {
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

export interface ConsistentInDetailInterface {
    code: number;
    msg: string;
    data: Data;
}

