//Core

export const curry2 = f => (a,b) => {
    if( b === undefined ){
        return (b) => f(a,b)
    }
    return f(a,b)
}

export const curry3 = f => (a,b,c) => {
    if( b === undefined && c === undefined ){
        return curry2((b,c) => f(a,b,c))
    } else if( c === undefined ) {
        return (c) => f(a,b,c);
    } else {
        return f(a,b,c)
    }
}

export const identity = x => x
export const justOf = value => () => value
export const prop = curry2((key,obj) => obj ? obj[key] : undefined)
export const path = (p, delim = ".") => (obj) => p.split(delim).map(x => prop(x)).reduce((prev, next) => prev && next(prev), obj)
export const keysOf = (obj) => obj ? Object.keys(obj) : []

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

export const memoBy = (keyGen , f) => {
    const mem = {};
    return (...args) => {
        const key = keyGen(args);
        if (!(key in mem)) {
            mem[key] = f(...args);
        }
        return mem[key];
    }
}

export const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

export const log = (x,logger=console.log) => {
    logger(x);
    return x;
}

export const cardinal = curry3((f,a,b) => f(b,a))

const _reverse =  (x) => x.reduce((acc, obj) => [obj, ...acc], [])
export const flip = f => (...args) => f(..._reverse(args));
export const call = funk => (who, ...args) => funk.call(who, ...args)
export const bind = funk => (who, ...args) => funk.bind(who, ...args)
export const apply = curry3((funk, who, args) => funk.apply(who, args))

export const take = (n) => (...args) => args.slice(0,n)
export const takeOrdinal = (n) => (...args) => prop(n,args)
export const takeFirst  = takeOrdinal(0)
export const takeSecond = takeOrdinal(1)
export const teakeThird = takeOrdinal(2)

export const callWith = (...args) => f => f(...args);
export const applyWith = (args) => f => f(...args);
