import { 
    Structure,
    Extractable, 
    ObjectContainer, 
    Pipeline, 
    Source, 
    Filter,
    Sink,
    SourceContainer,
    FilterContainer,
    SinkContainer
} from "./types";
import { Mapper } from "../functions/types";

interface PipelineStructure {
    fromSources: (srcs: ObjectContainer<Extractable<any>>) => Pipeline
}

type PipelineConstruct = PipelineStructure & Structure

type KeyType = string | number | symbol;

const extract = <A>(v: Extractable<A>): A => v instanceof Function ? v() : v
const mapValues = (f: (a: any, key: KeyType) => any) => (obj: any) => Object.keys(obj).reduce((acc,key) => {
    return {
        ...acc,
        [key]: f(obj[key],key)
    }
}, {})

const createSource = <A>(id: string,f: Extractable<A>): Source<A> => {
    const value = f
    return {
        get id(){ 
            return id 
        },
        get(){
            return extract(value)
        }
    }
}

const createFilter = <A>(id:string, f: (data: any) => A): Filter<A> => {
    const sources: SourceContainer = {};
    return {
        get id(): string{
            return id; 
        },
        get(): A { 
            return f( mapValues(src => src.get())(sources) )
        },
        connect<B>(src: Source<B>): void{ 
            sources[src.id] = src 
        },
        send(): A {
            return this.get()
        }
    }
}

const createSink = <A>(id:string, f: (data: any) => A ): Sink<A> => {
    const sources: SourceContainer = {}
    return {
        get id(){ 
            return id; 
        },
        send(){
            return f( mapValues(src => src.get())(sources) );
        },
        connect<B>(source: Source<B>){
            sources[source.id] = source;
        }
    }
}

const Pipeline = (): Pipeline => {
    const sources: SourceContainer = {}
    const filters: FilterContainer = {}
    const sinks  : SinkContainer   = {}
    const pipes  : FilterContainer = {}
    return {
        addFilter<A>(id:string, f: Mapper<any,A> ){
            const filter = createFilter(id,f);
            filters[id] = filter;
            return filter;
        },
        addSource<A>(id:string, f: Extractable<A>){
            const source = createSource(id,f);
            sources[id] = source;
            return source
        },
        addSink(id: string, f: Mapper<any,void>) {
            const sink = createSink(id,f);
            sinks[id] = sink;
            return sink
        },
        addPipe(sourceId: string, pipeName: string, sinkId: string){
            const src = sources[sourceId] || filters[sourceId];
            const snk = sinks[sinkId] || filters[sinkId];
            const pp = createFilter(pipeName, (data) => data[sourceId]);
            pp.connect(src);
            snk.connect(pp);
            pipes[`${sourceId}|${sinkId}`];
        },
        connect(srcId: string, sinkId: string){
            const src = sources[srcId] || filters[srcId];
            const snk = sinks[sinkId] || filters[sinkId];
            snk.connect(src);
        },
        get(){
            return mapValues(sink => sink.send())(sinks)
        }
    }
}

const Construct: PipelineConstruct = {
    of: Pipeline,
    from: Pipeline,
    fromSources: (srcs: ObjectContainer<Extractable<any>>): Pipeline => {
        const pipe = Pipeline();
        mapValues((data, id: string) => pipe.addSource(id,data))(srcs);
        return pipe;
    }
}

export default Construct;