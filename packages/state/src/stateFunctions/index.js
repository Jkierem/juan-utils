import { isObject, deepClone } from '@juan-utils/functions'

export const createState = (init={}) => {
  let state = isObject(init) ? deepClone(init) : init;
  return {
    getState(){ return deepClone(state) },
    setState: ( obj ) => { 
      const wasObject = isObject(state);
      const willBeObject = isObject(obj);
      state = (!wasObject && willBeObject) ? {} : state ;
      state = willBeObject ? { ...state, ...deepClone(obj) } : obj; 
    }
  }
}

export const useState = (init={}) => {
  let state = isObject(init) ? deepClone(init) : init;
  const getState = () => deepClone(state);
  const setState = ( obj ) => {
      const wasObject = isObject(state);
      const willBeObject = isObject(obj);
      state = (!wasObject && willBeObject) ? {} : state ;
      state = willBeObject ? { ...state, ...deepClone(obj) } : obj; 
  }
  return [ getState , setState ];
}

export const useObservable = (config) => {
  const {
    init = {},
    onSet = identity,
    mapSet = identity,
    onGet = identity,
    mapGet = identity,
  } = config
  let state = isObject(init) ? deepClone(init) : init;
  return {
    getState(){
      onGet(state)
      return mapGet(deepClone(state))
    },
    setState: ( obj ) => {
      const wasObject = isObject(state);
      const willBeObject = isObject(obj);
      onSet(state,obj)
      state = (!wasObject && willBeObject) ? {} : state ;
      state = willBeObject ? { ...state, ...deepClone(obj) } : obj;
      state = mapSet(state);
    }
  }
}