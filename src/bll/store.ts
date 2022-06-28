import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import appReducer from "./app-reducer";

let reducer = combineReducers({
    appReducer:appReducer,
})

export const store = createStore(reducer,applyMiddleware(thunk))

export type StoreType = ReturnType<typeof reducer>
// @ts-ignore
window.store = store;
// export default store;
