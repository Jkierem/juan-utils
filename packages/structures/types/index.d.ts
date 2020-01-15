import { LinkedList } from "../src/LinkedList";
import { equals } from "@juan-utils/functions";

declare module "@juan-utils/structures" {
    export type Creator<T> = {
        of: (...args:any[]) => T
    }
    export type VectorLike<T> = {
        getValue(index: Number): T;
    }
    interface Identifier {
        __class__ : string
    }

    export interface HomogenousVector<T> extends Identifier {
        x: T;
        y: T;
        z: T;
        scale(scaleFactor: number): HomogenousVector<T>;
        add(vector: VectorLike<T>): HomogenousVector<T>;
        sub(vector: VectorLike<T>): HomogenousVector<T>;
        mult(vector: VectorLike<T>): HomogenousVector<T>;
        mod(): number;
        normalize( factor?: number ): HomogenousVector<T>;
        distance(vector: VectorLike<T>): number;
        toArray(): T[];
        elevate(n: T): HomogenousVector<T>;
        toString(): string;
        getValue(index: number): T;
        reduce<A>(f: (acc: A, value: T) => A, initalValue: A ): A;
        get(): T[];
        open<A>(f: (value: T) => A ): A;
        map<A>(f: (value: T) => A ): HomogenousVector<A>;
        morph<A>(creator: Creator<A>): A;
        transmorph<A,B>( creator: Creator<A>, f: (value: T) => B ): A;
    }
    export interface IHomogenousVector {
        <T>(...data: T[]): HomogenousVector<T>;
        of: <T>(...data: T[]) => HomogenousVector<T>;
        from: <T>( data: T[]) => HomogenousVector<T>;
    }
    export const HomogenousVector: IHomogenousVector;

    export interface Vector<T> extends Identifier {
        x: T;
        y: T;
        z: T;
        scale(scaleFactor: Number): Vector<T>;
        add(vector: VectorLike<T>): Vector<T>;
        sub(vector: VectorLike<T>): Vector<T>;
        mult(vector: VectorLike<T>): Vector<T>;
        mod(): number;
        normalize( factor?: number ): Vector<T>;
        distance(vector: VectorLike<T>): number;
        toArray(): T[];
        elevate(n: T): Vector<T>;
        toString(): string;
        getValue(index: number): T;
        reduce<A>(f: (acc: A, value: T) => A, initalValue: A ): A;
        get(): T[];
        open<A>(f: (value: T) => A ): A;
        map<A>(f: (value: T) => A ): Vector<A>;
        morph<A>(creator: Creator<A>): A;
        transmorph<A,B>( creator: Creator<A>, f: (value: T) => B ): A;
    }
    export interface IVector {
        <T>(...data: T[]): Vector<T>;
        of: <T>(...data: T[]) => Vector<T>;
        from: <T>( data: T[]) => Vector<T>;
    }
    export const Vector: IVector;

    export interface Node<T> {
        data: T;
        next: <A>(next?: Node<A>) => Node<A> | undefined;
        prev: <A>(prev?: Node<A>) => Node<A> | undefined;
        unlink: () => void;
        isEmpty: () => boolean;
    }
    export interface LinkedList<A> extends Identifier {
        head: () => A;
        tail: () => A[];
        append: (data: A) => Node<A>;
        preppend: (data: A) => Node<A>;
        length: () => number;
        isEmpty: () => boolean;
        getValue: (index: number) => A | undefined;
        map: <B>(f: (value: A) => B) => LinkedList<B>;
        filter: (f: (value: A) => boolean) => LinkedList<A>;
        reduce: <B>(f: (acc:B, value:A) => B) => B;
        remove: (index: number) => void;
        toArray: () => A[];
        equals: <B>(l1: LinkedList<B>) => boolean;
        get: () => A[];
    }
    export interface ILinkedList {
        (): LinkedList<any>;
        empty: LinkedList<any>;
        of: <A>(...data: A[]) => LinkedList<A>;
        from: <A>(data: A[]) => LinkedList<A>;
        equals: (l1: LinkedList<any>, l2: LinkedList<any>) => Boolean
    }
    export const LinkedList: ILinkedList;

    export interface Pipeline<A> extends Identifier {
        get: () => A;
        map: <B>(f: (a: A) => B ) => Pipeline<B>;
        morph: <B>(creator: Creator<B>) => B;
        transmorph: <B,C>(creator: Creator<B>, f: (a:A) => C) => B;
    }
    export interface IPipeline {
        <A>(source: () => A): Pipeline<A>;
        of: <A>(...source: A[]) => Pipeline<A>;
        from: <A>(source: A[]) => Pipeline<A>;
    }
    export const Pipeline: IPipeline;

