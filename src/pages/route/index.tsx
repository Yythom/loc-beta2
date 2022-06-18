/* eslint-disable @typescript-eslint/no-unused-vars */
// import CacheRoute from "react-router-cache-route";
import CacheRoute from "react-router-cache-route";
import {
    Route,
} from "react-router-dom";
import DexTrack from "../main/dex_track";
import TokenBalance from "../main/token_balance";
// import AddressDetail from "../main/ranking/address_detail";
// import DexTrack from "../main/dex_track";
// import Ranking from "../main/ranking";
import TokenFlow from "../main/token_flow";
import WalletBalance from "../main/wallet_balance";
// import TokenBalance from "../main/token_balance";
// import WalletBalance from "../main/wallet_balance";
// import TokenAnalysis from "../main/token_analysis";
// import WalletForToken from "../main/wallet_for_token";
export const basePath = '/';

const setPagePath = (_path: string) => {
    return `${basePath}${_path}`
}
export interface RouteItemInterface {
    text: string,
    itemKey: string,
    icon: string,
    items?: {
        text: string,
        itemKey: string,
        icon: string,
    }[]
}

const menu_route: RouteItemInterface[] = [
    // ranking
    // {
    //     text: 'DEX Profit Ranking',
    //     icon: 'iconshezhi',
    //     itemKey: 'ranking',
    // },
    {
        text: '',
        icon: '',
        itemKey: 'address',
    },
    // consistent
    {
        text: 'Dex Track ',
        icon: 'iconshezhi',
        itemKey: 'dex-track',
    },
    {
        text: 'Smart Money',
        icon: 'iconshezhi',
        itemKey: 'Smart-Money',
        items: [
            {
                text: 'Token Flow',
                icon: 'iconshezhi',
                itemKey: 'token-flow',
            },
            {
                text: 'Token Balance',
                icon: 'iconshezhi',
                itemKey: 'token-balance',
            },
        ]
    },
    {
        text: '',
        icon: '',
        itemKey: 'wallet-balance',
    },
    // {
    //     text: 'Token Analysis',
    //     icon: 'iconshezhi',
    //     itemKey: 'token-analysis',
    // },
    // {
    //     text: 'Wallet for Token',
    //     icon: 'iconshezhi',
    //     itemKey: 'wallet-for-token',
    // }
];

// 此处应为请求
const get_menu_route: () => Promise<RouteItemInterface[]> = async () => {
    return new Promise<RouteItemInterface[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(menu_route);
        }, 0);
    })
}

const RouteComponentsMap: {
    [key: string]: {
        text?: string;
        component: JSX.Element;
    }
} = {
    // 'ranking': {
    //     text: 'DEX Profit Ranking',
    //     component: <CacheRoute
    //         className="overview"
    //         path={setPagePath('ranking')}
    //         exact
    //         component={Ranking}
    //     />
    // },
    // 'address': {
    //     text: 'DEX Profit Ranking',
    //     component: <Route
    //         path={setPagePath('address')}
    //         exact
    //         component={AddressDetail}
    //     />
    // },
    'dex-track': {
        component: <Route
            path={setPagePath('dex-track')}
            exact
            component={DexTrack}
        />
    },
    'token-flow': {
        component: <Route
            path={setPagePath('token-flow')}
            exact
            component={TokenFlow}
        />
    },
    'token-balance': {
        component: <Route
            path={setPagePath('token-balance')}
            exact
            component={TokenBalance}
        />
    },
    'wallet-balance': {
        component: <Route
            path={setPagePath('wallet-balance')}
            exact
            component={WalletBalance}
        />
    },
    // 'token-analysis': {
    //     component: <Route
    //         path={setPagePath('token-analysis')}
    //         exact
    //         component={TokenAnalysis}
    //     />
    // },
    // 'wallet-for-token': {
    //     component: <Route
    //         path={setPagePath('wallet-for-token')}
    //         exact
    //         component={WalletForToken}
    //     />
    // }
}

export {
    setPagePath,
    get_menu_route
}
export default RouteComponentsMap;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       