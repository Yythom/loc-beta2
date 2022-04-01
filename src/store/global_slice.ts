import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get_menu_route, RouteItemInterface } from '../pages/route';
type mode = 'light' | 'dark' | string
type lang = 'zh_CN' | 'en_US' | string

export interface GlobalStateInterface {
    mode: mode,
    lang: lang,
    user_route: RouteItemInterface[]
}

const initialState = {
    mode: 'light',
    lang: 'en_US',
    user_route: []
}

const reducers = {
    setMode: (s: GlobalStateInterface, t: any) => {
        s.mode = t.payload;
    },
}

// 登入
const getMenuRouteAsync = createAsyncThunk(
    'global/get_menu_route',
    async (cb?: Function, thunkAPI?: any) => { // data 微信获取到的信息
        let res = await get_menu_route();
        if (res) {
            cb && cb()
            return res
        }
    }
)

/**
 * @param {*} builder 
 * 监听异步完成处理state
 */
const extraReducers = {  // 两种写法
    [`${getMenuRouteAsync.fulfilled}`](state: GlobalStateInterface, action: any) {
        state.user_route = action.payload
    },
}
const Slice = createSlice({
    name: 'global_slice',
    initialState,
    reducers,
    extraReducers,
})

export const actions = {
    ...Slice.actions,
    getMenuRouteAsync,
};
export default Slice.reducer;