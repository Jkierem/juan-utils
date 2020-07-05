import { Structure } from "./types";

export interface Just<T> {
    get(): T;
    open<U>(f: (data: T) => U): U;
    map<U>(f: (data: T) => U ): Maybe<U>;
    isNothing(): false;
    isJust(): true;
}

export interface None {
    get(): undefined;
    open(f: Function): undefined;
    map(f: Function): None;
    isJust(): false;
    isNothing(): true;
}

export type Maybe<T> = Just<T> | None;

const None = (data?: any): None => ({
    get(): undefined { return undefined },
    open(f: Function): undefined { return undefined },
    map(f: Function): None { return this; },
    isJust(): false { return false },
    isNothing(): true { return true },
})

const Just = <T>(data: T): Just<T> => ({
    get(): T { return data },
    open<U>(f: (data: T) => U): U { return f(data) },
    map<U>(f: (data: T) => U ): Maybe<U> { return Construct.of(f(data)) },
    isNothing(): false { return false },
    isJust(): true { return true },
})

interface MaybeStructure {
    fromFalsy: <U>(data: U) => Maybe<U>;
}

type MaybeConstruct = Structure & MaybeStructure

const Construct: MaybeConstruct = {
    of:<U>(data: U): Maybe<U> => {
        if( data === null || data === undefined ){
            return None();
        }
        return Just(data);
    },
    from: <U>(data: U[]): Maybe<U> => {
        return Construct.of(data);
    },
    fromFalsy: <U>(data: U): Maybe<U> => {
        return data ? Just(data) : None();
    }
}

export default Construct;