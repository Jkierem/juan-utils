import { justOf, set, lens, view } from "@juan-utils/functions";

export const useImmutable = (value) => {
    const { get, set, toMutable } = createImmutable(value);
    return [
        get, 
        (key,value) => useImmutable(set(key,value).toMutable()), 
        toMutable
    ]
}

export const createImmutable = (obj) => {
    const setter = (obj) => (key,value) => createImmutable(set(lens(key,key),value,obj));
    const getter = (obj) => (key) => view(lens(key,key),obj);
    const _data = { ...obj }
    return {
        set: setter(_data),
        get: getter(_data),
        toMutable: justOf(_data)
    }
}