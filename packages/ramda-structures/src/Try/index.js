import { equals, curryN } from 'ramda'
import { callPropOrFalse, extractWith } from '../utils'

const Success = v => ({
    match(cases){
        return cases["Success"](v);
    },
    get: () => v,
    map: f => Success(f(v)),
    chain: f => f(v),
    equals(b){ return b && callPropOrFalse("isSuccess",b) && equals(v, b.get())},
    catch: () => v,
    onFailure: () => v,
    isSuccess: () => true,
    isFailure: () => false,
})

const Failure = e => ({
    match(cases){
        return cases["Failure"](e);
    },
    get: () => e,
    map: f => Failure(f(e)),
    chain: f => f(e),
    equals(b){ return b && callPropOrFalse("isFailure",b) && equals(e, b.get())},
    catch: f => f(e),
    onFailure: f => extractWith(e)(f),
    isSuccess: () => false,
    isFailure: () => true,
})

const Try = {
    from: f => { 
        try { 
            return Success(f()) 
        } catch(e) { 
            return Failure(e) 
        } 
    },
    try: f => { 
        try { 
            return Success(f()) 
        } catch(e) { 
            return Failure(e) 
        } 
    },
    fromResult: r => r.match({ Ok: Success , Err: Failure }),
    equals: curryN(2,(a,b) => equals(a,b))
}

export default Try;