import { equals } from 'ramda'
import { extract, callPropOrFalse, getCase, extractWith } from '../utils'

const Just = x => ({
    match: (cases) => extractWith([x])(getCase("just",cases)),
    get: () => x,
    map: (f) => Just(f(x)),
    chain: (f) => f(x),
    equals: (b) => b && callPropOrFalse("isJust",b) && equals(x,b.get()),
    onNone: () => x,
    isJust: () => true,
    isNone: () => false
})

const _None = {
    match: (cases) => extract(getCase("none",cases)),
    get: () => undefined,
    map(){ return this },
    chain: (f) => f(),
    equals: (b) => b && callPropOrFalse("isNone",b),
    onNone: (f) => extract(f),
    isJust: () => false,
    isNone: () => true
}

const Maybe = {
    Just,
    None: () => _None,
    fromFalsy: x => x ? Just(x) : _None,
    fromArray: x => x.length === 0 ? _None : Just(x),
    fromNullish: x => x === null || x === undefined ? _None : Just(x),
    equals
}

export default Maybe;