/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import requester from "../../config";
import type {
  SmartMoneyBalanceHistoryListRequest,
  SmartMoneyBalanceHistoryListResponse,
  SmartMoneyTokenPositionRecordListRequest,
  SmartMoneyTokenPositionRecordListResponse,
  SmartMoneyDensityListRequest,
  SmartMoneyDensityListResponse,
  SmartMoneyStableCoinPositionRecordListRequest,
  SmartMoneyStableCoinPositionRecordListResponse,
  SmartMoneyEthPositionRecordListRequest,
  SmartMoneyEthPositionRecordListResponse,
  TokenListRequest,
  TokenListResponse,
  TokenDetailRequest,
  TokenDetailResponse,
  SmartMoneyTokenFlowListRequest,
  SmartMoneyTokenFlowListResponse,
  WalletAddressFlowListRequest,
  WalletAddressFlowListResponse,
  SmartMoneySwapVolumesHistoryListRequest,
  SmartMoneySwapVolumesHistoryListResponse,
  WalletAddressProfitListRequest,
  WalletAddressProfitListResponse,
  DexLeaderBoardDetailRequest,
  DexLeaderBoardDetailResponse,
  SwapTransactionListRequest,
  SwapTransactionListResponse,
  SmartMoneySwapVolumesRecordListRequest,
  SmartMoneySwapVolumesRecordListResponse,
  SmartMoneySwapRecordListRequest,
  SmartMoneySwapRecordListResponse,
  TokenPriceHistoryListRequest,
  TokenPriceHistoryListResponse,
  WalletAddressBalanceHistoryListRequest,
  WalletAddressBalanceHistoryListResponse,
  WalletAddressBalanceListRequest,
  WalletAddressBalanceListResponse,
  WalletAddressTokenProfitListRequest,
  WalletAddressTokenProfitListResponse,
  WalletAddressProfitDetailRequest,
  WalletAddressProfitItem,
  WalletAddressTransactionListRequest,
  WalletAddressTransactionListResponse,
  WalletAddressListRequest,
  WalletAddressListResponse,
  WalletAddressDetailRequest,
  WalletAddressDetailResponse,
  TokenPriceListRequest,
  TokenPriceListResponse,
  TokenPriceDetailRequest,
  TokenPriceDetailResponse,
} from "./definition";

/** @description request parameter type for postMainApiV1TokenBalanceTotalList */
export interface PostMainApiV1TokenBalanceTotalListOption {
  /** @description */
  body: {
    /**
        @description */
    SmartMoneyBalanceHistoryListRequest: SmartMoneyBalanceHistoryListRequest;
  };
}

/** @description response type for postMainApiV1TokenBalanceTotalList */
export interface PostMainApiV1TokenBalanceTotalListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: SmartMoneyBalanceHistoryListResponse;
  };
}

export type PostMainApiV1TokenBalanceTotalListResponseSuccess =
  PostMainApiV1TokenBalanceTotalListResponse[200];
/**
 * @description
 *   获取SM地址总持仓记录列表
 * @tags Token Balance接口
 * @produces application/json
 */
export const postMainApiV1TokenBalanceTotalList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/token/balance/total/list";
  function request(
    option: PostMainApiV1TokenBalanceTotalListOption
  ): Promise<PostMainApiV1TokenBalanceTotalListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1TokenBalanceTotalListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1TokenBalanceHolding */
export interface PostMainApiV1TokenBalanceHoldingOption {
  /** @description */
  body: {
    /**
        @description */
    SmartMoneyTokenPositionRecordListRequest: SmartMoneyTokenPositionRecordListRequest;
  };
}

/** @description response type for postMainApiV1TokenBalanceHolding */
export interface PostMainApiV1TokenBalanceHoldingResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: SmartMoneyTokenPositionRecordListResponse;
  };
}

export type PostMainApiV1TokenBalanceHoldingResponseSuccess =
  PostMainApiV1TokenBalanceHoldingResponse[200];
/**
 * @description
 *   获取Smart Money Holding列表
 * @tags Token Balance接口
 * @produces application/json
 */
