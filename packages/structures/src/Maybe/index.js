import { isNil } from '@juan-utils/functions'

const Maybe = (data) => {
    return {
        isNothing(){
            return isNil(data);
        },
        isJust(){
            return !isNil(data);
        },
        get(){
            return this.isNothing() ? this : data;
        },
        map(f){
            return this.isNothing() ? this : Maybe.of(f(data));
        },
        open(f){
            return this.map(f).get();
        },
        morph(of){
            return of(data);
        },
        transmorph(of,f){
            return this.map(f).morph(of);
        }
    }
}

Maybe.of = Maybe;

export { Maybe }
