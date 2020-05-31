import { equals } from 'ramda'
import { callPropOrFalse, extractWith, getCase } from '../_internals'

const Ok = (val) => ({
    match: (cases) => extractWith([val])(getCase("ok",cases)),
    get: () => val,
    map: (f) => Ok(f(val)),
    chain: (f) => f(val),
    equals: (b) => b && callPropOrFalse("isOk",b) && equals(val, b.get()),
    onError: () => val,
    isOk: () => true,
    isErr: () => false,
})

const Err = (err) => ({
    match: (cases) =>extractWith([err])(getCase("err",cases)),
    get: () => err,
    map(){ return this },
    chain: (f) => f(err) ,
    equals: (b) => b && callPropOrFalse("isErr",b) && equals(val, b.get()),
    onError: (f) => extractWith(err)(f) ,
    isOk: () => false ,
    isErr: () => true ,
})


const Result = {
    Ok,Err,
    from:  val => val instanceof Error ? Err(val) : Ok(val),
    fromError: val => val instanceof Error ? Err(val) : Ok(val),
    fromFalsy: val => val ? Ok(val) : Err(val),
    fromTry: t => t?.match?.({ Success: Ok , Failure: Err }),
    fromMaybe: m => m?.match?.({ Just: Ok, None: Err }),
    match: (val,cases) => val?.match?.(cases),
    attempt: f => {
        try {
            return Ok(f())
        } catch(e) {
            return Err(e)
        }
    },
    equals
}

export default Result;