export const postMainApiV1TokenBalanceHolding = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/token/balance/holding";
  function request(
    option: PostMainApiV1TokenBalanceHoldingOption
  ): Promise<PostMainApiV1TokenBalanceHoldingResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1TokenBalanceHoldingResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1TokenBalanceList */
export interface PostMainApiV1TokenBalanceListOption {
  /** @description */
  body: {
    /**
        @description */
    SmartMoneyDensityListRequest: SmartMoneyDensityListRequest;
  };
}

/** @description response type for postMainApiV1TokenBalanceList */
export interface PostMainApiV1TokenBalanceListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: SmartMoneyDensityListResponse;
  };
}

export type PostMainApiV1TokenBalanceListResponseSuccess =
  PostMainApiV1TokenBalanceListResponse[200];
/**
 * @description
 *   获取token density列表
 * @tags Token Balance接口
 * @produces application/json
 */
export const postMainApiV1TokenBalanceList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/token/balance/list";
  function request(
    option: PostMainApiV1TokenBalanceListOption
  ): Promise<PostMainApiV1TokenBalanceListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1TokenBalanceListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1TokenBalanceStableList */
export interface PostMainApiV1TokenBalanceStableListOption {
  /** @description */
  body: {
    /**
        @description */
    SmartMoneyStableCoinPositionRecordListRequest: SmartMoneyStableCoinPositionRecordListRequest;
  };
}

/** @description response type for postMainApiV1TokenBalanceStableList */
export interface PostMainApiV1TokenBalanceStableListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: SmartMoneyStableCoinPositionRecordListResponse;
  };
}

export type PostMainApiV1TokenBalanceStableListResponseSuccess =
  PostMainApiV1TokenBalanceStableListResponse[200];
/**
 * @description
 *   获取stable token 资产占比列表
 * @tags Token Balance接口
 * @produces application/json
 */
export const postMainApiV1TokenBalanceStableList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/token/balance/stable/list";
  function request(
    option: PostMainApiV1TokenBalanceStableListOption
  ): Promise<PostMainApiV1TokenBalanceStableListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1TokenBalanceStableListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1TokenBalanceEthList */
export interface PostMainApiV1TokenBalanceEthListOption {
  /** @description */
  body: {
    /**
        @description */
    SmartMoneyEthPositionRecordListRequest: SmartMoneyEthPositionRecordListRequest;
  };
}

/** @description response type for postMainApiV1TokenBalanceEthList */
export interface PostMainApiV1TokenBalanceEthListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: SmartMoneyEthPositionRecordListResponse;
  };
}

export type PostMainApiV1TokenBalanceEthListResponseSuccess =
  PostMainApiV1TokenBalanceEthListResponse[200];
/**
 * @description
 *   获取eth资产占比列表
 * @tags Token Balance接口
 * @produces application/json
 */
export const postMainApiV1TokenBalanceEthList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/token/balance/eth/list";
  function request(
    option: PostMainApiV1TokenBalanceEthListOption
  ): Promise<PostMainApiV1TokenBalanceEthListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1TokenBalanceEthListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1TokenList */
export interface PostMainApiV1TokenListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postMainApiV1TokenList */
export interface PostMainApiV1TokenListOption {
  /** @description */
  body: {
    /**
        @description */
    TokenListRequest: TokenListRequest;
  };
}

/** @description response type for postMainApiV1TokenList */
export interface PostMainApiV1TokenListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: TokenListResponse;
  };
}

export type PostMainApiV1TokenListResponseSuccess =
  PostMainApiV1TokenListResponse[200];
/**
 * @description
 *   获取token列表
 * @tags token管理
 * @produces application/json
 */
export const postMainApiV1TokenList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/token/list";
  function request(
    option: PostMainApiV1TokenListOption
  ): Promise<PostMainApiV1TokenListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1TokenListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1TokenDetail */
