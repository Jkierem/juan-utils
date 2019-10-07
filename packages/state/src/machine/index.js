import { eqBy, identity, prop, omit } from '@juan-utils/functions'
import { useState, useObservable } from "../stateFunctions";

const Node = (id,transitions=[],data={}) => ({
    id,
    ...data,
    find(f){
        return transitions.find(f);
    }
})
const Transition = (id,src,dst) => ({ id, src, dst })
compare = eqBy(prop("id"))

export const useMachine = (config) => {
    const {
        states:_states = [],
        initial = 0,
        onChange = identity,
        comparer = Node.compare
    } = config;

    const states = _states.map(info => {
        return Node(
            info.id,
            info.transitions,
            omit([ "id", "transitions" ])(info)
        )
    })
    
    const current = states[initial];

    const [ getCurrent, setCurrent ] = useState({
        init: current,
        onSet: onChange
    });

    const sendEvent = (value) => {
        const t = getCurrent().find(comparer(value));
        if( t !== undefined ){
            setCurrent(t);
        }
    }

    return [
        getCurrent,
        sendEvent,
    ]
}
