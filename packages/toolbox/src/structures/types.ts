import { Mapper } from "../functions/types";

export interface Structure {
    of:(...args: any[]) => any,
    from:(data: any[]) => any
}

interface Identifiable {
    readonly id: string;
}

interface Container<A> {
    get: () => A
}

interface Emitter<A> {
    connect: <B>(src: Container<B>) => void;
    send: () => A;
}

export interface ObjectContainer<A> {
    [x: string]: A;
}

export type Extractable<A> = A | (() => A)

export type Source<A> = Identifiable & Container<A>
export type Sink<A> = Identifiable & Emitter<A>
export type Filter<A> = Source<A> & Sink<A>
export type Pipe<A> = Filter<A>;

export interface SourceContainer<A = any> extends ObjectContainer<Source<A>> {}
export interface FilterContainer<A = any> extends ObjectContainer<Filter<A>> {}
export interface SinkContainer<A = any> extends ObjectContainer<Sink<A>> {}

export interface Pipeline {
    addFilter: <A>(id:string, f: Mapper<any,A> ) => Filter<A>;
    addSource: <A>(id:string, f: Extractable<A>) => Source<A>;
    addSink: (id: string, f: Mapper<any,void>) => Sink<any>;
    addPipe: (srcId: string, pipeName: string, sinkId: string) => void;
    connect: ( sourceId:string, targetId: string) => void;
    get: () => any;
}