export interface PostMainApiV1TokenDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postMainApiV1TokenDetail */
export interface PostMainApiV1TokenDetailOption {
  /** @description */
  body: {
    /**
        @description */
    TokenDetailRequest: TokenDetailRequest;
  };
}

/** @description response type for postMainApiV1TokenDetail */
export interface PostMainApiV1TokenDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: TokenDetailResponse;
  };
}

export type PostMainApiV1TokenDetailResponseSuccess =
  PostMainApiV1TokenDetailResponse[200];
/**
 * @description
 *   获取token详情
 * @tags token管理
 * @produces application/json
 */
export const postMainApiV1TokenDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/token/detail";
  function request(
    option: PostMainApiV1TokenDetailOption
  ): Promise<PostMainApiV1TokenDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1TokenDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1TokenFlowList */
export interface PostMainApiV1TokenFlowListOption {
  /** @description */
  body: {
    /**
        @description */
    SmartMoneyTokenFlowListRequest: SmartMoneyTokenFlowListRequest;
  };
}

/** @description response type for postMainApiV1TokenFlowList */
export interface PostMainApiV1TokenFlowListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: SmartMoneyTokenFlowListResponse;
  };
}

export type PostMainApiV1TokenFlowListResponseSuccess =
  PostMainApiV1TokenFlowListResponse[200];
/**
 * @description
 *   获取token flow列表
 * @tags Token Flow接口
 * @produces application/json
 */
export const postMainApiV1TokenFlowList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/token/flow/list";
  function request(
    option: PostMainApiV1TokenFlowListOption
  ): Promise<PostMainApiV1TokenFlowListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1TokenFlowListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1TokenFlowAddressList */
export interface PostMainApiV1TokenFlowAddressListOption {
  /** @description */
  body: {
    /**
        @description */
    WalletAddressFlowListRequest: WalletAddressFlowListRequest;
  };
}

/** @description response type for postMainApiV1TokenFlowAddressList */
export interface PostMainApiV1TokenFlowAddressListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WalletAddressFlowListResponse;
  };
}

export type PostMainApiV1TokenFlowAddressListResponseSuccess =
  PostMainApiV1TokenFlowAddressListResponse[200];
/**
 * @description
 *   获取token flow详细的地址列表
 * @tags Token Flow接口
 * @produces application/json
 */
export const postMainApiV1TokenFlowAddressList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/token/flow/address/list";
  function request(
    option: PostMainApiV1TokenFlowAddressListOption
  ): Promise<PostMainApiV1TokenFlowAddressListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1TokenFlowAddressListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1DexTraceTotalSwapVolumesList */
export interface PostMainApiV1DexTraceTotalSwapVolumesListOption {
  /** @description */
  body: {
    /**
        @description */
    SmartMoneySwapVolumesHistoryListRequest: SmartMoneySwapVolumesHistoryListRequest;
  };
}

/** @description response type for postMainApiV1DexTraceTotalSwapVolumesList */
export interface PostMainApiV1DexTraceTotalSwapVolumesListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: SmartMoneySwapVolumesHistoryListResponse;
  };
}

export type PostMainApiV1DexTraceTotalSwapVolumesListResponseSuccess =
  PostMainApiV1DexTraceTotalSwapVolumesListResponse[200];
/**
 * @description
 *   获取SmartMoney总Swap交易量列表
 * @tags Dex Track接口
 * @produces application/json
 */
export const postMainApiV1DexTraceTotalSwapVolumesList =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/main/api/v1/dex/trace/total/swap/volumes/list";
    function request(
      option: PostMainApiV1DexTraceTotalSwapVolumesListOption
    ): Promise<PostMainApiV1DexTraceTotalSwapVolumesListResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostMainApiV1DexTraceTotalSwapVolumesListResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postMainApiV1DexTraceDexLeaderBoardList */
export interface PostMainApiV1DexTraceDexLeaderBoardListOption {
  /** @description */
  body: {
    /**
        @description */
    WalletAddressProfitListRequest: WalletAddressProfitListRequest;
  };
}

