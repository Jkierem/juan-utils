//Core

export const identity = x => x
export const justOf = value => () => value

const placeholder = { ["@@one/placeholder"]: true };
export const _ = placeholder;

export const curry2 = f => {
    const _curried = (a,b) => {
        if( b === undefined ){
            return (b) => f(a,b)
        }
        return f(a,b)
    }
    _curried.decurry = f;
    return _curried
}

export const curry3 = f => {
    const _curried = (a,b,c) => {
        if( b === undefined && c === undefined ){
            return curry2((b,c) => f(a,b,c))
        } else if( c === undefined ) {
            return (c) => f(a,b,c);
        } else {
            return f(a,b,c)
        }
    }
    _curried.decurry = f;
    return _curried;
}

const _curryN = (n,f,...prev) => {
    const _curried = (...next) => {
        const nArgs = [...prev,...next].length
        if( nArgs >= n ){
            return f(...prev,...next);
        } else {
            return _curryN(n, f, ...prev, ...next);
        }
    }
    _curried.decurry = f;
    return _curried;
}

export const curryN = (n,f) => _curryN(n,f);

export const prop = curry2((key,obj) => obj ? obj[key] : undefined)

export const decurry = prop("decurry");

export const partial = (f,...args1) => {
    const isPlaceholder = prop("@@one/placeholder");
    const coalesce = (prev,next) => {
        let pivot = 0;
        const replaced = prev.map(x => {
            if( isPlaceholder(x) ){
                const rep = next[pivot];
                pivot++;
                return rep;
            }else{
                return x
            }
        })
        return [ ...replaced, ...next.slice(pivot) ];
    }
    return (...args2) => f(...coalesce(args1,args2));
}

export const createPathFunction = (delim) => curry2((p, obj) => p.split(delim).map(x => prop(x)).reduce((prev, next) => prev && next(prev), obj))
export const path = createPathFunction(".");

export const memoBy = curry2((keyGen , f) => {
    const mem = {};
    return (...args) => {
        const key = keyGen(args);
        if (!(key in mem)) {
            mem[key] = f(...args);
        }
        return mem[key];
    }
})

export const memo = memoBy(args => JSON.stringify(args))

export const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

export const effect = curry2((effect,x) => {
    effect(x)
    return x;
})

export const flip = f => (a,b,...rest) => f(b,a,...rest)
export const reverseArgs = f => (...args) => f(...args.reverse());

export const take = (n) => (...args) => args.slice(0,n)
export const takeOrdinal = (n) => (...args) => prop(n,args)
export const takeFirst  = takeOrdinal(0)
export const takeSecond = takeOrdinal(1)
export const takeThird = takeOrdinal(2)

export const apply = f => (args) => f(...args)
export const unapply = f => (...args) => f(args)
export const call = (f,...args) => f(...args)
export const applyWith = (args) => f => f(...args)
export const callWith = (...args) => f => f(...args)

export const propMap = curry3((f,key,obj) => compose( f , prop(key) )(obj))
export const propApply = curry3((key,args,obj) => compose( applyWith(args) , prop(key) )(obj))
export const propCall = (key,obj,...args) => compose( callWith(...args) , prop(key) )(obj)
export const propOf = curry2((obj,key) => prop(key,obj))
export const keysOf = (obj) => obj ? Object.keys(obj) : []
export const valuesOf = (obj) => keysOf(obj).map(propOf(obj))

export const arity = (n) => (f) => {
    const fn = (...args) => f(...args.slice(0,n))
    Object.defineProperty( fn , "length" ,{ value: n });
    return fn;
}
export const nullary = arity(0);
export const unary = arity(1);
export const binary = arity(2);
export const ternary = arity(3);

export const converge = ( f, branches ) => (...inputs) => apply(f)(branches.map(applyWith(inputs)))
export const diverge = ( f, branches ) => (...inputs) => branches.map(callWith(f(...inputs)))

export const trampoline = f => (...args) => {
    let result = f(...args)
    while(typeof result === "function"){
        result = result()
    }
    return result;
}

export const branch = fns => values => fns.map( (f,index) => f(values[index]));

//Type assertions

export const shareConstructor = curry2((a, b) => a instanceof b.constructor && b instanceof a.constructor)
export const typeEquals = curry2((type,value) => typeof value === type)
export const isInstanceOf = curry2((a,b) => b instanceof a);
export const isFunction = typeEquals("function")
export const isObject = typeEquals("object")
export const isArray = isInstanceOf(Array);
export const isNil = (value) => value === undefined || value === null
export const isDefined = (obj) => obj !== undefined && obj !== null
export const isNaN = x => x !== x;