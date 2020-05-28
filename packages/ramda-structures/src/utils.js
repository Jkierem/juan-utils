import { ifElse, is, apply, identity, propOr, F, __, toPairs, toLower, curryN, compose, find, fromPairs, isNil, prop, complement } from 'ramda'

/**
 * @description if the value given is a function, applies it with "data" as arguments and returns the result. Otherwise, it is equal to R.identity
 * @param {any} data arguments for apply
 */
export const extractWith = (data) => (value) => ifElse(
    is(Function), 
    apply(__,data), 
    identity
)(value)

/**
 * @description if the value given is a function, applies it with empty arguments and returns the result. Otherwise, is equal to R.identity
 * @param {any} value value to be extracted
 */
export const extract = (value) => extractWith([])(value)

export const callPropOrFalse = (p,obj) => propOr(F,p,obj)()

const mapKeys = curryN(2,(fn,obj) => fromPairs(toPairs(obj).map(([key, val]) => [ fn(key), val ])))

const getFirstCaseInsensitive = (ps,obj) => {
    const mappedObj = mapKeys(toLower,obj)
    const props = ps.map(toLower)
    return compose(
        prop(__,mappedObj),
        o => find(compose( complement(isNil), prop(__,o)))(props),
    )(mappedObj)
}

export const getCase = (name,obj) => getFirstCaseInsensitive([name,"default","_"],obj)