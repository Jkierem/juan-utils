import { curry3, memoBy } from "../core";

declare module "@juan-utils/functions" {
  // Types
  export namespace JS {
    type Map<A, B> = (a: A, index?: number, array?: A[]) => B;
    type Filter<A> = (a: A, index?: number, array?: A[]) => boolean;
    type Reduce<A, B> = (a: A, b: B, index?: number, array?: A[]) => A;
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

  // Array

  export function length<T>(array: T[]): number;
  export function createArray(...args: any[]): any[];

  export function map<A, B>(f: JS.Map<A, B>, data: A[]): B[];
  export function map<A, B>(f: JS.Map<A, B>): (data: A[]) => B[];

  export function filter<A>(f: JS.Filter<A>, data: A[]): A[];
  export function filter<A>(f: JS.Filter<A>): (data: A[]) => A[];

  export function reduce<A, B>(f: JS.Reduce<A, B>, init: A): (data: B[]) => A;

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
  export function prop<P extends keyof T, T>(key: P): (obj: T) => T[P];
  export function prop<P extends keyof T, T>(key: P, obj: T): T[P];

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

  export function True(): true;
  export function False(): false;
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
    cond: Predicate<T>,
    trans: InnerMap<T>,
    value: T
  ): T;
  export function unless<T>(
    cond: Predicate<T>
  ): (trans: InnerMap<T>, value: T) => T;
  export function unless<T>(
    cond: Predicate<T>
  ): (trans: InnerMap<T>) => (value: T) => T;
  export function unless<T>(
    cond: Predicate<T>,
    trans: InnerMap<T>
  ): (value: T) => T;

  export function until<T>(cond: Predicate<T>, trans: InnerMap<T>, value: T): T;
  export function until<T>(
    cond: Predicate<T>
  ): (trans: InnerMap<T>, value: T) => T;
  export function until<T>(
    cond: Predicate<T>
  ): (trans: InnerMap<T>) => (value: T) => T;
  export function until<T>(
    cond: Predicate<T>,
    trans: InnerMap<T>
  ): (value: T) => T;

  // Math

  export type add = MathOperation;
  export type sub = MathOperation;
  export type mult = MathOperation;
  export type div = MathOperation;
  export type mod = MathOperation;
  export type pow = MathOperation;

  export type gte = BooleanMathOperation;
  export type gt = BooleanMathOperation;
  export type lte = BooleanMathOperation;
  export type lt = BooleanMathOperation;

  export type eq = BooleanMathOperation<any>;
  export type neq = BooleanMathOperation<any>;
  export type eqBy = CurriedTernaryFunction<Function, any, any>;

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
}
