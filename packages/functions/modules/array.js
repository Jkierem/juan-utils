import { prop, curry2, curry3, unary, binary, compose, justOf, pipe } from './core'
import { isArray } from './types'
import { not, conditional, True } from './logic'
import { eq, gt } from './math';

export const length = prop("length");
export const createArray = (...args) => args;
export const head = ([head]) => head
export const tail = ([, ...tail]) => tail
export const isEmpty = arr => length(arr) === 0
export const belongs = curry2((arr, value) => arr.includes(value))
export const map = curry2((f,data) => data.map(unary(f)))
export const filter = curry2((f, data) => data.filter(unary(f)))
export const foldLeft = curry3((f,init,data) => !length(data) ? init : foldLeft(f,f(init,head(data)),tail(data)))
export const foldRight = curry3((f,init,data) => !length(data) ? init : f(foldRight(f,init,tail(data)),head(data)) )
export const reduce = curry3((f, init, data) => data.reduce(binary(f),init)) 
export const transduce = ( transducer , converge , init , data ) => reduce(transducer(converge),init,data)

export const countBy = curry2((f,data) => compose( reduce( (acc,next) => ({
    ...acc,
    [next]: acc[next] ? acc[next] + 1 : 1,
}) , {}) , map(f) )(data))

export const reverse = (arr) => arr.reduce((acc, obj) => [obj, ...acc], [])
export const binaryUnion = curry2((arr1, arr2) => [...arr1, ...arr2].reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []));
export const union = (...arrs) => reduce(binaryUnion,[],arrs);
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

export const repeat = (n, value) => {
    const res = []
    for (let i = 0; i < n; i++) {
        res.push(value);
    }
    return res
}

export const group = (n,data) => conditional([
    [ gt(data.length), justOf([]) ],
    [ eq(data.length), justOf(data) ],
    [ True , () =>  range(0,data.length - (n-1)).map( s => data.slice(s,s + n)) ]
])(n)

export const pushTo = curry2((arr, v) => arr.push(v))
export const append = curry2((arr, v) => [...arr, v])

export const mapReducer = mapper => combine => (acc,next) => combine( acc , mapper(next) );
export const filterReducer = predicate => combine => (acc,next) => predicate(next) ? combine( acc , next ) : acc ;
export const pipeReducers = compose;
export const composeReducers = pipe;
export const createTransducer = pipeReducers;