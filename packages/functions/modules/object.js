import { curry2 as curry, keysOf, pipe, prop, compose } from './core'
import { map, reduce, difference } from './array';
import { isNil, isObject, isArray } from './types';

export const mapKeys = curry((f,obj) => keysOf(obj).reduce((prev,key) => ({...prev, [f(key)]: obj[key]}),{}));
export const mapValues = curry((f,obj) => keysOf(obj).reduce((prev,key) => ({...prev, [key]: f(obj[key])}),{}));
export const pick = curry((keys, obj) => keys.reduce((prev, next) => ({ ...prev, [next]: obj[next] }), {}))
export const diff = curry((a,b) => pick(difference(keysOf(a),keysOf(b)))(a))
export const omit = curry((keys, obj) => pick(difference(keysOf(obj), keys), obj))
export const strip = obj => reduce((prev,key) => {
    return isNil(obj[key]) ? prev : {...prev , [key]: obj[key]};
},{})(keysOf(obj))
export const entries = obj => pipe( keysOf , map( key => [key , prop(key,obj)]) )(obj);
export const fromEntries = entries => reduce( (prev,[key,value]) => ({ ...prev , [key]: value}) ,{})(entries)
export const clone = a => ({...a})
export const deepClone = obj => {
    let res = {}
    mapKeys(key => {
        const isAttArray  = compose( isArray , prop(key) )(obj)
        const isAttObject = compose( isObject, prop(key) )(obj)
        if( isAttArray ){
            res[key] = [...obj[key]];
        }else if( isAttObject ){
            res[key] = deepClone(obj[key]);
        }else{
            res[key] = obj[key]
        }
    },obj)
    return res
}