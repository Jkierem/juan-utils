declare module "@juan-utils/functions" {
  // Types
  export namespace JS {
    type Map<A, B> = (a: A, index?: number, array?: A[]) => B;
    type Filter<A> = (a: A, index?: number, array?: A[]) => boolean;
    type Reduce<A, B> = (a: A, b: B, index?: number, array?: B[]) => A;
  }

  export type InnerMap<A> = (a: A) => A;
  export type Map<A, B> = (a: A) => B;
  export type Reduce<A, B> = (a: A, b: B) => A;
  export type Predicate<A> = (a: A) => boolean;
  export type Condition = [
    (...args: any[]) => boolean,
    (...args: any[]) => any
  ];
  export interface MathOperation<Parameter = number, Return = number> {
    (a: Parameter, b: Parameter): Return;
    (a: Parameter): (b: Parameter) => Return;
  }
  export type BooleanMathOperation<Parameter = number> = MathOperation<
    Parameter,
    boolean
  >;

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

  // Array

  export function length<T>(array: T[]): number;
  export function createArray(...args: any[]): any[];

  export function map<A, B>(
    f: (a: A, index?: number, array?: A[]) => B,
    data: A[]
  ): B[];
  export function map<A, B>(
    f: (a: A, index?: number, array?: A[]) => B
  ): (data: A[]) => B[];

  export function filter<A>(
    f: (a: A, index?: number, array?: A[]) => boolean,
    data: A[]
  ): A[];
  export function filter<A>(
    f: (a: A, index?: number, array?: A[]) => boolean
  ): (data: A[]) => A[];

  export function reduce<A, B>(
    f: (a: A, b: B, index?: number, array?: B[]) => A,
    init: A
  ): (data: B[]) => A;

  export function isEmpty<T>(arr: T[]): boolean;

  export function belongs<T>(arr: T[], value: any): boolean;
  export function belongs<T>(arr: T[]): (value: any) => boolean;

  export function mapOverUnary<A, B>(f: Map<A, B>, data: A[]): B[];
  export function mapOverUnary<A, B>(f: Map<A, B>): (data: A[]) => B[];

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

  //Core

  export function curry2<A, B, C>(
    f: (a: A, b: B) => C
  ): CurriedBinaryFunction<A, B, C>;

  export function curry3<A, B, C, D>(
    f: (a: A, b: B, c: C) => D
  ): CurriedTernaryFunction<A, B, C, D>;

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

  export function keysOf(obj: object): string[];
  export function memo(f: Function): Function;
  export function memoBy(keyGen: (a: any) => any, f: Function): Function;

  export function pipe(...fns: Function[]): Function;
  export function compose(...fns: Function[]): Function;
  export function log<T>(x: T, logger: (...args: any[]) => void): T;

  export function cardinal<A, B, C>(f: (b: B, a: A) => C, a: A, b: B): C;
  export function cardinal<A, B, C>(f: (b: B, a: A) => C): (a: A, b: B) => C;
  export function cardinal<A, B, C>(
    f: (b: B, a: A) => C
  ): (a: A) => (b: B) => C;
  export function cardinal<A, B, C>(f: (b: B, a: A) => C, a: A): (b: B) => C;

  export function flip(f: Function): (...args: any[]) => any;
  export function call(f: Function): (who: any, ...args: any) => any;
  export function bind(f: Function): (who: any, ...args: any) => any;

  export function apply(f: Function, who: any, args: any[]): any;
  export function apply(f: Function): (who: any, args: any[]) => any;
  export function apply(f: Function): (who: any) => (args: any[]) => any;

  export function take(n: number): (...args: any[]) => any[];
  export function takeOrdinal(n: number): (...args: any[]) => any;
  export function takeFirst(...args: any[]): any;
  export function takeSecond(...args: any[]): any;
  export function takeThird(...args: any[]): any;

  export function callWith(...args: any[]): (f: Function) => any;
  export function applyWith(args: any[]): (f: Function) => any;

  // Logic

  export const True: () => true;
  export const False: () => false;
  export function extract<T>(x: FunctionType<any, T>): T;
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

  export function mapKeys(
    f: (a: string) => string | number,
    obj: object
  ): object;
  export function mapKeys(
    f: (a: string) => string | number
  ): (obj: object) => object;

  export function mapValues(f: (a: any) => any, obj: object): object;
  export function mapKeys(f: (a: any) => any): (obj: object) => object;

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