/** @description response type for postMainApiV1DexTraceDexLeaderBoardList */
export interface PostMainApiV1DexTraceDexLeaderBoardListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WalletAddressProfitListResponse;
  };
}

export type PostMainApiV1DexTraceDexLeaderBoardListResponseSuccess =
  PostMainApiV1DexTraceDexLeaderBoardListResponse[200];
/**
 * @description
 *   获取Dex Leaderboard列表
 * @tags Dex Track接口
 * @produces application/json
 */
export const postMainApiV1DexTraceDexLeaderBoardList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/dex/trace/dex/leader/board/list";
  function request(
    option: PostMainApiV1DexTraceDexLeaderBoardListOption
  ): Promise<PostMainApiV1DexTraceDexLeaderBoardListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1DexTraceDexLeaderBoardListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1DexTraceDexLeaderBoardListDetail */
export interface PostMainApiV1DexTraceDexLeaderBoardListDetailOption {
  /** @description */
  body: {
    /**
        @description */
    DexLeaderBoardDetailRequest: DexLeaderBoardDetailRequest;
  };
}

/** @description response type for postMainApiV1DexTraceDexLeaderBoardListDetail */
export interface PostMainApiV1DexTraceDexLeaderBoardListDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: DexLeaderBoardDetailResponse;
  };
}

export type PostMainApiV1DexTraceDexLeaderBoardListDetailResponseSuccess =
  PostMainApiV1DexTraceDexLeaderBoardListDetailResponse[200];
/**
 * @description
 *   获取Dex Leaderboard列表
 * @tags Dex Track接口
 * @produces application/json
 */
export const postMainApiV1DexTraceDexLeaderBoardListDetail =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/main/api/v1/dex/trace/dex/leader/board/list/detail";
    function request(
      option: PostMainApiV1DexTraceDexLeaderBoardListDetailOption
    ): Promise<PostMainApiV1DexTraceDexLeaderBoardListDetailResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostMainApiV1DexTraceDexLeaderBoardListDetailResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postMainApiV1DexTraceSwapList */
export interface PostMainApiV1DexTraceSwapListOption {
  /** @description */
  body: {
    /**
        @description */
    SwapTransactionListRequest: SwapTransactionListRequest;
  };
}

/** @description response type for postMainApiV1DexTraceSwapList */
export interface PostMainApiV1DexTraceSwapListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: SwapTransactionListResponse;
  };
}

export type PostMainApiV1DexTraceSwapListResponseSuccess =
  PostMainApiV1DexTraceSwapListResponse[200];
/**
 * @description
 *   获取Swap交易列表
 * @tags Dex Track接口
 * @produces application/json
 */
export const postMainApiV1DexTraceSwapList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/dex/trace/swap/list";
  function request(
    option: PostMainApiV1DexTraceSwapListOption
  ): Promise<PostMainApiV1DexTraceSwapListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1DexTraceSwapListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1DexTraceSwapVolumesList */
export interface PostMainApiV1DexTraceSwapVolumesListOption {
  /** @description */
  body: {
    /**
        @description */
    SmartMoneySwapVolumesRecordListRequest: SmartMoneySwapVolumesRecordListRequest;
  };
}

/** @description response type for postMainApiV1DexTraceSwapVolumesList */
export interface PostMainApiV1DexTraceSwapVolumesListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: SmartMoneySwapVolumesRecordListResponse;
  };
}

export type PostMainApiV1DexTraceSwapVolumesListResponseSuccess =
  PostMainApiV1DexTraceSwapVolumesListResponse[200];
/**
 * @description
 *   获取Swap Volumes列表
 * @tags Dex Track接口
 * @produces application/json
 */
export const postMainApiV1DexTraceSwapVolumesList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/dex/trace/swap/volumes/list";
  function request(
    option: PostMainApiV1DexTraceSwapVolumesListOption
  ): Promise<PostMainApiV1DexTraceSwapVolumesListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1DexTraceSwapVolumesListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1DexTraceSwapConsistentList */
export interface PostMainApiV1DexTraceSwapConsistentListOption {
  /** @description */
  body: {
    /**
        @description */
    SmartMoneySwapRecordListRequest: SmartMoneySwapRecordListRequest;
  };
}

