import maybe, { Maybe } from '../structures/Maybe';

export const prop = <K extends keyof T, T>(att:K, obj:T): Maybe<T[K]> => maybe.of(obj[att]);
export interface Curry2<A,B,C> {
    (a: A): (b: B) => C;
    decurry(): (a:A,b:B) => C
} 
export interface Curry3<A,B,C,D> {
    (a: A): (b: B) => (c: C) => D;
    decurry(): (a:A,b:B,c:C) => D;
}
export const curry2 = <A,B,C>(f: (a:A, b:B) => C ): Curry2<A,B,C> => {
    const cf = (a: A) => (b: B) => f(a,b);
    cf.decurry = () => f;
    return cf;
}
export const curry3= <A,B,C,D>(f: (a:A,b:B,c:C) => D): Curry3<A,B,C,D> => {
    const cf = (a: A) => (b: B) => (c: C) => f(a,b,c);
    cf.decurry = () => f;
    return cf;
}

export const call = (x: Function, ...args: any[]) => x(...args);

export interface Decurriable {
    decurry: () => Function;
}
export const decurry = (x: Decurriable) => prop("decurry",x).open(call);