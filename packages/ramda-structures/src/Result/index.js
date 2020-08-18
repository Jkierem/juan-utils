import { equals } from 'ramda'
import { callPropOrFalse, extractWith, getCase, extract } from '../_internals'
import { match } from '../_tools'

const Ok = (val) => ({
    match: (cases) => extractWith([val])(getCase("ok",cases)),
    get: () => val,
    map: (f) => Ok(f(val)),
    effect(f){ f(x); return this },
    chain: (f) => f(val),
    equals: (b) => b && callPropOrFalse("isOk",b) && equals(val, b.get()),
    onError: () => val,
    isOk: () => true,
    isErr: () => false,
})

const Err = (err) => ({
    match: (cases) => extractWith([err])(getCase("err",cases)),
    get: () => err,
    map(){ return this },
    effect(f){ return this },
    chain: (f) => f(err) ,
    equals: (b) => b && callPropOrFalse("isErr",b) && equals(err, b.get()),
    onError: (f) => extractWith([err])(f) ,
    isOk: () => false ,
    isErr: () => true ,
})

const from =  val => val instanceof Error ? Err(val) : Ok(val)

const Result = {
    Ok,Err,
    from,
    fromError: from,
    fromFalsy: val => val ? Ok(val) : Err(val),
    fromPredicate: (pred,val) => pred(val) ? Ok(val) : Err(val),
    fromTry: t => t?.match?.({ Success: Ok , Failure: Err }),
    fromMaybe: m => m?.match?.({ Just: Ok, None: Err }),
    attempt: f => {
        try {
            return Ok(f())
        } catch(e) {
            return Err(e)
        }
    },
    match,
    equals
}

export default Result;