/** @description response type for postMainApiV1DexTraceSwapConsistentList */
export interface PostMainApiV1DexTraceSwapConsistentListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: SmartMoneySwapRecordListResponse;
  };
}

export type PostMainApiV1DexTraceSwapConsistentListResponseSuccess =
  PostMainApiV1DexTraceSwapConsistentListResponse[200];
/**
 * @description
 *   获取SmartMoney Consistent Swap列表
 * @tags Dex Track接口
 * @produces application/json
 */
export const postMainApiV1DexTraceSwapConsistentList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/dex/trace/swap/consistent/list";
  function request(
    option: PostMainApiV1DexTraceSwapConsistentListOption
  ): Promise<PostMainApiV1DexTraceSwapConsistentListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1DexTraceSwapConsistentListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1TokenPriceHistoryList */
export interface PostMainApiV1TokenPriceHistoryListOption {
  /** @description */
  body: {
    /**
        @description */
    TokenPriceHistoryListRequest: TokenPriceHistoryListRequest;
  };
}

/** @description response type for postMainApiV1TokenPriceHistoryList */
export interface PostMainApiV1TokenPriceHistoryListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: TokenPriceHistoryListResponse;
  };
}

export type PostMainApiV1TokenPriceHistoryListResponseSuccess =
  PostMainApiV1TokenPriceHistoryListResponse[200];
/**
 * @description
 *   获取token历史列表
 * @tags token历史价格
 * @produces application/json
 */
export const postMainApiV1TokenPriceHistoryList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/token/price/history/list";
  function request(
    option: PostMainApiV1TokenPriceHistoryListOption
  ): Promise<PostMainApiV1TokenPriceHistoryListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1TokenPriceHistoryListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1WalletBalanceTotalList */
export interface PostMainApiV1WalletBalanceTotalListOption {
  /** @description */
  body: {
    /**
        @description */
    WalletAddressBalanceHistoryListRequest: WalletAddressBalanceHistoryListRequest;
  };
}

/** @description response type for postMainApiV1WalletBalanceTotalList */
export interface PostMainApiV1WalletBalanceTotalListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WalletAddressBalanceHistoryListResponse;
  };
}

export type PostMainApiV1WalletBalanceTotalListResponseSuccess =
  PostMainApiV1WalletBalanceTotalListResponse[200];
/**
 * @description
 *   获取地址总资产历史
 * @tags Wallet Balance接口
 * @produces application/json
 */
export const postMainApiV1WalletBalanceTotalList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/wallet/balance/total/list";
  function request(
    option: PostMainApiV1WalletBalanceTotalListOption
  ): Promise<PostMainApiV1WalletBalanceTotalListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1WalletBalanceTotalListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1WalletBalanceTokenList */
export interface PostMainApiV1WalletBalanceTokenListOption {
  /** @description */
  body: {
    /**
        @description */
    WalletAddressBalanceListRequest: WalletAddressBalanceListRequest;
  };
}

/** @description response type for postMainApiV1WalletBalanceTokenList */
export interface PostMainApiV1WalletBalanceTokenListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WalletAddressBalanceListResponse;
  };
}

export type PostMainApiV1WalletBalanceTokenListResponseSuccess =
  PostMainApiV1WalletBalanceTokenListResponse[200];
/**
 * @description
 *   获取地址单个代币持仓历史
 * @tags Wallet Balance接口
 * @produces application/json
 */
export const postMainApiV1WalletBalanceTokenList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/wallet/balance/token/list";
  function request(
    option: PostMainApiV1WalletBalanceTokenListOption
  ): Promise<PostMainApiV1WalletBalanceTokenListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1WalletBalanceTokenListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1WalletBalanceList */
export interface PostMainApiV1WalletBalanceListOption {
  /** @description */
  body: {
    /**
        @description */
    WalletAddressBalanceListRequest: WalletAddressBalanceListRequest;
  };
}

