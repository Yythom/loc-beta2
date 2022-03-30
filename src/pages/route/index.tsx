// import CacheRoute from "react-router-cache-route";
import CacheRoute from "react-router-cache-route";
import {
    Route,
} from "react-router-dom";
import AddressDetail from "../main/address_detail";
import Dashboard from "../main/dashboard";
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
    {
        text: 'DEX Profit Ranking',
        icon: 'iconshezhi',
        itemKey: 'dashboard',
    },
    {
        text: '',
        icon: '',
        itemKey: 'address',
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
        text: string;
        component: JSX.Element;
    }
} = {
    'dashboard': {
        text: 'DEX Profit Ranking',
        component: <CacheRoute
            path={setPagePath('dashboard')}
            exact
            component={Dashboard}
        />
    },
    'address': {
        text: 'DEX Profit Ranking',
        component: <Route
            path={setPagePath('address')}
            exact
            component={AddressDetail}
        />
    }
}

export {
    setPagePath,
    get_menu_route
}
export default RouteComponentsMap;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       