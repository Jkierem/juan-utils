import { equals } from 'ramda'
import { callPropOrFalse, extractWith, getCase } from '../_internals'

const Success = v => ({
    match: (cases) => extractWith([v])(getCase("success",cases)),
    get: () => v,
    map: f => Success(f(v)),
    chain: f => f(v),
    equals: (b) => b && callPropOrFalse("isSuccess",b) && equals(v, b.get()),
    catch: () => v,
    onFailure: () => v,
    isSuccess: () => true,
    isFailure: () => false,
})

const Failure = e => ({
    match: (cases) => extractWith([e])(getCase("failure",cases)),
    get: () => e,
    map(){ return this },
    chain: f => f(e),
    equals: (b) =>  b && callPropOrFalse("isFailure",b) && equals(e, b.get()),
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
    attempt: f => { 
        try { 
            return Success(f()) 
        } catch(e) { 
            return Failure(e) 
        } 
    },
    fromPromise: async (p) => {
        try {
            const val = await p();
            return Success(val);
        } catch (e) {
            return Failure(e)
        }
    },
    fromResult: r => r.match({ Ok: Success , Err: Failure }),
    fromMaybe: m => m?.match?.({ Just: Success, None: Failure}),
    equals
}

export default Try;