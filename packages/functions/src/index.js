//Core
export const identity = x => x
export const justOf = value => () => value
export const prop = (key) => (obj) => obj ? obj[key] : undefined
export const path = (p, delim = ".") => (obj) => p.split(delim).map(prop).reduce((prev, next) => prev && next(prev), obj);
export const keysOf = (obj) => obj ? Object.keys(obj) : []

//Types
export const shareConstructor = (a, b) => a instanceof b.constructor && b instanceof a.constructor
export const typeEquals = (type) => (value) => typeof value === type
export const isFunction = typeEquals("function")
export const isObject = typeEquals("object")
export const isNil = (value) => value === undefined || value === null
export const isDefined = (obj) => obj !== undefined && obj !== null

//Logic
export const not = (value) => isFunction(value) ? (...args) => !value(...args) : !value
export const and = (...preds) => (value) => preds.reduce((acc, pred) => acc && pred(value), true)
export const or = (...preds) => (value) => preds.reduce((acc, pred) => acc || pred(value), false)
export const neither = (...preds) => not(or(...preds))

export const True = justOf(true)
export const False = justOf(false)

export const asymEquals = (obj1, obj2) => keysOf(obj1).every(key => obj1[key] == obj2[key])
export const shallowEquals = (obj1, obj2) => union(keysOf(obj1), keysOf(obj2)).map(prop).every(keyOf => keyOf(obj1) === keyOf(obj2));
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
            return shareConstructor(a, b) && shallowEquals(a, b);
        }
    } else {
        return a === b
    }
};
export const multiEquals = (...objs) => zip(objs, tail(objs)).map(x => equals(...x)).every(Boolean)
export const multiShallowEquals = (...objs) => zip(objs, tail(objs)).map(x => shallowEquals(...x)).every(Boolean)

//Array
export const map = f => data => data.map(f);
export const filter = f => data => data.filter(f);
export const reduce = (f, init) => data => data.reduce(f, init);

export const isEmpty = arr => arr.length == 0
export const head = ([head]) => head
export const tail = ([, ...tail]) => tail
export const reverse = (arr) => arr.reduce((acc, obj) => [obj, ...acc], [])
export const binaryUnion = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);
export const union = (...arrs) => arrs.reduce(binaryUnion)

export const zip = (...arrs) => arrs.some(isEmpty) ? [] : [arrs.map(head), ...zip(...arrs.map(tail))]
export const inclusiveZip = (...arrs) => arrs.every(isEmpty) ? [] : [[...arrs.map(head)], ...inclusiveZip(...arrs.map(tail))]

//Math
export const sum = a => b => b + a;
export const sub = a => b => b - a;
export const mult = a => b => b * a;
export const div = a => b => b / a;
export const mod = a => b => b % a;
export const pow = a => b => b ** a;

//Utils
export const call = (who, ...args) => funk.call(who, ...args)
export const bind = (who, ...args) => funk => funk.bind(who, ...args)
export const apply = (who, args) => funk => funk.apply(who, args);
export const memo = (f) => {
    const mem = {};
    return (...args) => {
        const key = args.join(",");
        if (!(key in mem)) {
            mem[key] = f(...args);
        }
        return mem[key];
    }
}
export const pipe = (hf = identity, ...fs) => (...args) => fs.reduce((arg, next) => next(arg), hf(...args));
export const compose = (...fs) => pipe(...reverse(fs), identity);
