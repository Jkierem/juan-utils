import { eqBy, identity, prop, omit } from '@juan-utils/functions'
import { useObservable } from "../stateFunctions";

export const compare = eqBy(prop("id"))

export const State = (id,transitions=[],data={}) => ({
    id,
    data,
    find(f){
        return transitions.find(f);
    }
})

export const useMachine = (config = {}) => {
    const {
        states:_states = [ { id: 0 } ],
        initial = 0,
        onChange = identity,
        comparer = compare
    } = config;

    const states = _states.map(info => {
        return State(
            info.id,
            info.transitions,
            omit([ "id", "transitions" ])(info)
        )
    })
    
    const current = states[initial];

    const [ getCurrent, setCurrent ] = useObservable({
        init: current,
        onSet: onChange
    });

    const sendEvent = (value) => {
        const t = getCurrent().find(x => comparer({ id: value },x));
        if( t !== undefined ){
            setCurrent(states.find(x => x.id == t.id));
        }
    }

    return [
        getCurrent,
        sendEvent,
    ]
}
