declare module "@juan-utils/functions" {
  // Array
  export function length<T>(array: T[]): number;
  export function createArray(...args: any[]): any[];

  type Mapper<A, B> = (a: A, index?: number, array?: A[]) => B;
  export function map<A, B>(f: Mapper<A, B>, data: A[]): B[];
  export function map<A, B>(f: Mapper<A, B>): (data: A[]) => B[];

  type Filter<A> = (a: A, index?: number, array?: A[]) => boolean;
  export function filter<A>(f: Filter<A>, data: A[]): A[];
  export function filter<A>(f: Filter<A>): (data: A[]) => A[];

  type Reducer<A, B> = (a: A, b: B, index?: number, array?: A[]) => A;
  export function reduce<A, B>(f: Reducer<A, B>, init: A): (data: B[]) => A;

  export function isEmpty<T>(arr: T[]): boolean;

  export function belongs<T>(arr: T[], value: any): boolean;
  export function belongs<T>(arr: T[]): (value: any) => boolean;

  type UnaryMapper<A, B> = (a: A) => B;
  export function mapOverUnary<A, B>(f: UnaryMapper<A, B>, data: A[]): B[];
  export function mapOverUnary<A, B>(f: UnaryMapper<A, B>): (data: A[]) => B[];

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
}
