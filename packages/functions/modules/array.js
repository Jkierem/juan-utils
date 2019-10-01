import { prop, curry2, takeFirst, compose } from './core'
import { isArray } from './types'
import { not } from './logic'

export const length = prop("length");
export const createArray = (...args) => args;
export const map = curry2((f, data) => data.map(f))
export const filter = curry2((f, data) => data.filter(f))
export const reduce = (f, init) => (data) => init ? data.reduce(f, init) : data.reduce(f)
export const isEmpty = arr => length(arr) === 0
export const belongs = curry2((arr, value) => arr.includes(value))
export const mapOverUnary = curry2((f,data) => map(compose( f, takeFirst ), data))

export const head = ([head]) => head
export const tail = ([, ...tail]) => tail
export const reverse = (arr) => arr.reduce((acc, obj) => [obj, ...acc], [])
export const binaryUnion = curry2((arr1, arr2) => [...arr1, ...arr2].reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []));
export const union = (...arrs) => arrs.reduce(binaryUnion)
export const difference = curry2((a, b) => filter(not(belongs(b)))(a))

export const zip = (...arrs) => arrs.some(isEmpty) ? [] : [arrs.map(head), ...zip(...arrs.map(tail))]

export const inclusiveZip = (...arrs) => arrs.every(isEmpty) ? [] : [[...arrs.map(head)], ...inclusiveZip(...arrs.map(tail))]


export const flatten = reduce((acc, next) => isArray(next) ? [...acc, ...next] : [...acc, next], [])

export const range = (from, to, step = 1) => {
    let cur = from;
    const res = []
    while (cur < to) {
        res.push(cur)
        cur += step
    }
    return res
}

/**
 * @typedef {(n:number, value:any) => any[]} repeat
 * @param {number} n time to repeat value
 * @param {any} value value to be repeated
 * @returns {any[]}
 */
export const repeat = (n, value) => {
    const res = []
    for (let i = 0; i < n; i++) {
        res.push(value);
    }
    return res
}