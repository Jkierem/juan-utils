import { equals, curryN } from 'ramda'
import { extract, callPropOrFalse } from '../utils'

const Just = x => ({
    match(cases){ return cases["Just"](x) },
    get(){ return x },
    map(f){ return Just(f(x)) },
    chain(f){ return f(x) },
    equals(b){ return b && callPropOrFalse("isJust",b) && equals(x,b.get()) },
    onNone(f){ return x },
    isJust(){ return true },
    isNone(){ return false }
})

const _None = {
    match(cases){ return cases["None"]() },
    get(){ return undefined },
    map(){ return this },
    chain(f){ return f() },
    equals(b){ return b && callPropOrFalse("isNone",b) },
    onNone(f){ return extract(f) },
    isJust(){ return false },
    isNone(){ return true }
}

const Maybe = {
    Just,
    None: () => _None,
    fromFalsy: x => x ? Just(x) : _None,
    fromArray: x => x.length === 0 ? _None : Just(x),
    fromNullish: x => x === null || x === undefined ? _None : Just(x),
    equals: curryN(2,(a,b) => equals(a,b))
}

export default Maybe;