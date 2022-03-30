import { combineReducers } from '@reduxjs/toolkit'
import global_slice from './global_slice'

/**
 * 合并reducers
 */
const reducers = {
    global_slice,
}

const reducer = combineReducers(reducers)
export default reducer;