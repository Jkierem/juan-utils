import { useState } from '../stateFunctions'
import { identity } from '@juan-utils/functions'

export const createTimeline = ( onEvent = identity ) => {
    const [ next , getTimeline] = useTimeline(onEvent);
    return {
        next,
        getTimeline,
    }
}

export const useTimeline = ( onEvent = identity ) => {
    const [ getPast , setPast ] = useState([])
    const [ getExists , setExists ] = useState(false);
    const [ getPresent , setPresent ] = useState(undefined);

    const next = ( event ) => {
        const newEvent = onEvent( event, getPast() );
        const exists = getExists();
        if( !exists ){
            setPresent(newEvent);
            setExists(true);
        } else {
            setPast([ ...getPast(), getPresent() ]);
            setPresent(newEvent);
        }
    }

    const getTimeline = () => [ ...getPast(), getPresent() ];

    return [ next, getTimeline ]
}