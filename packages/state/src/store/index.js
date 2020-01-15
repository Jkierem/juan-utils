import { useState } from "../stateFunctions";
import { pipe, isFunction, entries } from "@juan-utils/functions";

const Node = (data) => {
    let next = null;
    let prev = null;
    return {
        call: () => data(),
        next: (other) => {
            if( other == undefined ){
                return next
            } else {
                next = other
            }
        },
        prev: (other) => {
            prev = other
        },
        unlink: () => {
            prev.next(next)
            if( next ){
                next.prev(prev)
            }
            next = null;
            prev = null;
        }
    }
}
const Sublist = () => {
    let head = Node()
    let tail = null
    return {
        append(data){
            const n = Node(data);
            if( tail == null ){
                head.next(n)
                n.prev(head)
                tail = n
            } else {
                tail.next(n)
                n.prev(tail)
                tail = n
            }
            return n
        },
        notify(){
            let cur = head.next()
            while( cur !== null ){
                cur.call()
                cur = cur.next()
            }
        }
    }
}

export const useStore = ( 
    _reducer, 
    initialState = {},
    enhancer
) => {
    let reducer = _reducer
    if( enhancer ){
        return enhancer(useStore)(reducer,initialState)
    }
    const listeners = Sublist()
    const [ getState , setState ] = useState(reducer(initialState,{}));
    const dispatch = (action) => {
        setState(reducer(getState(),action))
        listeners.notify();
    };
    const subscribe = (listener) => {
        const _node = listeners.append(listener);
        return () => _node.unlink()
    }
    const replaceReducer = (newReducer) => {
        reducer = newReducer;
    }
    return [ getState , dispatch , subscribe , replaceReducer ];
}

export const combineReducers = (...reducers) => (state,action) => {
    if( reducers.length === 1 && !isFunction(reducers[0]) ){
        const reducerObject = reducers[0];
        return combineReducers(...entries(reducerObject).map( ([key,reduce]) => {
            return (state,action) => ({ ...state, [key]: reduce(state,action) })
        }))(state,action)
    }
    return pipe(...reducers.map( r => state => r(state,action) ))(state);
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