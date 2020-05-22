import { equals, curryN } from 'ramda'
import { callPropOrFalse, extractWith } from '../utils'

const Ok = (val) => {
    return {
        match(cases){
            return cases["Ok"](val)
        },
        get(){ return val; },
        map(f){ return Ok(f(val)) },
        chain(f){ return f(val) },
        equals(b){ return b && callPropOrFalse("isOk",b) && equals(val, b.get())},
        onError(f){ return val },
        isOk(){ return true },
        isErr(){ return false },
        concat(...x){ return Ok([val,x].flat())}
    }
}
const Err = (err) => {
    return {
        match(cases){
            return cases["Err"](err)
        },
        get(){ return err; },
        map(f){ return this },
        chain(f){ return f(err) },
        equals(b){ return b && callPropOrFalse("isErr",b) && equals(val, b.get())},
        onError(f){ return extractWith(err)(f) },
        isOk(){ return false },
        isErr(){ return true },
        concat(...e){ return Err([ err, e.map(r => r.get())].flat())}
    }
}

const Result = {
    Ok,Err,
    fromFalsy: val => val ? Ok(val) : Err(val),
    fromError: val => val instanceof Error ? Err(val) : Ok(val),
    fromTry: t => t.match({ Success: Ok , Failure: Err }),
    fromMaybe: m => m.match({ Just: Ok, None: Err }),
    try: f => {
        try {
            return Ok(f())
        } catch(e) {
            return Err(e)
        }
    },
    equals: curryN(2,(a,b) => equals(a,b))
}

export default Result;