import { curry, prop } from './core'
import { isArray } from './types'

export const length = prop("length");
export const createArray = (...args) => args;
export const map = curry((f,data) => data.map(f))
export const filter = curry((f,data) => data.filter(f));
export const reduce = (f,init) => (data) => data.reduce(f,init);
export const isEmpty = arr => length(arr) === 0

export const head = ([head]) => head
export const tail = ([, ...tail]) => tail
export const reverse = (arr) => arr.reduce((acc, obj) => [obj, ...acc], [])
export const binaryUnion = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);
export const union = (...arrs) => arrs.reduce(binaryUnion)

export const zip = (...arrs) => arrs.some(isEmpty) ? [] : [arrs.map(head), ...zip(...arrs.map(tail))]

export const inclusiveZip = (...arrs) => arrs.every(isEmpty) ? [] : [[...arrs.map(head)], ...inclusiveZip(...arrs.map(tail))]

export const belongs = curry((arr,value) => arr.includes(value))

export const flatten = reduce( (acc,next) => isArray(next) ? [...acc , ...next] : [...acc , next ],[])

export const range = (from,to,step=1) => {
    let cur = from;
    const res = []
    while(cur < to){
        res.push(cur)
        cur += step
    }
    return res
}

export const repeat = curry((n,value) => {
    const res = []
    for( let i = 0 ; i < n ; i++ ){
        res.push(value);
    }
    return res
})