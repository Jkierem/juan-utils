import { Maybe } from '../structures/Maybe'
import { prop } from './core';
import { Mapper, Predicate, Reducer } from './types';

interface Mappeable<A> {
    map: <B>(f: Mapper<A,B>) => Mappeable<B>;
}

interface Filterable<A> {
    filter: (f: Predicate<A>) => Filterable<A>;
}

interface Foldable<A> {
    reduce: <B>(f: Reducer<B,A>) => B;
}

type Some<A> = {
    some: (f: Predicate<A>) => boolean;
}

type Every<A> = {
    every: (f: Predicate<A>) => boolean;
}

type Iterable<A> = {
    [Symbol.iterator]: () => Iterator<A>;
}

export const length = (arr: { length: number }): number => arr.length;
export const isEmpty = <A>(arr: Iterable<A>): boolean => arr[Symbol.iterator]().next().done;
export const map = <A,B, Container extends Mappeable<A>>(f: Mapper<A,B>, data: Container): Mappeable<B> => data.map(f);
export const filter = <A>(f: Predicate<A>, data: Filterable<A>): Filterable<A> => data.filter(f);
export const reduce = <A,B>(f: Reducer<B,A>, data: Foldable<A>): B => data.reduce(f);
export const head = <A>([head]: Iterable<A>): A => head;
export const tail = <A>([,...tail]: Iterable<A>): Iterable<A> => tail;
export const every = <A>(f: Predicate<A>, a: Every<A>): boolean => a.every(f);
export const some = <A>(f: Predicate<A>, a: Some<A>): boolean => a.some(f);
export const zip = <A,B>(arr1: Iterable<A>, arr2: Iterable<B>): Iterable<[A,B]> => (isEmpty(arr1) || isEmpty(arr2)) ? [] : [[head(arr1),head(arr2)], ...zip(tail(arr1),tail(arr2))]
