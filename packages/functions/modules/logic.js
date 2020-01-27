import { curry2 as curry, curry3, identity, isNaN, isNil, isFunction } from './core';

export const True = () => true;
export const False = () => false;

export const extract = x => isFunction(x) ? x() : x

export const not = (value) => isFunction(value) ? ((...args) => !value(...args)) : !value
export const and = curry((a,b) => extract(a) && extract(b));
export const or = curry((a,b) => extract(a) || extract(b))

export const allPass = (...preds) => (value) => preds.reduce((acc, pred) => acc && pred(value), true)
export const anyPass = (...preds) => (value) => preds.reduce((acc, pred) => acc || pred(value), false)
export const nonePass = (...preds) => not(anyPass(...preds))

export const conditional = (conds=[]) => (...args) => [...conds,[True,identity]].reduce(
        (prev,next) => {
            if(!prev.fullfilled){
                const [pred,res] = next;
                if(pred(...args)){
                    return {
                        fullfilled: true,
                        value: res(...args)
                    }
                }
                return prev
            }else{
                return prev
            }
        },
        { fullfilled: false, value: undefined }
    ).value;

export const defaultTo = curry((def,value) => anyPass(isNil,isNaN)(value) ? def : value)

export const unless = curry3((cond,trans,value) => cond(value) ? value : trans(value));

export const until = curry3((cond,trans,value) => cond(value) ? value : until(cond)(trans)(trans(value)))

