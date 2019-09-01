//Core
export const curry = (fn, ...oldArgs) => (...newArgs) => {
    const args = [...oldArgs, ...newArgs];
    return (args.length < fn.length) ? curry(fn, ...args) : fn(...args);
};

export const identity = x => x
export const justOf = value => () => value
export const prop = (key) => (obj) => obj ? obj[key] : undefined
export const path = (p, delim = ".") => (obj) => p.split(delim).map(prop).reduce((prev, next) => prev && next(prev), obj)
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
export const memoBy = curry((keyGen , f) => {
    const mem = {};
    return (...args) => {
        const key = keyGen(args);
        if (!(key in mem)) {
            mem[key] = f(...args);
        }
        return mem[key];
    }
})

export const pipe = (hf = identity, ...fs) => (...args) => fs.reduce((arg, next) => next(arg), hf(...args));

export const compose = (...fs) => pipe(...fs.reduce((acc, obj) => [obj, ...acc],[]), identity);

export const log = x => {
    console.log(x);
    return x;
}

export const cardinal = curry((f,a,b) => f(b,a))

export const flip = f => (...args) => f(..._reverse(args));
export const call = (who, ...args) => funk.call(who, ...args)
export const bind = (who, ...args) => funk => funk.bind(who, ...args)
export const apply = (who, args) => funk => funk.apply(who, args);