import { curryN } from "ramda";

const _match = (cases,value) => {
    if(typeof(value?.match) === "function"){
        return value.match?.(cases)
    } else {
        return cases?.default?.(value) || cases?._?.(value)
    }
}

export const match = curryN(2,_match)
