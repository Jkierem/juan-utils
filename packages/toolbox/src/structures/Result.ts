import { Structure } from "./types";
import { Mapper } from "../functions/types";

interface Ok<A> {
    map: <B>(f: Mapper<A,B>) => Result<B>;
    get: () => A;
    isOk: () => true;
    isError: () => false;
    onError: (f: Function) => A;
}

interface Err{
    map: <B>(f: Mapper<Error,B>) => Err;
    get: () => Error;
    isOk: () => false;
    isError: () => true;
    onError: <A>(f: (e: Error) => A) => A;
}

const Err = (e: Error): Err => { 
    return {
        map: <B>(f: Mapper<Error,B>) => Err(e),
        get: () => e,
        isOk: () => false,
        isError: () => true,
        onError: <A>(f: (e: Error) => A) => f(e),
    } 
}

const Ok = <A>(value: A): Result<A> => { 
    return {
        map: <B>(f: Mapper<A,B>): Result<B> => Construct.fromError(f(value)),
        get: () => value,
        isOk: () => true,
        isError: () => false,
        onError: (f: Function) => value,
    } 
}

type Result<A> = Ok<A> | Err;
interface ResultStructure {
    fromError: <A>(data: A) => Result<A>;
}
type ResultConstruct = ResultStructure & Structure;

const factory = <A>(data: A): Result<A> => data instanceof Error ? Err(data) : Ok(data)

const Construct: ResultConstruct = {
    of: factory,
    from: factory,
    fromError: factory,
}

export default Construct;
