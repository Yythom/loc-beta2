/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
export type SmartMoneyBalanceHistoryListSearchPeriod =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7;
export type SmartMoneyStableCoinPositionRecordListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type SmartMoneyEthPositionRecordListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type BaseSortCreateAt = "asc" | "desc";
export type SmartMoneyTokenFlowListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type SmartMoneyTokenFlowSortVolumes = BaseSortCreateAt;
export type WalletAddressFlowListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type WalletAddressFlowSortInAveragePrice = BaseSortCreateAt;
export type WalletAddressFlowSortOutAveragePrice = BaseSortCreateAt;
export type WalletAddressFlowSortInTimes = BaseSortCreateAt;
export type WalletAddressFlowSortOutTimes = BaseSortCreateAt;
export type WalletAddressFlowSortVolumes = BaseSortCreateAt;
export type WalletAddressFlowItemPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type SmartMoneySwapVolumesHistoryListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type WalletAddressProfitListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type WalletAddressProfitListSortProfit = BaseSortCreateAt;
export type WalletAddressProfitListSortRoi = BaseSortCreateAt;
export type WalletAddressProfitItemPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type DexLeaderBoardDetailRequestPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type SwapTransactionListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type SwapTransactionSortVolumes = BaseSortCreateAt;
export type SwapTransactionSortCreateAt = BaseSortCreateAt;
export type SmartMoneySwapVolumesRecordListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type SmartMoneySwapVolumesRecordSortVolumes = BaseSortCreateAt;
export type SmartMoneySwapVolumesRecordItemPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type SmartMoneySwapRecordListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type SmartMoneySwapRecordListSearchSwapDirection = 1 | 2;
export type SmartMoneySwapRecordSortVolumes = BaseSortCreateAt;
export type SmartMoneySwapRecordItemPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type TokenPriceHistoryListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type WalletAddressBalanceHistoryListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type WalletAddressBalanceListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type WalletAddressTokenProfitListSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type WalletAddressTokenProfitListSortProfit = BaseSortCreateAt;
export type WalletAddressTokenProfitListSortRoi = BaseSortCreateAt;
export type WalletAddressTokenProfitItemPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
export type WalletAddressProfitSearchPeriod =
  SmartMoneyBalanceHistoryListSearchPeriod;
/**
 * @description
 *   搜索参数
 */
export interface SmartMoneyBalanceHistoryListSearch {
  /**
   * @description
   *   周期
   */
  period?: SmartMoneyBalanceHistoryListSearchPeriod;
}

/**
 * @description
 *   分页参数
 */
export interface Page {
  /**
   * @description
   * @default 1
   */
  page?: number;
  /**
   * @description
   * @default 20
   */
  page_size?: number;
  /**
   * @description
   * @default false
   */
  all?: boolean;
  /**
   * @description
   * @default true
   */
  total?: boolean;
}

export interface SmartMoneyBalanceHistoryListRequest {
  search?: SmartMoneyBalanceHistoryListSearch;
  page?: Page;
}

export interface SmartMoneyBalanceHistoryItem {
  /**
   * @description
   *   资产余额
   */
  balance_volumes?: string;
  /**
   * @description
   *   日期
   */
  create_at?: number;
}

export interface SmartMoneyBalanceHistoryListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<SmartMoneyBalanceHistoryItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

export interface SmartMoneyTokenPositionRecordListRequest {
  page?: Page;
}

/**
 * @description
 *   token
 */
export interface TokenItem {
  /**
   * @description
   *   代币名称
   */
  token_name?: string;
  /**
   * @description
   *   代币简称
   */
  symbol?: string;
  /**
   * @description
   *   地址
   */
  token_address?: string;
  /**
   * @description
   *   精度
   */
  token_decimals?: number;
}

