import { identity, set, lens, path } from "@juan-utils/functions";

export const createTransactional = ({ init, onCommit=identity }) => {
    let stagedChanges = [];
    return {
        set(key,value){
            stagedChanges.push(x => set(lens(key,key),value,x))
            return this;
        },
        get(key){
            return path(key)(init);
        },
        commit(handler){
            const consistent = stagedChanges.reduce((obj,next) => next(obj) , init);
            onCommit(consistent);
            return createTransactional({ init: consistent , onCommit: handler || onCommit });
        },
        rollback(){
            stagedChanges = [];
            return this
        }
    }
}