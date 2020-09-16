import { equals as rEquals, isNil, isEmpty } from 'ramda'
import { match as globalMatch } from '../_tools'
import { Union, Functor, Monad, Applicative, Eq, Semigroup, Show, Monoid, Effect, Filterable} from '../Union'

const MaybeDefs = {
    trivials: ["Just"],
    identities: ["None"],
    empties: ["None"],
    pure: "Just",
    cero: "None",
    overrides: {
        show: {
            None(){
                return `[Maybe => None]`
            }
        }
    }
}

const Maybe = Union("Maybe",{
    Just: x => x,
    None: () => {}
},[
    Functor(MaybeDefs),
    Effect(MaybeDefs),
    Eq(MaybeDefs),
    Monad(MaybeDefs),
    Monoid(MaybeDefs),
    Applicative(MaybeDefs),
    Semigroup(MaybeDefs),
    Filterable(MaybeDefs),
    Show(MaybeDefs)
]).constructors({
    from(x){ 
        return  x ? this.Just(x) : this.None() 
    },
    fromFalsy(x){
        return  x ? this.Just(x) : this.None() 
    },
    fromArray(arr){
        return arr.length === 0 ? this.None() : this.Just(arr)
    },
    fromNullish(x){
        return isNil(x) ? this.None() : this.Just(x)
    },
    fromEmpty(x){ 
        return isEmpty(x) ? this.None() : this.Just(x)
    },
    fromPredicate(pred,val){
        return pred(val) ? this.Just(val) : this.None()
    },
    fromResult(r){
        return r?.match?.({ 
            Ok: this.Just, 
            Err: this.None
        })
    },
    isEmpty(x){
        return x?.isNone() || false
    },
    match: globalMatch,
    equals: rEquals
})

export default Maybe