    export interface None extends Identifier {
        isJust: () => boolean;
        isNothing: () => boolean;
        equals: <A>(value: Just<A> | None ) => boolean;
        map: (f: () => any) => None;
        get: () => undefined;
        open: <A>(f: () => A) => A;
    }
    export interface Just<A> extends Identifier {
        isJust: () => boolean;
        isNothing: () => boolean;
        equals: <B>(value: Just<B> | None ) => boolean;
        map: <B>(f: (a: A) => B ) => Just<B> | None;
        get: () => A;
        open: <B>(f: (a: A) => B) => B;
    }
    export interface Maybe {
        <A>(value:A): Just<A> | None;
        empty: None;
        of: <A>() => Just<A> | None;
        from: <A>(value: A) => Just<A> | None;
        fromFalse: <A>(value: A) => Just<A> | None;
        equals: <A,B>(arg1: Just<A> | None, arg2: Just<A> | None) => boolean;
        Just: <A>(value: A) => Just<A>;
        None: () => None; 
    }
    export const Maybe: Maybe;

    export interface StringManipulator extends Identifier {
        forEach: (f:(char: string) => void) => void,
        map: (f: (char: string) => string) => StringManipulator,
        filter: (f: (char: string) => boolean) => StringManipulator,
        reduce: <A>(f: (acc: A, value: string) => A ) => A,
        getValue: (index: number) => string,
        get: () => string,
        open: (f: (char: string) => string) => string,
        morph: <B>(creator: Creator<B>) => B,
        transmorph: <B>(creator: Creator<B>, f: (a: string) => string) => B,
        toString: () => string,
        equals: (str: StringManipulator) => boolean,
        contains: (str: string) => boolean,
    }
    export interface IStringManipulator {
        (value: string): StringManipulator;
        of: (...data: string[]) => StringManipulator;
        from: (data: string[]) => StringManipulator;
        equals: (s1: StringManipulator, s2: StringManipulator) => boolean;
    }
    export const StringManipulator: IStringManipulator;

    //FP

    export type Creator = () => any
    export interface TypeClass {
        id: string
        attributes: string[];
        methods: string[];
        rep: string[];
        test: (creator: Creator) => Boolean;
        is: (creator: Creator) => Boolean;
        extend: (
            id: string, 
            attr: string[], 
            methods: string[], 
            rep: string[]
        ) => TypeClass;
        inherit: (
            id: string,
            methods: string[],
            representative?: string[]
        ) => TypeClass;
    } 

    export interface Type {
        (
            id?: string,
            attributes?: string[],
            methods?: string[], 
            rep?: string[],
            test?: (creator: Creator) => Boolean
        ): TypeClass;
        combine: (is: string, types: TypeClass[]) => TypeClass;
        is: (type: TypeClass, creator: Creator) => Boolean;
    }

    export interface FP {
        Functor: TypeClass;
        Filterable: TypeClass;
        Foldable: TypeClass;
        Empty: TypeClass;
        Creator: TypeClass;
        Appliable: TypeClass;
        Morpheable: TypeClass;
        Transmorpheable: TypeClass;
        Container: TypeClass;
        Setoid: TypeClass;
        Order: TypeClass;
        Fantasy: {
            Setoid: TypeClass;
            Ord: TypeClass;
            Semigroupoid: TypeClass;
            Category: TypeClass;
            Semigroup: TypeClass;
            Monoid: TypeClass;
            Group: TypeClass;
            Filterable: TypeClass;
            Contravariant: TypeClass;
            Functor: TypeClass;
            Apply: TypeClass;
            Applicative: TypeClass;
            Alt: TypeClass;
            Plus: TypeClass;
            Alternative: TypeClass;
            Foldable: TypeClass;
            Traversable: TypeClass;
            Chain: TypeClass;
            ChainRec: TypeClass;
            Monad: TypeClass;
            Extend: TypeClass;
            Comonad: TypeClass;
            Bifunctor: TypeClass;
            Profunctor: TypeClass;
            Names: {
                Equals: "fantasy-land/equals";
                Lte: "fantasy-land/lte";
                Compose: "fantasy-land/compose";
                Id: "fantasy-land/id";
                Concat: "fantasy-land/concat";
                Empty: "fantasy-land/empty";
                Invert: "fantasy-land/invert";
                Filter: "fantasy-land/filter";
                Map: "fantasy-land/map";
                Contramap: "fantasy-land/contramap";
                Ap: "fantasy-land/ap";
                Of: "fantasy-land/of";
                Alt: "fantasy-land/alt";
                Zero: "fantasy-land/zero";
                Reduce: "fantasy-land/reduce";
                Traverse: "fantasy-land/traverse";
                Chain: "fantasy-land/chain";
                ChainRec: "fantasy-land/chainRec";
                Extend: "fantasy-land/extend";
                Extract: "fantasy-land/extract";
                Bimap: "fantasy-land/bimap";
                Promap: "fantasy-land/promap";
            };
        }
    }

    export const fp: FP;
}