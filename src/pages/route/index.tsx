// import CacheRoute from "react-router-cache-route";
import CacheRoute from "react-router-cache-route";
import {
    Route,
} from "react-router-dom";
import AddressDetail from "../main/address_detail";
import DexTrack from "../main/dex_track";
import Ranking from "../main/ranking";
import TokenFlow from "../main/token_flow";
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
    {
        text: 'DEX Profit Ranking',
        icon: 'iconshezhi',
        itemKey: 'ranking',
    },
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
        text: 'Token Flow',
        icon: 'iconshezhi',
        itemKey: 'token-flow',
    },
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
    'ranking': {
        text: 'DEX Profit Ranking',
        component: <CacheRoute
            className="overview"
            path={setPagePath('ranking')}
            exact
            component={Ranking}
        />
    },
    'address': {
        text: 'DEX Profit Ranking',
        component: <Route
            path={setPagePath('address')}
            exact
            component={AddressDetail}
        />
    },

    'dex-track': {
        component: <Route
            path={setPagePath('dex-track')}
            exact
            component={DexTrack}
        />
    },
    'consistent-out-detail': {
        text: 'DEX Profit Ranking',
        component: <Route
            path={setPagePath('address')}
            exact
            component={AddressDetail}
        />
    },

    'token-flow': {
        component: <Route
            path={setPagePath('token-flow')}
            exact
            component={TokenFlow}
        />
    },
}

export {
    setPagePath,
    get_menu_route
}
export default RouteComponentsMap;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       