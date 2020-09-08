declare module "@juan-utils/ramda-structures" {
    
    type Placeholder = import("ramda").Placeholder;

    type MaybeCases = {
        just?: any;
        none?: any;
    }
    export interface None {
        match: (a: MaybeCases) => any;
        get: () => undefined;
        map: (fn: (a: any) => any) => Maybe<any>;
        effect: (fn: (a: any) => any) => Maybe<any>;
        chain: (fn: (a: any) => Maybe<any>) => Maybe<any>;
        apply: (m: Maybe<any>) => Maybe<any>;
        concat: (m: Maybe<any>) => Maybe<any>;
        equals: (b: any) => boolean;
        onNone: (fn: any) => any;
        isJust: () => boolean;
        isNone: () => boolean;
        empty: () => None;
    }
    
    export interface Just<A> {
        match: (a: MaybeCases) => any;
        get: () => A;
        map: <B>(fn: (a:A) => B) => Just<B>;
        effect: (fn: (a: any) => any) => Maybe<A>;
        chain: <B>(fn: (a:A) => Maybe<B>) => Maybe<B>;
        apply: (m: Maybe<any>) => Maybe<any>;
        concat: (m: Maybe<any>) => Maybe<any>;
        equals: (b: any) => boolean;
        onNone: (fn: any) => any;
        isJust: () => boolean;
        isNone: () => boolean;
        empty: () => None;
    }

    export type Maybe<T> = Just<T> | None;
    export const Maybe: {
        Just: <T>(val: T) => Just<T>;
        None: () => None;
        from: <T>(x: T) => Maybe<T>;
        fromFalsy: <T>(x: T) => Maybe<T>;
        fromArray: <T>(x: T[]) => Maybe<T[]>;
        fromNullish: <T>(x: T) => Maybe<T>;
        fromEmpty: <T>(x: T) => Maybe<T>;
        fromPredicate: <A>(pred: (a: A) => boolean, val?: A ) => Maybe<A>;
        fromResult: <T>(r: Result<T,any>) => Maybe<T>;
        isEmpty: <T>(x: Maybe<T>) => boolean;
        match: (...a: readonly any[]) => any;
        equals: {
            <T>(__: Placeholder, b: T): (a: T) => boolean;
            <T>(a: T, b: T): boolean;
            <T>(a: T): (b: T) => boolean;
        }
    };

    export function Just<T>(val: T): Just<T>;
    export function None(): None;

    type ResultCases = {
        ok?: any;
        err?: any;
    };

    export interface Ok<A> {
        match: (cases: ResultCases) => any;
        get: () => A;
        map: <B>(fn: (a:A) => B) => Result<B,any>;
        mapError: (fn: (b:any) => any) => Result<any,any>;
        bimap: (fnOk: (a:any) => any,fnErr: (a:any) => any) => Result<any,any>;
        filter: (fn: (a: any) => boolean) => Result<any,any>;
        fold: (fnErr: (a:any) => any,fnOk: (a:any) => any) => Result<any,any>;
        swap: () => Result<any,any>;
        apply: (r: Result<any,any>) => Result<any,any>;
        effect: (fn: (a: any) => any) => Result<A,any>;
        chain: <B,C>(fn: (a:A) => Result<B,C>) => Result<B,C>;
        equals: (b: any) => boolean;
        onError: (fn: any) => any;
        isOk: () => boolean;
        isErr: () => boolean;
    }

    export interface Err<A> {
        match: (cases: ResultCases) => any;
        get: () => A;
        map: <B>(fn: (a:A) => B) => Result<B,any>;
        mapError: (fn: (b:any) => any) => Result<any,any>;
        bimap: (fnOk: (a:any) => any,fnErr: (a:any) => any) => Result<any,any>;
        filter: (fn: (a: any) => boolean) => Result<any,any>;
        fold: (fnErr: (a:any) => any,fnOk: (a:any) => any) => Result<any,any>;
        swap: () => Result<any,any>;
        apply: (r: Result<any,any>) => Result<any,any>;
        effect: (fn: (a: any) => any) => Result<A,any>;
        chain: <B,C>(fn: (a:A) => Result<B,C>) => Result<B,C>;
        equals: (b: any) => boolean;
        onError: (fn: any) => any;
        isOk: () => boolean;
        isErr: () => boolean;
    }

    export type Result<A,B> = Ok<A> | Err<B>;

    export const Result: {
        Ok: <A>(val: A) => Ok<A>;
        Err: <A>(err: A) => Err<A>;
        from: <A>(val: A) => Result<A,Error>;
        fromError: <A>(val: A) => Result<A,Error>;
        fromFalsy: <A>(val: A) => Result<A,A>;
        fromPredicate: <A>(pred: (a: A) => boolean, val?: A ) => Result<A,A>;
        fromMaybe: <A>(val: Maybe<A>,onNothing: any) => Result<A,undefined>;
        attempt: <A>(fn: (a:any) => A) => Result<A,Error>;
        match: <A,B>(cases: ResultCases) => Result<A,B>;
        equals: {
            <T>(__: Placeholder, b: T): (a: T) => boolean;
            <T>(a: T, b: T): boolean;
            <T>(a: T): (b: T) => boolean;
        };
    }

    export function Ok<T>(val: T): Ok<T>;
    export function Err<T>(err: T): Err<T>;
}