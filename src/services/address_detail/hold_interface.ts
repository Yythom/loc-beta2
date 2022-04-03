export interface HoldingInterface {
    data: Data;
    error: boolean;
    error_message: string;
    error_code: string;
}

interface Data {
    address: string;
    updated_at: Date;
    next_update_at: Date;
    quote_currency: string;
    chain_id: number;
    items: Item[];
}

interface Item {
    contract_decimals: number;
    contract_name: string;
    contract_ticker_symbol: string;
    contract_address: string;
    supports_erc: SupportsErc[] | null;
    logo_url: string;
    last_transferred_at: string;
    type: Type;
    balance: string;
    balance_float: number;
    balance_24h: string;
    quote_rate: number;
    quote_rate_24h: number;
    quote: number;
    quote_24h: number;
    nft_data: string;
}

enum SupportsErc {
    Erc20 = "erc20",
}

enum Type {
    Cryptocurrency = "cryptocurrency",
    Dust = "dust",
    Stablecoin = "stablecoin",
}
