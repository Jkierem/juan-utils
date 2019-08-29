import { isNil } from '@juan-utils/functions'

export const Optional = {
    of(data){
        return {
            isEmpty(){
                return isNil(data);
            },
            map(f){
                return Optional.of(f(data));
            },
            get(){
                return data;
            }
        }
    },
    empty(){ 
        return Optional.of(undefined);
    }
}