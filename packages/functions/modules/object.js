import { curry, keysOf, pipe, prop } from './core'
import { belongs, filter, reduce } from './array';
import { not } from './logic';
import { isNil } from './types';

export const mapKeys = curry((f,obj) => keysOf(obj).reduce((prev,key) => ({...prev, [f(key)]: obj[key]}),{}));

export const mapValues = curry((f,obj) => keysOf(obj).reduce((prev,key) => ({...prev, [key]: f(obj[key])}),{}));

export const pick = curry((keys, obj) => keys.reduce((prev, next) => ({ ...prev, [next]: obj[next] }), {}))
export const diff = curry((a, b) => filter(not(belongs(b)))(a))
export const omit = curry((keys, obj) => pick(diff(keysOf(obj), keys), obj))
export const strip = obj => reduce((prev,key) => {
    return isNil(obj[key]) ? prev : {...prev , [key]: obj[key]};
},{})(keysOf(obj))

export const entries = obj => pipe( keysOf , map( key => [key , prop(key,obj)]) );
export const fromEntries = entries => reduce( (prev,[key,value]) => ({ ...prev , [key]: value}) ,{})(entries)