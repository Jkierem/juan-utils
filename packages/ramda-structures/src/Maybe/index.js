import { equals } from 'ramda'
import { extract, getCase, extractWith } from '../_internals'

const Just = x => ({
    match: (cases) => extractWith([x])(getCase("just",cases)),
    get: () => x,
    map: (f) => Just(f(x)),
    chain: (f) => f(x),
    equals: (b) => b?.match?.({ Just: equals(x) , _: () => false }) || false,
    onNone: () => x,
    isJust: () => true,
    isNone: () => false
})

const _None = {
    match: (cases) => extract(getCase("none",cases)),
    get: () => undefined,
    map(){ return this },
    chain: (f) => f(),
    equals: (b) => b?.match?.({ None: () => true, _: () => false }) || false,
    onNone: (f) => extract(f),
    isJust: () => false,
    isNone: () => true
}

const Maybe = {
    Just,
    None: () => _None,
    from: x => x ? Just(x) : _None,
    fromFalsy: x => x ? Just(x) : _None,
    fromArray: x => x.length === 0 ? _None : Just(x),
    fromNullish: x => x === null || x === undefined ? _None : Just(x),
    fromTry: t => t?.match?.({ Success: Just, Failure: () => _None }),
    fromResult: r => r?.match?.({ Ok: Just, Err: () => _None }),
    match: (val,cases) => val?.match?.(cases),
    equals
}

export default Maybe;