/** @description response type for postMainApiV1WalletBalanceList */
export interface PostMainApiV1WalletBalanceListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WalletAddressBalanceListResponse;
  };
}

export type PostMainApiV1WalletBalanceListResponseSuccess =
  PostMainApiV1WalletBalanceListResponse[200];
/**
 * @description
 *   获取地址资产列表
 * @tags Wallet Balance接口
 * @produces application/json
 */
export const postMainApiV1WalletBalanceList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/wallet/balance/list";
  function request(
    option: PostMainApiV1WalletBalanceListOption
  ): Promise<PostMainApiV1WalletBalanceListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1WalletBalanceListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1WalletBalanceTokenFlow */
export interface PostMainApiV1WalletBalanceTokenFlowOption {
  /** @description */
  body: {
    /**
        @description */
    WalletAddressFlowListRequest: WalletAddressFlowListRequest;
  };
}

/** @description response type for postMainApiV1WalletBalanceTokenFlow */
export interface PostMainApiV1WalletBalanceTokenFlowResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WalletAddressFlowListResponse;
  };
}

export type PostMainApiV1WalletBalanceTokenFlowResponseSuccess =
  PostMainApiV1WalletBalanceTokenFlowResponse[200];
/**
 * @description
 *   获取地址token flow记录
 * @tags Wallet Balance接口
 * @produces application/json
 */
export const postMainApiV1WalletBalanceTokenFlow = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/wallet/balance/token/flow";
  function request(
    option: PostMainApiV1WalletBalanceTokenFlowOption
  ): Promise<PostMainApiV1WalletBalanceTokenFlowResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1WalletBalanceTokenFlowResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1WalletBalanceProfitList */
export interface PostMainApiV1WalletBalanceProfitListOption {
  /** @description */
  body: {
    /**
        @description */
    WalletAddressTokenProfitListRequest: WalletAddressTokenProfitListRequest;
  };
}

/** @description response type for postMainApiV1WalletBalanceProfitList */
export interface PostMainApiV1WalletBalanceProfitListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WalletAddressTokenProfitListResponse;
  };
}

export type PostMainApiV1WalletBalanceProfitListResponseSuccess =
  PostMainApiV1WalletBalanceProfitListResponse[200];
/**
 * @description
 *   获取地址盈利列表
 * @tags Wallet Balance接口
 * @produces application/json
 */
export const postMainApiV1WalletBalanceProfitList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/wallet/balance/profit/list";
  function request(
    option: PostMainApiV1WalletBalanceProfitListOption
  ): Promise<PostMainApiV1WalletBalanceProfitListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1WalletBalanceProfitListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1WalletBalanceProfitTotal */
export interface PostMainApiV1WalletBalanceProfitTotalOption {
  /** @description */
  body: {
    /**
        @description */
    WalletAddressProfitDetailRequest: WalletAddressProfitDetailRequest;
  };
}

/** @description response type for postMainApiV1WalletBalanceProfitTotal */
export interface PostMainApiV1WalletBalanceProfitTotalResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WalletAddressProfitItem;
  };
}

export type PostMainApiV1WalletBalanceProfitTotalResponseSuccess =
  PostMainApiV1WalletBalanceProfitTotalResponse[200];
/**
 * @description
 *   获取地址总盈利
 * @tags Wallet Balance接口
 * @produces application/json
 */
export const postMainApiV1WalletBalanceProfitTotal = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/wallet/balance/profit/total";
  function request(
    option: PostMainApiV1WalletBalanceProfitTotalOption
  ): Promise<PostMainApiV1WalletBalanceProfitTotalResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1WalletBalanceProfitTotalResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1WalletBalanceTransactionsList */
export interface PostMainApiV1WalletBalanceTransactionsListOption {
  /** @description */
  body: {
    /**
        @description */
    WalletAddressTransactionListRequest: WalletAddressTransactionListRequest;
  };
}

/** @description response type for postMainApiV1WalletBalanceTransactionsList */
export interface PostMainApiV1WalletBalanceTransactionsListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WalletAddressTransactionListResponse;
  };
}

