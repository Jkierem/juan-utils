import { useMachine } from "../machine";
import { useTimeline } from "../timeline";

export const useTimemachine = (config = {}) => {
    const {
        states = [ { id:0 } ],
        initial = 0,
    } = config;

    const [ getTimeline, next ] = useTimeline()
    next(states[initial])
    const [ , sendEvent ] = useMachine({
        ...config,
        onChange: (prev,nextState) => {
            next(nextState)
        }
    })

    return [ getTimeline, sendEvent ];
}