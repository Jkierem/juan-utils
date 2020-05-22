import { ifElse, is, apply, identity, propOr, F, __ } from 'ramda'

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