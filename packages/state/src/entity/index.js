import { useState } from "../stateFunctions";
import { mapValues } from "@juan-utils/functions";

export const useEntity = (initialValue, actions) => {
    const [get, set] = useState(initialValue)
    const wrappedActions = mapValues( action => (...args) => {
        set(action(get(),...args))
    })(actions)
    return [ get , wrappedActions ];
}
