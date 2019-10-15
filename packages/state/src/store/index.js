import { useState } from "../stateFunctions";
import { compose, defaultTo } from "@juan-utils/functions";

export const identityMiddleware = s => n => a => n(a,s.getState())
export const identityReducer = (action={}, state={}) => state
export const useStore = ( 
    reducer = identityReducer , 
    initialState = {},
    middleware = identityMiddleware 
) => {
    const [ getState , setState ] = useState(initialState);
    const storeDispatch = (action) => setState(reducer(action,getState()));
    const store = {
        getState,
        dispatch: storeDispatch
    }
    const dispatch = action => setState(middleware(store)(storeDispatch)(action))
    return [ getState , dispatch ];
}

export const combineReducers = (...reducers) => (action,state) => {
    return compose(...reducers.map( r => state => r(action,state) ))(state);
}

export const combineEnhancers = (...enhancers) => store => dispatch => action => {
    const prepared = enhancers
    .map( e => next => e(store)(next))
    .map((e,index,arr) => e(defaultTo(dispatch, arr[index+1])))
    prepared[0](action);
}