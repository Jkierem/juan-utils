import { union, inclusiveZip, zip, tail } from './array'
import { curry2 as curry, keysOf, prop, takeFirst, compose, shareConstructor } from './core'

export const asymEquals = curry((obj1, obj2) => keysOf(obj1).map(compose(prop , takeFirst)).every(keyOf => keyOf(obj1) === keyOf(obj2)))
export const shallowEquals = curry((obj1, obj2) => union(keysOf(obj1), keysOf(obj2)).map(compose(prop , takeFirst)).every(keyOf => keyOf(obj1) === keyOf(obj2)));
export const equals = (a, b) => {
    const typeA = typeof a;
    const typeB = typeof b;
    if (typeA !== typeB) {
        return false
    }
    if (typeA == "object") {
        if (a instanceof Array && b instanceof Array) {
            return inclusiveZip(a, b).every(([x, y]) => equals(x, y))
        } else {
            return shareConstructor(a, b) && union( keysOf(a) , keysOf(b)).every( key => equals( a[key] , b[key] ) );
        }
    } else {
        return a === b
    }
};
export const multiEquals = (...objs) => zip(objs, tail(objs)).map(x => equals(...x)).every(Boolean)
export const multiShallowEquals = (...objs) => zip(objs, tail(objs)).map(x => shallowEquals(...x)).every(Boolean)