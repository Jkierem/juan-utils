import { isObject, deepClone, identity, isArray } from '@juan-utils/functions'

export const useState = ( init = {} ) => {
  let state = isObject(init) ? deepClone(init) : init;
  const evaluateState = x => [ isObject(x) && !isArray(x) , isArray(x) ];

  const getState = () => deepClone(state);
  const setState = ( obj ) => {
      const [wasObject, wasArray] = evaluateState(state)
      const [willBeObject , willBeArray] = evaluateState(obj)
      if( wasObject && willBeObject && !willBeArray && !wasArray){
        state = { ...state , ...deepClone(obj) }
      } else if(willBeArray || willBeObject) {
        state = deepClone(obj);
      } else {
        state = obj
      }
  }
  return [ getState , setState ];
}

export const useObservable = (config) => {
  const {
    init,
    onSet = identity,
    mapSet = identity,
    onGet = identity,
    mapGet = identity,
  } = config

  const [ _get , _set ] = useState(init);

  const get = () => {
    onGet(_get());
    return mapGet(_get());
  }

  const set = (next) => {
    onSet(_get(),next);
    _set(mapSet(next));
  }

  return [ get , set ];
}