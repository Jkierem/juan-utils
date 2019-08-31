import { curry, identity } from './core';
import { isNaN, isNil, isFunction } from './types'

export const True = () => true;
export const False = () => false;

export const not = (value) => isFunction(value) ? (...args) => !value(...args) : !value
export const and = curry((a,b) => a && b)
export const or = curry((a,b) => a || b)

export const allPass = (...preds) => (value) => preds.reduce((acc, pred) => acc && pred(value), true)
export const anyPass = (...preds) => (value) => preds.reduce((acc, pred) => acc || pred(value), false)
export const nonePass = (...preds) => not(anyPass(...preds))

export const conditional = (conds) => (...args) => conds.reduce(
    (prev,[cond=True , res=identity]) => prev || (cond(...args) ? res(...args) : prev),
    undefined
);

export const defaultTo = curry((def,value) => anyPass(isNil,isNaN)(value) ? def : value)

export const unless = curry((cond,trans,value) => cond(value) ? value : trans(value));

export const until = (cond) => (trans) => value => cond(value) ? value : until(cond)(trans)(trans(value))

