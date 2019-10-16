import { useState } from "../stateFunctions";
import { pipe, isFunction, entries } from "@juan-utils/functions";

export const useStore = ( 
    reducer, 
    initialState = {},
    enhancer
) => {
    if( enhancer ){
        return enhancer(useStore)(reducer,initialState)
    }
    const [ getState , setState ] = useState(reducer({},initialState));
    const dispatch = (action) => setState(reducer(action,getState()));
    return [ getState , dispatch ];
}

export const combineReducers = (...reducers) => (action,state) => {
    if( reducers.length === 1 && !isFunction(reducers[0]) ){
        const reducerObject = reducers[0];
        return combineReducers(...entries(reducerObject).map( ([key,reduce]) => {
            return (action,state) => ({ ...state, [key]: reduce(action,state) })
        }))(action, state)
    }
    return pipe(...reducers.map( r => state => r(action,state) ))(state);
}

export const applyMiddleware = (...middleware) => {
    return (create) => (reducer,initialState) => {
        const [get,dispatch] = create(reducer,initialState);
        const store = {
            getState: get,
            dispatch
        }
        const newDispatch = action => {
            const [calledNext , setNext] = useState(false);
            const [locked, setLock ] = useState(false)
            const [getAction , setAction] = useState(action);
            const next = (action) => {
                setNext(true)
                setAction(action);
            };
            middleware.map( (m) => {
                if( !locked() ){
                    m(store)(next)(getAction())
                }
                if(!calledNext()){
                    setLock(true)
                } else {
                    setNext(false)
                }
            })
            if( !locked() ){
                dispatch(getAction())
            }
        }
        return [get, newDispatch]
    }
}