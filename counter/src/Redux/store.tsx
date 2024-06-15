import { combineReducers, createStore } from 'redux'
import {reducerCounter} from "./reducerCounter";

const rootReducer = combineReducers({
    reducerCounter:reducerCounter,
})

export type appRootType = ReturnType<typeof rootReducer>

let  store = createStore(rootReducer)
export default store
// @ts-ignore
window.store = store