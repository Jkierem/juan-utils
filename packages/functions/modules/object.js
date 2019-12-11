import { curry2, curry3, keysOf, pipe, prop, propOf, compose } from './core'
import { map, reduce, difference } from './array';
import { isNil, isObject, isArray } from './types';

export const mapKeys = curry2((f,obj) => keysOf(obj).reduce((prev,key) => ({...prev, [f(key)]: obj[key]}),{}));
export const mapValues = curry2((f,obj) => keysOf(obj).reduce((prev,key) => ({...prev, [key]: f(obj[key])}),{}));
export const filterKeys = curry2((f,obj) => keysOf(obj).reduce((acc,next) => f(next) ? {...acc, [next]: obj[next]}: acc ,{}))
export const filterValues = curry2((f,obj) => keysOf(obj).reduce((acc,next) => f(obj[next]) ? {...acc, [next]: obj[next]}: acc ,{}))
export const reduceValues = curry3((f,init,obj) => compose(reduce(f,init) , map(propOf(obj)) , keysOf)(obj));

export const pick = curry2((keys, obj) => keys.reduce((prev, next) => ({ ...prev, [next]: obj[next] }), {}))
export const diff = curry2((a,b) => pick(difference(keysOf(a),keysOf(b)))(a))
export const omit = curry2((keys, obj) => pick(difference(keysOf(obj), keys), obj))
export const strip = obj => reduce((prev,key) => {
    return isNil(obj[key]) ? prev : {...prev , [key]: obj[key]};
},{})(keysOf(obj))
export const entries = obj => pipe( keysOf , map( key => [key , prop(key,obj)]) )(obj);
export const fromEntries = entries => reduce( (prev,[key,value]) => ({ ...prev , [key]: value}) ,{})(entries)
export const clone = a => ({...a})
export const deepClone = obj => {
    if( !isObject(obj) ){
        return obj
    } else if (isArray(obj)) {
        return obj.map(x => {
            if( isObject(x) ){
                return deepClone(x)
            } else {
                return x
            }
        });
    } else {
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
}