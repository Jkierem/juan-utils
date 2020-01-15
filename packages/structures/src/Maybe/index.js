import { isNil, True, False } from '@juan-utils/functions'

const None = () => {
    return {
        get __class__(){
            return "None"
        },
        isJust: False,
        isNothing: True,
        equals(m1){ 
            return m1.isNothing() 
        },
        map(){
            return None();
        },
        get(){ return undefined },
        open(f){ return f() },
    }
}

const Just = (value) => {
    return {
        get __class__(){
            return "Just"
        },
        isJust: True,
        isNothing: False,
        equals(m1){ 
            if( m1.isNothing() ){
                return false;
            } else {
                return value === m1.get();
            }
        },
        map(f){
            return Maybe(f(value))
        },
        get(){ return value },
        open(f){ return f(value) },
    }
}

const Maybe = (value) => isNil(value) ? Maybe.empty : Just(value)

Maybe.empty = None();
Maybe.of = Maybe;
Maybe.fromFalsy = (data) => data ? Maybe(data) : None();
Maybe.from = Maybe.fromFalsy
Maybe.equals = (m1,m2) => m1.equals(m2);
Maybe.Just = Just;
Maybe.None = None;

export { Maybe }