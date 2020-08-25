import { equals as rEquals } from 'ramda'
import { extractWith, getCase, setInnerValue, getInnerValue } from '../_internals'
import { match } from '../_tools'

class Result {}

class Ok extends Result {
    constructor(val){
        super();
        setInnerValue(this,val);
    }
    get(){ 
        return getInnerValue(this) 
    }
    match(cases){
        return extractWith([this.get()])(getCase("ok",cases))
    }
    map(f){ 
        return new Ok(f(this.get()))
    }
    effect(f){ 
        f(this.get()); 
        return this 
    }
    chain(f){
        return f(this.get())
    }
    equals(b){
        return b?.match?.({ 
            Ok: rEquals(this.get()),
            _: () => false
        }) || false
    }
    onError(){ return this.get() }
    isOk(){ return true }
    isErr(){ return false }
}

class Err extends Result {
    constructor(val){
        super();
        setInnerValue(this,val);
    }
    get(){ 
        return getInnerValue(this) 
    }
    match(cases){
        return extractWith([this.get()])(getCase("err",cases))
    }
    map(){ return this }
    effect(){ return this }
    chain(){ return this }
    equals(b){
        return b?.match?.({ 
            Err: rEquals(this.get()),
            _: () => false
        }) || false
    }
    onError(f){ return extractWith([this.get()])(f) }
    isOk(){ return false }
    isErr(){ return true }
}

const from =  val => val instanceof Error ? new Err(val) : new Ok(val)

export default {
    Ok: (x) => new Ok(x),
    Err: (x) => new Err(x),
    from,
    fromError: from,
    fromFalsy: val => val ? new Ok(val) : new Err(val),
    fromPredicate: (pred,val) => pred(val) ? new Ok(val) : new Err(val),
    fromMaybe(m){ 
        return m?.match?.({ 
            Just: this.Ok, 
            None: this.Err 
        }) 
    },
    attempt: f => {
        try {
            return new Ok(f())
        } catch(e) {
            return new Err(e)
        }
    },
    match,
    equals: rEquals
}