export interface CEXInflow {
    list: CEXInflowList[];
    page: number;
    page_size: number;
    total: number;
}

interface CEXInflowList {
    block_number: string;
    time_stamp: string;
    hash: string;
    nonce: string;
    block_hash: string;
    from: string;
    to: string;
    contract_address: string;
    value: string;
    token_name: string;
    token_symbol: string;
    token_decimal: number;
    transaction_index: number;
    gas: string;
    gas_price: string;
    gas_used: string;
    cumulative_gas_used: string;
    input: string;
    confirmations: string;
    create_at: number;
    update_at: number;
}



export interface CEXOutflow {
    list: CEXOutflowList[];
    page: number;
    page_size: number;
    total: number;
}

interface CEXOutflowList {
    block_number: string;
    time_stamp: string;
    hash: string;
    nonce: string;
    block_hash: string;
    from: string;
    to: string;
    contract_address: string;
    value: string;
    token_name: string;
    token_symbol: string;
    token_decimal: number;
    transaction_index: number;
    gas: string;
    gas_price: string;
    gas_used: string;
    cumulative_gas_used: string;
    input: string;
    confirmations: string;
    create_at: number;
    update_at: number;
}

export interface Outflow {
    list: OutflowList[];
    page: number;
    page_size: number;
    total: number;
}

interface OutflowList {
    block_number: string;
    time_stamp: string;
    hash: string;
    nonce: string;
    block_hash: string;
    from: string;
    to: string;
    contract_address: string;
    value: string;
    token_name: string;
    token_symbol: string;
    token_decimal: number;
    transaction_index: number;
    gas: string;
    gas_price: string;
    gas_used: string;
    cumulative_gas_used: string;
    input: string;
    confirmations: string;
    create_at: number;
    update_at: number;
}


export interface Inflow {
    list: InflowList[];
    page: number;
    page_size: number;
    total: number;
}

interface InflowList {
    block_number: string;
    time_stamp: string;
    hash: string;
    nonce: string;
    block_hash: string;
    from: string;
    to: string;
    contract_address: string;
    value: string;
    token_name: string;
    token_symbol: string;
    token_decimal: number;
    transaction_index: number;
    gas: string;
    gas_price: string;
    gas_used: string;
    cumulative_gas_used: string;
    input: string;
    confirmations: string;
    create_at: number;
    update_at: number;
}
