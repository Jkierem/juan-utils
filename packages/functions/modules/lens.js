import { deepClone } from "./object";
import { compose, prop } from "./core";

export const lens = (s , a) => ({
    view: (obj) => deepClone(prop(s,obj)),
    set: (value,obj) => ({
        ...deepClone(obj),
        [a]: value
    })
})

export const view = (l, s) => prop("view",l)(s)
export const set = (l, v, s) => prop("set",l)(v,s)
export const over = (l, f, s) => compose( v => set(l,v,s) , f , view )(l,s)