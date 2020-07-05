export type Mapper<A,B> = (value: A) => B;
export type Predicate<A> = (value: A) => boolean;
export type Reducer<A,B> = (accumulator: A, value: B) => A 