export type PostMainApiV1WalletBalanceTransactionsListResponseSuccess =
  PostMainApiV1WalletBalanceTransactionsListResponse[200];
/**
 * @description
 *   获取交易记录
 * @tags Wallet Balance接口
 * @produces application/json
 */
export const postMainApiV1WalletBalanceTransactionsList =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/main/api/v1/wallet/balance/transactions/list";
    function request(
      option: PostMainApiV1WalletBalanceTransactionsListOption
    ): Promise<PostMainApiV1WalletBalanceTransactionsListResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostMainApiV1WalletBalanceTransactionsListResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postMainApiV1WalletAddressList */
export interface PostMainApiV1WalletAddressListOption {
  /** @description */
  body: {
    /**
        @description */
    WalletAddressListRequest: WalletAddressListRequest;
  };
}

/** @description response type for postMainApiV1WalletAddressList */
export interface PostMainApiV1WalletAddressListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WalletAddressListResponse;
  };
}

export type PostMainApiV1WalletAddressListResponseSuccess =
  PostMainApiV1WalletAddressListResponse[200];
/**
 * @description
 *   获取钱包地址列表
 * @tags 钱包地址管理
 * @produces application/json
 */
export const postMainApiV1WalletAddressList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/wallet/address/list";
  function request(
    option: PostMainApiV1WalletAddressListOption
  ): Promise<PostMainApiV1WalletAddressListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1WalletAddressListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1WalletAddressDetail */
export interface PostMainApiV1WalletAddressDetailOption {
  /** @description */
  body: {
    /**
        @description */
    WalletAddressDetailRequest: WalletAddressDetailRequest;
  };
}

/** @description response type for postMainApiV1WalletAddressDetail */
export interface PostMainApiV1WalletAddressDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WalletAddressDetailResponse;
  };
}

export type PostMainApiV1WalletAddressDetailResponseSuccess =
  PostMainApiV1WalletAddressDetailResponse[200];
/**
 * @description
 *   获取钱包地址详情
 * @tags 钱包地址管理
 * @produces application/json
 */
export const postMainApiV1WalletAddressDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/wallet/address/detail";
  function request(
    option: PostMainApiV1WalletAddressDetailOption
  ): Promise<PostMainApiV1WalletAddressDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1WalletAddressDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1TokenPriceList */
export interface PostMainApiV1TokenPriceListOption {
  /** @description */
  body: {
    /**
        @description */
    TokenPriceListRequest: TokenPriceListRequest;
  };
}

/** @description response type for postMainApiV1TokenPriceList */
export interface PostMainApiV1TokenPriceListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: TokenPriceListResponse;
  };
}

export type PostMainApiV1TokenPriceListResponseSuccess =
  PostMainApiV1TokenPriceListResponse[200];
/**
 * @description
 *   获取token价格列表
 * @tags token价格管理
 * @produces application/json
 */
export const postMainApiV1TokenPriceList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/token/price/list";
  function request(
    option: PostMainApiV1TokenPriceListOption
  ): Promise<PostMainApiV1TokenPriceListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1TokenPriceListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postMainApiV1TokenPriceDetail */
export interface PostMainApiV1TokenPriceDetailOption {
  /** @description */
  body: {
    /**
        @description */
    TokenPriceDetailRequest: TokenPriceDetailRequest;
  };
}

/** @description response type for postMainApiV1TokenPriceDetail */
export interface PostMainApiV1TokenPriceDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: TokenPriceDetailResponse;
  };
}

export type PostMainApiV1TokenPriceDetailResponseSuccess =
  PostMainApiV1TokenPriceDetailResponse[200];
/**
 * @description
 *   获取token价格详情
 * @tags token价格管理
 * @produces application/json
 */
export const postMainApiV1TokenPriceDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/main/api/v1/token/price/detail";
  function request(
    option: PostMainApiV1TokenPriceDetailOption
  ): Promise<PostMainApiV1TokenPriceDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostMainApiV1TokenPriceDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();