export interface SmartMoneyTokenPositionRecordItem {
  /**
   * @description
   *   token地址
   */
  token_address?: string;
  token?: TokenItem;
  /**
   * @description
   *   持仓数量
   */
  position_amount?: string;
  /**
   * @description
   *   持仓数量变化
   */
  amount_change?: string;
  /**
   * @description
   *   精度
   */
  decimals?: number;
  /**
   * @description
   *   持仓价值
   */
  position_volumes?: string;
  /**
   * @description
   *   持仓价值变化
   */
  volumes_change?: string;
  /**
   * @description
   *   持仓占比
   */
  percentage?: string;
  /**
   * @description
   *   持仓地址数量
   */
  address_count?: number;
  /**
   * @description
   *   创建日期
   */
  create_date?: number;
  /**
   * @description
   *   小时
   */
  create_hour?: number;
}

export interface SmartMoneyTokenPositionRecordListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<SmartMoneyTokenPositionRecordItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

export interface SmartMoneyDensityListRequest {
  page?: Page;
}

export interface SmartMoneyDensityItem {
  /**
   * @description
   *   钱包地址
   */
  token_address?: string;
  token?: TokenItem;
  /**
   * @description
   *   市值
   */
  market_cap?: string;
  /**
   * @description
   *   sm持仓
   */
  sm_holding?: string;
  /**
   * @description
   *   持仓占比
   */
  holding_percentage?: string;
  /**
   * @description
   *   市值变化率
   */
  market_cap_change?: string;
  /**
   * @description
   *   日期
   */
  create_date?: number;
  /**
   * @description
   *   小时
   */
  create_hour?: number;
}

export interface SmartMoneyDensityListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<SmartMoneyDensityItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface SmartMoneyStableCoinPositionRecordListSearch {
  /**
   * @description
   *   周期
   */
  period?: SmartMoneyStableCoinPositionRecordListSearchPeriod;
}

export interface SmartMoneyStableCoinPositionRecordListRequest {
  search?: SmartMoneyStableCoinPositionRecordListSearch;
  page?: Page;
}

export interface SmartMoneyStableCoinPositionRecordItem {
  /**
   * @description
   *   持仓占比
   */
  percentage?: string;
  /**
   * @description
   *   日期
   */
  create_at?: number;
}

export interface SmartMoneyStableCoinPositionRecordListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<SmartMoneyStableCoinPositionRecordItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface SmartMoneyEthPositionRecordListSearch {
  /**
   * @description
   *   周期
   */
  period?: SmartMoneyEthPositionRecordListSearchPeriod;
}

export interface SmartMoneyEthPositionRecordListRequest {
  search?: SmartMoneyEthPositionRecordListSearch;
  page?: Page;
}

export interface SmartMoneyEthPositionRecordItem {
  /**
   * @description
   *   持仓占比
   */
  percentage?: string;
  /**
   * @description
   *   日期
   */
  create_at?: number;
}

export interface SmartMoneyEthPositionRecordListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<SmartMoneyEthPositionRecordItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   控制参数
 */
export interface TokenCondition {}

/**
 * @description
 *   搜索参数
 */
export interface TokenListSearch {
  /**
   * @description
   *   搜索字段
   */
  search?: string;
}

/**
 * @description
 *   排序参数
 */
export interface BaseSort {
  /**
   * @description
   *   创建时间排序
   * @default [object Object]
   */
  create_at?: BaseSortCreateAt;
}

