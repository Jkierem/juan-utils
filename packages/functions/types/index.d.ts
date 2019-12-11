declare module "@juan-utils/functions" {
  // Types
  export namespace JS {
    type Map<A, B> = (a: A, index?: number, array?: A[]) => B;
    type Filter<A> = (a: A, index?: number, array?: A[]) => boolean;
    type Reduce<A, B> = (a: A, b: B, index?: number, array?: B[]) => A;
  }

  export type InnerMap<A> = (a: A) => A;
  export type Map<A, B> = (a: A) => B;
  export type Reducer<A, B> = (a: A, b: B) => A;
  export type Predicate<A> = (a: A) => boolean;
  export type Transducer<A, B> = (reducer: Function) => Reducer<A, B>;
  export type Condition = [
    (...args: any[]) => boolean,
    (...args: any[]) => any
  ];
  export interface MathOperation<Parameter = number, Return = number> {
    (a: Parameter, b: Parameter): Return;
    (a: Parameter): (b: Parameter) => Return;
  }
  export interface Placeholder {
    '@@one/placeholder': boolean;
  }
  export type BooleanMathOperation<Parameter = number> = MathOperation<
    Parameter,
    boolean
  >;

  export type Key = string | number | symbol;

  export interface CurriedBinaryFunction<A, B, C> {
    (a: A): (b: B) => C;
    (a: A, b: B): C;
  }

  export interface CurriedTernaryFunction<A, B, C, D> {
    (a: A): CurriedBinaryFunction<B, C, D>;
    (a: A, b: B): (c: C) => D;
    (a: A, b: B, c: C): D;
  }

  export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  export type Lens = {
    view: (obj: object) => any;
    set: (value: any, obj: object) => object;
  };

  // Array

  export function length<T>(array: T[]): number;
  export function createArray(...args: any[]): any[];

  export function isEmpty<T>(arr: T[]): boolean;

  export function belongs<T>(arr: T[], value: any): boolean;
  export function belongs<T>(arr: T[]): (value: any) => boolean;

  export function map<A, B>(f: Map<A, B>, data: A[]): B[];
  export function map<A, B>(f: Map<A, B>): (data: A[]) => B[];

  export function filter<A>(f: Predicate<A>, data: A[]): A[];
  export function filter<A>(f: Predicate<A>): (data: A[]) => A[];

  export function fold<A, B>(f: Reducer<A, B>): (data: A[]) => B;
  export function fold<A, B>(f: Reducer<A, B>, data: A[]): B;

  export function reduce<A, B>(f: Reducer<A, B>, init: A, data: A[]): B;
  export function reduce<A, B>(f: Reducer<A, B>): (init: A, data: A[]) => B;
  export function reduce<A, B>(f: Reducer<A, B>, init: A): (data: A[]) => B;
  export function reduce<A, B>(f: Reducer<A, B>): (init: A) => (data: A[]) => B;

  export function head<T>(array: T[]): T;
  export function tail<T>(array: T[]): T[];
  export function reverse<T>(array: T[]): T[];
  export function binaryUnion(arr1: any[], arr2: any[]): any[];
  export function binaryUnion(arr1: any[]): (arr2: any[]) => any[];
  export function union(...arrs: any[][]): any[];
  export function difference(a: any[], b: any[]): any[];
  export function difference(a: any[]): (b: any[]) => any[];
  export function zip(...arrs: any[][]): any[];
  export function inclusiveZip(...arrs: any[][]): any[];
  export function flatten(arr: any[]): any[];
  export function range(from: number, to: number, step?: number): number[];
  export function repeat<T>(n: number, value: T): T[];
  export function group<T>(n: number, data: T[]): T[];
  export function pushTo<T>(data: T[]): (value: T) => void;
  export function pushTo<T>(data: T[], value: T): void;
  export function append<T>(data: T[]): (value: T) => T[];
  export function append<T>(data: T[], value: T): T[];

  export function transduce<A, B>(
    transducer: Transducer<A, B>,
    converger: Reducer<A, B>,
    initialValue: A,
    data: B[]
  );

  export function pipeReducers<A, B>(
    ...reducers: Reducer<A, B>[]
  ): Transducer<A, B>;
  export function composeReducers<A, B>(
    ...reducers: Reducer<A, B>[]
  ): Transducer<A, B>;
  export function createTransducer<A, B>(
    ...reducers: Reducer<A, B>[]
  ): Transducer<A, B>;
  export function mapReducer<A, B>(
    f: Map<A, B>
  ): (combine: Reducer<B[], A>) => Reducer<B[], A>;
  export function filterReducer<A>(
    f: Predicate<A>
  ): (combine: Reducer<A[], A>) => A[];

  //Core
  export const _ : Placeholder;

  export function curry2<A, B, C>(
    f: (a: A, b: B) => C
  ): CurriedBinaryFunction<A, B, C>;

  export function curry3<A, B, C, D>(
    f: (a: A, b: B, c: C) => D
  ): CurriedTernaryFunction<A, B, C, D>;

  export function curryN(n: number, f: Function): Function;

  export function partial<A, B>(
    f: (...args: A[]) => B,
    ...args: A[]
  ): (...args: A[]) => B;
  export function identity<T>(a: T): T;
  export function justOf<T>(value: T): () => T;
  export function prop<P extends keyof T, T>(key: P, obj: T): T[P];
  export function prop<P extends keyof T, T>(key: P): (obj: T) => T[P];

  export function propMap<P extends keyof T, T, B>(
    f: Map<T[P], B>,
    key: P,
    obj: T
  ): B;
  export function propMap<P extends keyof T, T, B>(
    f: Map<T[P], B>
  ): (key: P, obj: T) => B;
  export function propMap<P extends keyof T, T, B>(
    f: Map<T[P], B>
  ): (key: P) => (obj: T) => B;
  export function propMap<P extends keyof T, T, B>(
    f: Map<T[P], B>,
    key: P
  ): (obj: T) => B;

  export function propApply<P extends keyof T, T>(
    key: P,
    args: any[],
    obj: T
  ): any;
  export function propApply<P extends keyof T, T>(
    key: P
  ): (args: any[], obj: T) => any;
  export function propApply<P extends keyof T, T>(
    key: P,
    args: any[]
  ): (obj: T) => any;
  export function propApply<P extends keyof T, T>(
    key: P
  ): (args: any[]) => (obj: T) => any;

  export function propCall<T, K extends keyof T>(
    key: K,
    obj: T,
    ...args: any[]
  ): any;

  export function createPathFunction(delimiter: string): typeof path;

  export function path(p: string, obj: object): any;
  export function path(p: string): (obj: object) => any;

  export function keysOf(obj: any): Key[];
  export function memo(f: Function): Function;
  export function memoBy(keyGen: (a: any) => Key, f: Function): Function;
  export function memoBy(keyGen: (a: any) => Key): (f: Function) => Function;

  export function pipe(...fns: Function[]): Function;
  export function compose(...fns: Function[]): Function;

  export function effect(eff: Function, x: any): any;
  export function effect(eff: Function): (x: any) => any;

  export function flip<A>(f: (...args: any[]) => A): (...args: any[]) => A;
  export function reverseArgs<A>(
    f: (...args: any[]) => A
  ): (...args: any[]) => A;

  export function take(n: number): (...args: any[]) => any[];
  export function takeOrdinal(n: number): (...args: any[]) => any;
  export function takeFirst(...args: any[]): any;
  export function takeSecond(...args: any[]): any;
  export function takeThird(...args: any[]): any;

  export function apply(f: (...args: any[]) => any): (args: any[]) => any;
  export function unapply(f: (args: any[]) => any): (...args: any[]) => any;
  export function call<A>(f: (...args: any[]) => A, ...args: any[]): A;
  export function applyWith(args: any[]): (f: Function) => any;
  export function callWith(...args: any[]): (f: Function) => any;

  export function arity(n: number): (f: Function) => (...args: any[]) => any;
  export function nullary<A>(f: (...args: any[]) => A): () => A;
  export function unary<A>(f: (...args: any[]) => A): (a: any) => A;
  export function binary<A>(f: (...args: any[]) => A): (a: any, b: any) => A;
  export function ternary<A>(
    f: (...args: any[]) => A
  ): (a: any, b: any, c: any) => A;

  export function converge(
    converger: Function,
    branches: Function[]
  ): (...inputs: any[]) => any;
  export function diverge(
    diverger: Function,
    branches: Function[]
  ): (...inputs) => any[];

  export function trampoline(f: Function): (...args: any[]) => any;
  export function branch(fns: Function[]): (values: any[]) => any[];

  // Lens

  export function lens(setter: Key, access: Key): Lens;
  export function view(lens: Lens, container: object): any;
  export function set(lens: Lens, value: any, container: object): object;
  export function over(lens: Lens, f: Function, container: object): object;

  // Logic

  export const True: () => true;
  export const False: () => false;
  export function extract<T>(x: Function): T;
  export function extract(x: any): any;
  export function not(value: Function): Function;
  export function not(value: any): any;
  export function and(a: any, b: any): boolean;
  export function and(a: any): (b: any) => boolean;
  export function or(a: any, b: any): boolean;
  export function or(a: any): (b: any) => boolean;

  export function allPass(...preds: Function[]): (value: any) => boolean;
  export function anyPass(...preds: Function[]): (value: any) => boolean;
  export function nonePass(...preds: Function[]): (value: any) => boolean;

  export function conditional(conditions: Condition[]): (...args: any[]) => any;

  export function defaultTo<T, U>(def: T, value: U): T | U;
  export function defaultTo<T, U>(def: T): (value: U) => T | U;

  export function unless<T>(
    cond: (a: T) => boolean,
    trans: (a: T) => T,
    value: T
  ): T;
  export function unless<T>(
    cond: (a: T) => boolean
  ): (trans: (a: T) => T, value: T) => T;
  export function unless<T>(
    cond: (a: T) => boolean
  ): (trans: (a: T) => T) => (value: T) => T;
  export function unless<T>(
    cond: (a: T) => boolean,
    trans: (a: T) => T
  ): (value: T) => T;

  export function until<T>(
    cond: (a: T) => boolean,
    trans: (a: T) => T,
    value: T
  ): T;
  export function until<T>(
    cond: (a: T) => boolean
  ): (trans: (a: T) => T, value: T) => T;
  export function until<T>(
    cond: (a: T) => boolean
  ): (trans: (a: T) => T) => (value: T) => T;
  export function until<T>(
    cond: (a: T) => boolean,
    trans: (a: T) => T
  ): (value: T) => T;

  // Math

  export function add(a: number, b: number): number;
  export function add(a: number): (b: number) => number;

  export function sub(a: number, b: number): number;
  export function sub(a: number): (b: number) => number;

  export function mult(a: number, b: number): number;
  export function mult(a: number): (b: number) => number;

  export function div(a: number, b: number): number;
  export function div(a: number): (b: number) => number;

  export function mod(a: number, b: number): number;
  export function mod(a: number): (b: number) => number;

  export function pow(a: number, b: number): number;
  export function pow(a: number): (b: number) => number;

  export function gte(a: number, b: number): boolean;
  export function gte(a: number): (b: number) => boolean;

  export function gt(a: number, b: number): boolean;
  export function gt(a: number): (b: number) => boolean;

  export function lte(a: number, b: number): boolean;
  export function lte(a: number): (b: number) => boolean;

  export function lt(a: number, b: number): boolean;
  export function lt(a: number): (b: number) => boolean;

  export function eq(a: any, b: any): boolean;
  export function eq(a: any): (b: any) => boolean;

  export function neq(a: any, b: any): boolean;
  export function neq(a: any): (b: any) => boolean;

  export function eqBy<T>(f: (a: T) => boolean, a: T, b: T): boolean;
  export function eqBy<T>(f: (a: T) => any, a: T, b: T): boolean;

  export function min(a: number, b: number): number;
  export function max(a: number, b: number): number;

  export function isEven(a: number): boolean;
  export function isOdd(a: number): boolean;

  export function half(a: number): number;
  export function floor(a: number): number;
  export function ceil(a: number): number;
  export function abs(a: number): number;
  export function inverse(a: number): number;
  export function toDegrees(a: number): number;
  export function toRadians(a: number): number;
  export function inc(a: number): number;
  export function dec(a: number): number;
  export function mean(a: number[]): number;

  export function random(limit: number): number;
  export function integerRandom(limit: number): number;

  // Object

  export function mapKeys(f: (a: Key) => Key, obj: object): object;
  export function mapKeys(f: (a: Key) => Key): (obj: object) => object;

  export function mapValues(f: (a: any) => any, obj: object): object;
  export function mapValues(f: (a: any) => any): (obj: object) => object;

  export function pick<K extends keyof T, T>(keys: K[], obj: T): Pick<T, K>;
  export function pick<K extends keyof T, T>(keys: K[]): (obj: T) => Pick<T, K>;

  export function diff(a: object, b: object): object;
  export function diff(a: object): (b: object) => object;

  export function omit<K extends keyof T, T>(keys: K[], obj: T): Omit<T, K>;
  export function omit<K extends keyof T, T>(keys: K[]): (obj: T) => Omit<T, K>;

  export function strip(obj: object): object;

  export function entries<T, K extends keyof T>(obj: T): [K, T[K]][];
  export function fromEntries<T, K extends keyof T>(entries: [K, T[K]][]): T;

  export function clone(a: object): object;
  export function deepClone(a: object): object;

  // Types

  export function shareConstructor(a: any, b: any): boolean;
  export function shareConstructor(a: any): (b: any) => boolean;

  export function typeEquals(a: any, b: any): boolean;
  export function typeEquals(a: any): (b: any) => boolean;

  export function isInstanceOf(a: any, b: any): boolean;
  export function isInstanceOf(a: any): (b: any) => boolean;

  export function isFunction(a: any): boolean;
  export function isObject(a: any): boolean;
  export function isArray(a: any): boolean;
  export function isNil(a: any): boolean;
  export function isDefined(a: any): boolean;
  export function isNaN(a: any): boolean;

  export function asymEquals(a: any, b: any): boolean;
  export function asymEquals(a: any): (b: any) => boolean;

  export function shallowEquals(a: any, b: any): boolean;
  export function shallowEquals(a: any): (b: any) => boolean;

  export function equals(a: any, b: any): boolean;

  export function multiEquals(...objs: any[]): boolean;
  export function multiShallowEquals(...objs: any[]): boolean;
}
