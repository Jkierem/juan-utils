export const placeholder = {
    ["@@juan-utils/type"]: "@@juan-utils/placeholder"
}

export const isPlaceholder = (x) => x["@@juan-utils/type"] === "@@juan-utils/placeholder";

const nextOrPlaceholder = (iterator) => {
    const next = iterator.next()
    return next.done ? placeholder : next.value;
}

const iterator = (arr) => {
    let i = 0;
    return arr[Symbol.iterator]() || {
        next(){
            const value = arr[i++];
            return {
                value,
                done: i > arr.length
            }
        },
    }
}

const consolidate = (prev,next) => {
    const args = [];
    const prevIter = iterator(prev);
    const nextIter = iterator(next);
    let prevNext = prevIter.next();
    while(!prevNext.done){
        const val = isPlaceholder(prevNext.value) ? nextOrPlaceholder(nextIter) : prevNext.value
        args.push(val);
        prevNext = prevIter.next()
    }
    return args
}

export const validateArgs = (...args0) => {
    let holes = 0;
    for( arg of args0 ) {
        holes += isPlaceholder(arg) ? 1 : 0
    }
    return holes === 0 ? args0 : (...args1) => validateArgs(...consolidate(args0,args1))
}

export const arity = (n,f) => {
    switch(n){
        case 0: return ()          => f()
        case 1: return (a)         => f(a)
        case 2: return (a,b)       => f(a,b)
        case 3: return (a,b,c)     => f(a,b,c)
        case 4: return (a,b,c,d)   => f(a,b,c,d)
        case 5: return (a,b,c,d,e) => f(a,b,c,d,e)
    }
}

export const curryN = (n,fn) => {
    const _curried = (...rawArgs) => {
        const args = rawArgs.slice(0,n);
        const validated = validateArgs(...args);
    }
    _curried.decurry = () => fn
}