import { equals, isNil, isEmpty } from 'ramda'
import { extract, getCase, extractWith } from '../_internals'
import { match } from '../_tools'

const Just = x => ({
    match: (cases) => extractWith([x])(getCase("just",cases)),
    get: () => x,
    map: (f) => Just(f(x)),
    effect(f){ f(x); return this },
    chain: (f) => f(x),
    equals: (b) => b?.match?.({ Just: equals(x) , _: () => false }) || false,
    onNone: () => x,
    isJust: () => true,
    isNone: () => false,
    empty: () => _None
})

const _None = {
    match: (cases) => extract(getCase("none",cases)),
    get: () => undefined,
    map(){ return this },
    effect: (f) => None,
    chain: (f) => f(),
    equals: (b) => b?.match?.({ None: () => true, _: () => false }) || false,
    onNone: (f) => extract(f),
    isJust: () => false,
    isNone: () => true,
    empty: () => _None
}

const from =  x => x ? Just(x) : _None

const Maybe = {
    Just,
    None: () => _None,
    from,
    fromFalsy: from,
    fromArray: x => x.length === 0 ? _None : Just(x),
    fromNullish: x => isNil(x) ? _None : Just(x),
    fromEmpty: x => isEmpty(x) ? _None : Just(x),
    fromTry: t => t?.match?.({ Success: Just, Failure: () => _None }),
    fromResult: r => r?.match?.({ Ok: Just, Err: () => _None }),
    isEmpty: x => x?.isNone() || false,
    match,
    equals
}

export default Maybe;