export interface TokenListRequest {
  condition?: TokenCondition;
  search?: TokenListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface TokenListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<TokenItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface TokenSearch {
  /**
   * @description
   *   token地址
   */
  token_address?: string;
}

export interface TokenDetailRequest {
  condition?: TokenCondition;
  search?: TokenSearch;
}

export interface TokenDetailResponse {
  /**
   * @description
   *   代币名称
   */
  token_name?: string;
  /**
   * @description
   *   代币简称
   */
  symbol?: string;
  /**
   * @description
   *   地址
   */
  token_address?: string;
  /**
   * @description
   *   精度
   */
  token_decimals?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface SmartMoneyTokenFlowListSearch {
  /**
   * @description
   *   周期
   */
  period?: SmartMoneyTokenFlowListSearchPeriod;
  /**
   * @description
   *   是否中心化交易所
   * @default 0
   */
  is_cex?: number;
  /**
   * @description
   *   是否净流入流出
   * @default 0
   */
  is_consistent?: number;
  /**
   * @description
   *   是否流出
   * @default 0
   */
  is_out?: number;
  /**
   * @description
   *   是否流入
   * @default 0
   */
  is_in?: number;
}

/**
 * @description
 *   排序参数
 */
export interface SmartMoneyTokenFlowSort {
  /**
   * @description
   *   交易量
   * @default [object Object]
   */
  volumes?: SmartMoneyTokenFlowSortVolumes;
}

export interface SmartMoneyTokenFlowListRequest {
  search?: SmartMoneyTokenFlowListSearch;
  page?: Page;
  sort?: SmartMoneyTokenFlowSort;
}

export interface SmartMoneyTokenFlowItem {
  /**
   * @description
   *   token地址
   */
  token_address?: string;
  token?: TokenItem;
  /**
   * @description
   *   数量
   */
  amount?: string;
  /**
   * @description
   *   交易量
   */
  volumes?: string;
  /**
   * @description
   *   精度
   */
  decimals?: number;
  /**
   * @description
   *   是否为中心化交易所交易
   */
  is_cex?: number;
  /**
   * @description
   *   是否净流入流出
   */
  is_consistent?: number;
  /**
   * @description
   *   是否流入
   */
  is_in?: number;
  /**
   * @description
   *   是否流出
   */
  is_out?: number;
  /**
   * @description
   *   地址数量
   */
  wallet_address_count?: number;
  /**
   * @description
   *   交易次数
   */
  times?: number;
  /**
   * @description
   *   平均交易次数
   */
  average_times?: number;
  /**
   * @description
   *   统计周期
   */
  period?: number;
  /**
   * @description
   *   创建日期
   */
  create_date?: number;
}

export interface SmartMoneyTokenFlowListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<SmartMoneyTokenFlowItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface WalletAddressFlowListSearch {
  /**
   * @description
   *   钱包地址
   * @default null
   */
  wallet_address?: string;
  /**
   * @description
   *   周期
   */
  period?: WalletAddressFlowListSearchPeriod;
  /**
   * @description
   *   token地址
   * @default null
   */
  token_address?: string;
  /**
   * @description
   *   是否中心化交易所
   * @default 0
   */
  is_cex?: number;
  /**
   * @description
   *   是否流出
   * @default 0
   */
  is_out?: number;
  /**
   * @description
   *   是否流入
   * @default 0
   */
  is_in?: number;
}

/**
 * @description
 *   排序参数
 */
export interface WalletAddressFlowSort {
  /**
   * @description
   *   流入平均价
   * @default null
   */
  in_average_price?: WalletAddressFlowSortInAveragePrice;
  /**
   * @description
   *   流出平均价
   * @default null
   */
  out_average_price?: WalletAddressFlowSortOutAveragePrice;
  /**
   * @description
   *   流入次数
   * @default null
   */
  in_times?: WalletAddressFlowSortInTimes;
  /**
   * @description
   *   流出次数
   * @default null
   */
  out_times?: WalletAddressFlowSortOutTimes;
  /**
   * @description
   *   当前价值
   * @default null
   */
  volumes?: WalletAddressFlowSortVolumes;
}

export interface WalletAddressFlowListRequest {
  search?: WalletAddressFlowListSearch;
  page?: Page;
  sort?: WalletAddressFlowSort;
}

export interface WalletAddressFlowItem {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   token地址
   */
  token_address?: string;
  token?: TokenItem;
  /**
   * @description
   *   精度
   */
  decimals?: number;
  /**
   * @description
   *   数量
   */
  amount?: string;
  /**
   * @description
   *   价值
   */
  volumes?: string;
  /**
   * @description
   *   流入数量
   */
  in_amount?: string;
  /**
   * @description
   *   流入交易额（历史值）
   */
  in_volumes?: string;
  /**
   * @description
   *   流入交易次数
   */
  in_times?: number;
  /**
   * @description
   *   流入平均价格
   */
  in_average_price?: string;
  /**
   * @description
   *   流出数量
   */
  out_amount?: string;
  /**
   * @description
   *   流出交易额（历史值）
   */
  out_volumes?: string;
  /**
   * @description
   *   流出交易次数
   */
  out_times?: number;
  /**
   * @description
   *   流出平均价格
   */
  out_average_price?: string;
  /**
   * @description
   *   周期
   */
  period?: WalletAddressFlowItemPeriod;
  /**
   * @description
   *   创建时间
   */
  create_date?: number;
}

export interface WalletAddressFlowListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<WalletAddressFlowItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface SmartMoneySwapVolumesHistoryListSearch {
  /**
   * @description
   *   周期
   */
  period?: SmartMoneySwapVolumesHistoryListSearchPeriod;
}

export interface SmartMoneySwapVolumesHistoryListRequest {
  search?: SmartMoneySwapVolumesHistoryListSearch;
}

export interface SmartMoneySwapVolumesHistoryItem {
  /**
   * @description
   *   交易量
   */
  swap_volumes?: string;
  /**
   * @description
   *   时间
   */
  create_at?: number;
}

export interface SmartMoneySwapVolumesHistoryListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<SmartMoneySwapVolumesHistoryItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface WalletAddressProfitListSearch {
  /**
   * @description
   *   周期
   */
  period?: WalletAddressProfitListSearchPeriod;
}

/**
 * @description
 *   排序参数
 */
export interface WalletAddressProfitListSort {
  /**
   * @description
   *   利润
   * @default null
   */
  profit?: WalletAddressProfitListSortProfit;
  /**
   * @description
   *   ROI
   * @default [object Object]
   */
  roi?: WalletAddressProfitListSortRoi;
}

export interface WalletAddressProfitListRequest {
  search?: WalletAddressProfitListSearch;
  page?: Page;
  sort?: WalletAddressProfitListSort;
}

export interface WalletAddressTagItem {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   标签
   */
  tag?: string;
}

export interface WalletAddressItem {
  /**
   * @description
   *   地址
   * @default
   */
  wallet_address?: string;
  /**
   * @description
   *   地址名称
   * @default
   */
  wallet_address_name?: string;
  /**
   * @description
   *   地址标签
   * @default
   */
  tags?: Array<WalletAddressTagItem>;
}

export interface WalletAddressProfitItem {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  address?: WalletAddressItem;
  /**
   * @description
   *   地址标签
   * @default
   */
  tags?: Array<WalletAddressTagItem>;
  /**
   * @description
   *   投入价值
   */
  invest_value?: string;
  /**
   * @description
   *   回报价值
   */
  return_value?: string;
  /**
   * @description
   *   收益
   */
  profit?: string;
  /**
   * @description
   *   收益率
   */
  roi?: string;
  /**
   * @description
   *   周期
   */
  period?: WalletAddressProfitItemPeriod;
  /**
   * @description
   *   创建日期
   */
  create_date?: number;
}

export interface WalletAddressProfitListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<WalletAddressProfitItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

export interface DexLeaderBoardDetailRequest {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   周期
   */
  period?: DexLeaderBoardDetailRequestPeriod;
  page?: Page;
}

export interface DexLeaderBoardDetailItem {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   转出token地址
   */
  out_token_address?: string;
  /**
   * @description
   *   转出token Symbol
   */
  out_token_symbol?: string;
  /**
   * @description
   *   转出数量
   */
  out_amount?: string;
  /**
   * @description
   *   转入token地址
   */
  in_token_address?: string;
  /**
   * @description
   *   转入token Symbol
   */
  in_token_symbol?: string;
  /**
   * @description
   *   转入数量
   */
  in_amount?: string;
  /**
   * @description
   *   价值
   */
  volumes?: string;
  /**
   * @description
   *   现价
   */
  now_price?: string;
  /**
   * @description
   *   投入价值
   */
  invest_value?: string;
  /**
   * @description
   *   回报价值
   */
  return_value?: string;
  /**
   * @description
   *   收益
   */
  profit?: string;
  /**
   * @description
   *   收益率
   */
  roi?: string;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
}

export interface DexLeaderBoardDetailResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<DexLeaderBoardDetailItem>;
}

/**
 * @description
 *   搜索参数
 */
export interface SwapTransactionListSearch {
  /**
   * @description
   *   周期
   */
  period?: SwapTransactionListSearchPeriod;
}

/**
 * @description
 *   排序参数
 */
export interface SwapTransactionSort {
  /**
   * @description
   *   交易量
   * @default null
   */
  volumes?: SwapTransactionSortVolumes;
  /**
   * @description
   *   创建时间排序
   * @default [object Object]
   */
  create_at?: SwapTransactionSortCreateAt;
}

export interface SwapTransactionListRequest {
  search?: SwapTransactionListSearch;
  page?: Page;
  sort?: SwapTransactionSort;
}

export interface SwapTransactionItem {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  address?: WalletAddressItem;
  /**
   * @description
   *   地址标签
   * @default
   */
  tags?: Array<WalletAddressTagItem>;
  /**
   * @description
   *   转出token地址
   */
  out_token_address?: string;
  /**
   * @description
   *   转出token Symbol
   */
  out_token_symbol?: string;
  /**
   * @description
   *   转出数量
   */
  out_amount?: string;
  /**
   * @description
   *   转入token地址
   */
  in_token_address?: string;
  /**
   * @description
   *   转入token Symbol
   */
  in_token_symbol?: string;
  /**
   * @description
   *   转入数量
   */
  in_amount?: string;
  /**
   * @description
   *   价值
   */
  volumes?: string;
  /**
   * @description
   *   创建日期
   */
  create_date?: number;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
}

export interface SwapTransactionListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<SwapTransactionItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface SmartMoneySwapVolumesRecordListSearch {
  /**
   * @description
   *   周期
   */
  period?: SmartMoneySwapVolumesRecordListSearchPeriod;
}

/**
 * @description
 *   排序参数
 */
export interface SmartMoneySwapVolumesRecordSort {
  /**
   * @description
   *   交易量
   * @default null
   */
  volumes?: SmartMoneySwapVolumesRecordSortVolumes;
}

export interface SmartMoneySwapVolumesRecordListRequest {
  search?: SmartMoneySwapVolumesRecordListSearch;
  page?: Page;
  sort?: SmartMoneySwapVolumesRecordSort;
}

/**
 * @description
 *   交易对信息
 */
export interface TokenPairItem {
  /**
   * @description
   *   入token地址
   */
  in_token_address?: string;
  /**
   * @description
   *   入token symbol
   */
  in_token_symbol?: string;
  /**
   * @description
   *   出token地址
   */
  out_token_address?: string;
  /**
   * @description
   *   出token symbol
   */
  out_token_symbol?: string;
}

export interface SmartMoneySwapVolumesRecordItem {
  swap_pair?: TokenPairItem;
  /**
   * @description
   *   交易对信息
   */
  pair_md5?: string;
  /**
   * @description
   *   交易量
   */
  volumes?: string;
  /**
   * @description
   *   交易量变化
   */
  volumes_change?: string;
  /**
   * @description
   *   周期
   */
  period?: SmartMoneySwapVolumesRecordItemPeriod;
  /**
   * @description
   *   创建日期
   */
  create_date?: number;
}

export interface SmartMoneySwapVolumesRecordListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<SmartMoneySwapVolumesRecordItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface SmartMoneySwapRecordListSearch {
  /**
   * @description
   *   周期
   */
  period?: SmartMoneySwapRecordListSearchPeriod;
  /**
   * @description
   *   方向
   */
  swap_direction?: SmartMoneySwapRecordListSearchSwapDirection;
}

/**
 * @description
 *   排序参数
 */
export interface SmartMoneySwapRecordSort {
  /**
   * @description
   *   交易量
   */
  volumes?: SmartMoneySwapRecordSortVolumes;
}

export interface SmartMoneySwapRecordListRequest {
  search?: SmartMoneySwapRecordListSearch;
  page?: Page;
  sort?: SmartMoneySwapRecordSort;
}

export interface SmartMoneySwapRecordItem {
  /**
   * @description
   *   token地址
   */
  token_address?: string;
  token?: TokenItem;
  /**
   * @description
   *   交易方向
   */
  swap_direction?: number;
  /**
   * @description
   *   数量
   */
  amount?: string;
  /**
   * @description
   *   精度
   */
  decimals?: number;
  /**
   * @description
   *   价值
   */
  volumes?: string;
  /**
   * @description
   *   交易次数
   */
  times?: number;
  /**
   * @description
   *   地址数量
   */
  address_count?: number;
  /**
   * @description
   *   平均交易次数
   */
  avg_swap_times?: number;
  /**
   * @description
   *   周期
   */
  period?: SmartMoneySwapRecordItemPeriod;
  /**
   * @description
   *   日期
   */
  create_date?: number;
}

export interface SmartMoneySwapRecordListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<SmartMoneySwapRecordItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface TokenPriceHistoryListSearch {
  /**
   * @description
   *   token地址
   */
  token_address?: string;
  /**
   * @description
   *   周期
   */
  period?: TokenPriceHistoryListSearchPeriod;
}

export interface TokenPriceHistoryListRequest {
  search?: TokenPriceHistoryListSearch;
  page?: Page;
}

export interface TokenPriceHistoryItem {
  /**
   * @description
   *   价格
   */
  price?: string;
  /**
   * @description
   *   日期
   */
  create_date?: number;
  /**
   * @description
   *   小时
   */
  create_hour?: number;
  /**
   * @description
   *   日期
   */
  create_at?: number;
}

export interface TokenPriceHistoryListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<TokenPriceHistoryItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface WalletAddressBalanceHistoryListSearch {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   周期
   */
  period?: WalletAddressBalanceHistoryListSearchPeriod;
}

export interface WalletAddressBalanceHistoryListRequest {
  search?: WalletAddressBalanceHistoryListSearch;
  page?: Page;
}

export interface WalletAddressBalanceHistoryItem {
  /**
   * @description
   *   价值
   */
  volumes?: string;
  /**
   * @description
   *   日期
   */
  create_at?: number;
}

export interface WalletAddressBalanceHistoryListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<WalletAddressBalanceHistoryItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface WalletAddressBalanceListSearch {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   周期
   * @default null
   */
  period?: WalletAddressBalanceListSearchPeriod;
  /**
   * @description
   *   token地址
   * @default null
   */
  token_address?: string;
}

export interface WalletAddressBalanceListRequest {
  search?: WalletAddressBalanceListSearch;
  page?: Page;
}

export interface WalletAddressBalanceItem {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   代币地址
   */
  token_address?: string;
  token?: TokenItem;
  /**
   * @description
   *   余额
   */
  amount?: string;
  /**
   * @description
   *   精度
   */
  decimals?: number;
  /**
   * @description
   *   价值
   */
  volumes?: string;
  /**
   * @description
   *   当前价格
   */
  current_price?: string;
  /**
   * @description
   *   占比
   */
  percentage?: string;
  /**
   * @description
   *   日期
   */
  create_date?: number;
}

export interface WalletAddressBalanceListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<WalletAddressBalanceItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface WalletAddressTokenProfitListSearch {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   周期
   * @default null
   */
  period?: WalletAddressTokenProfitListSearchPeriod;
  /**
   * @description
   *   token地址
   * @default null
   */
  token_address?: string;
}

/**
 * @description
 *   排序参数
 */
export interface WalletAddressTokenProfitListSort {
  /**
   * @description
   *   利润
   * @default null
   */
  profit?: WalletAddressTokenProfitListSortProfit;
  /**
   * @description
   *   ROI
   * @default [object Object]
   */
  roi?: WalletAddressTokenProfitListSortRoi;
}

export interface WalletAddressTokenProfitListRequest {
  search?: WalletAddressTokenProfitListSearch;
  page?: Page;
  sort?: WalletAddressTokenProfitListSort;
}

export interface WalletAddressTokenProfitItem {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   token地址
   */
  token_address?: string;
  token?: TokenItem;
  /**
   * @description
   *   投入价值
   */
  invest_value?: string;
  /**
   * @description
   *   回报价值
   */
  return_value?: string;
  /**
   * @description
   *   收益
   */
  profit?: string;
  /**
   * @description
   *   收益率
   */
  roi?: string;
  /**
   * @description
   *   周期
   */
  period?: WalletAddressTokenProfitItemPeriod;
  /**
   * @description
   *   创建日期
   */
  create_date?: number;
}

export interface WalletAddressTokenProfitListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<WalletAddressTokenProfitItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface WalletAddressProfitSearch {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   周期
   */
  period?: WalletAddressProfitSearchPeriod;
}

export interface WalletAddressProfitDetailRequest {
  search?: WalletAddressProfitSearch;
}

/**
 * @description
 *   控制参数
 */
export interface WalletAddressTransactionCondition {}

/**
 * @description
 *   搜索参数
 */
export interface WalletAddressTransactionListSearch {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   token地址
   * @default null
   */
  token_address?: string;
}

export interface WalletAddressTransactionListRequest {
  condition?: WalletAddressTransactionCondition;
  search?: WalletAddressTransactionListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface WalletAddressTransactionItem {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   交易类型
   */
  type?: number;
  /**
   * @description
   *   入方向地址
   */
  from?: string;
  /**
   * @description
   *   入方向信息
   */
  from_info?: Array<Array<any>>;
  /**
   * @description
   *   出方向地址
   */
  to?: string;
  /**
   * @description
   *   出方向信息
   */
  to_info?: Array<Array<any>>;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
}

export interface WalletAddressTransactionListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<WalletAddressTransactionItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface WalletAddressListSearch {}

export interface WalletAddressListRequest {
  search?: WalletAddressListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface WalletAddressListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<WalletAddressItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

export interface WalletAddressSearch {
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
}

export interface WalletAddressDetailRequest {
  search?: WalletAddressSearch;
}

export interface WalletAddressDetailResponse {
  /**
   * @description
   *   地址
   * @default
   */
  wallet_address?: string;
  /**
   * @description
   *   地址名称
   * @default
   */
  wallet_address_name?: string;
  /**
   * @description
   *   地址标签
   * @default
   */
  tags?: Array<WalletAddressTagItem>;
}

/**
 * @description
 *   控制参数
 */
export interface TokenPriceCondition {}

/**
 * @description
 *   搜索参数
 */
export interface TokenPriceListSearch {}

export interface TokenPriceListRequest {
  condition?: TokenPriceCondition;
  search?: TokenPriceListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface TokenPriceItem {
  /**
   * @description
   *   token地址
   */
  token_address?: string;
  /**
   * @description
   *   价格
   */
  price?: string;
  /**
   * @description
   *   市值
   */
  market_cap?: string;
  /**
   * @description
   *   时间
   */
  create_at?: number;
}

export interface TokenPriceListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<TokenPriceItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface TokenPriceSearch {
  /**
   * @description
   *   token地址
   */
  token_address?: string;
}

export interface TokenPriceDetailRequest {
  condition?: TokenPriceCondition;
  search?: TokenPriceSearch;
}

export interface TokenPriceDetailResponse {
  /**
   * @description
   *   token地址
   */
  token_address?: string;
  /**
   * @description
   *   价格
   */
  price?: string;
  /**
   * @description
   *   市值
   */
  market_cap?: string;
  /**
   * @description
   *   时间
   */
  create_at?: number;
}
