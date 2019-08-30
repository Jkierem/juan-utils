import { curry } from './core'

export const shareConstructor = curry((a, b) => a instanceof b.constructor && b instanceof a.constructor)
export const typeEquals = curry((type,value) => typeof value === type)
export const isInstanceOf = curry((a,b) => b instanceof a);
export const isFunction = typeEquals("function")
export const isObject = typeEquals("object")
export const isArray = isInstanceOf(Array);
export const isNil = (value) => value === undefined || value === null
export const isDefined = (obj) => obj !== undefined && obj !== null
export const isNaN = x => x !== x;

export const asymEquals = curry((obj1, obj2) => keysOf(obj1).map(prop).every(keyOf => keyOf(obj1) === keyOf(obj2)))
export const symEquals = curry((obj1, obj2) => union(keysOf(obj1), keysOf(obj2)).map(prop).every(keyOf => keyOf(obj1) === keyOf(obj2)));
export const shallowEquals = curry((obj1, obj2) => union(keysOf(obj1), keysOf(obj2)).map(prop).every(keyOf => keyOf(obj1) === keyOf(obj2)));
export const equals = curry((a, b) => {
    const typeA = typeof a;
    const typeB = typeof b;
    if (typeA !== typeB) {
        return false
    }
    if (typeA == "object") {
        if (a instanceof Array && b instanceof Array) {
            return inclusiveZip(a, b).every(([x, y]) => equals(x, y))
        } else {
            return shareConstructor(a, b) && shallowEquals(a, b);
        }
    } else {
        return a === b
    }
});
export const multiEquals = (...objs) => zip(objs, tail(objs)).map(x => equals(...x)).every(Boolean)
export const multiShallowEquals = (...objs) => zip(objs, tail(objs)).map(x => shallowEquals(...x)).every(Boolean)