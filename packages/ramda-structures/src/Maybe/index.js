import { equals as rEquals, isNil, isEmpty } from 'ramda'
import { extract, getCase, extractWith, setInnerValue, getInnerValue } from '../_internals'
import { match as globalMatch } from '../_tools'

class Maybe {}

class Just extends Maybe {
    constructor(val){
        super();
        setInnerValue(this,val)
    }
    match(cases){ return extractWith([this.get()])(getCase("just",cases)) }
    get(){ return getInnerValue(this) }
    map(f){ return new Just(f(this.get())) }
    effect(f){ 
        f(this.get()); 
        return this 
    }
    chain(f){ return f(this.get()) }
    equals(b){ return b?.match?.({ Just: rEquals(this.get()) , _: () => false }) || false }
    onNone(){ return this.get() }
    isJust(){ return true }
    isNone(){ return false }
    empty(){ return new None }
}

class None extends Maybe {
    constructor(){
        super();
    }
    match(cases){ return extract(getCase("none",cases)) }
    get(){ return undefined }
    map(){ return this }
    effect(){ return this }
    chain(){ return this }
    equals(b){ return b?.match?.({ None: () => true, _: () => false }) || false }
    onNone(f){ return extract(f) }
    isJust(){ return false }
    isNone(){ return true }
    empty(){ return this }
}

const from = x => x ? new Just(x) : new None;

export default {
    Just: (x) => new Just(x),
    None: () => new None,
    from,
    fromFalsy: from,
    fromArray: x => x.length === 0 ? new None : new Just(x),
    fromNullish: x => isNil(x) ? new None : new Just(x),
    fromEmpty: x => isEmpty(x) ? new None : new Just(x),
    fromPredicate: (pred,val) => pred(val) ? new Just(val) : new None,
    fromResult(r){
        return r?.match?.({ 
            Ok: this.Just, 
            Err: this.None
        })
    },
    isEmpty: x => x?.isNone() || false,
    match: globalMatch,
    equals: rEquals
}