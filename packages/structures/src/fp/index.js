import { Type } from './type';
import * as _Fantasy_ from './fantasy';
import { omit, _, prop, identity } from '@juan-utils/functions';

/**
 * map :: Functor a ~> f (a -> b) -> Functor b
 */
export const Functor = Type("Functor",[],["map"],[]);
/**
 * filter :: Filterable a ~> f (a -> Boolean) -> Filterable a
 */
export const Filterable = Type("Filterable",[],["filter"],[]);
/**
 * reduce :: Foldable a ~> f(b -> a -> b) -> b
 */
export const Foldable = Type("Foldable",[],["reduce"],[]);
/**
 * isEmpty :: Empty _ ~> Boolean
 * Empty :: empty :: isEmpty => True
 */
export const Empty = Type("Empty",[],["isEmpty"],[],(c) => Boolean(c["empty"]));
/**
 * of :: a -> Creator a
 */
export const Creator = Type("Creator",[],[],["of"]);
/**
 * from :: Array a -> Appliable Array a
 */
export const Appliable = Creator.inherit("Appliable",[],[],["from"]);
/**
 * morph :: Morpheable a ~> Creator a -> Creator a
 */
export const Morpheable = Creator.inherit("Morpheable",["morph"],[]);
/**
 * transmorph :: Transmorpheable a ~> Creator b -> f (a -> b) -> Creator b
 */
export const Transmorpheable = Type.combine(_,[Functor,Morpheable],[]).inherit("Transmorpheable",["transmorph"]);
/**
 * get :: Container a ~> a
 */
export const Container = Creator.inherit("Container",["get"],[]);
/**
 * open :: Container a ~> f (a -> b) -> b
 */
export const Box = Container.inherit("Box",["open"],[])
/**
 * equals :: Setoid -> Setoid -> Boolean
 * equals :: Setoid ~> Setoid -> Boolean
 */
export const Setoid = Type("Setoid",[],["equals"],["equals"]);
/**
 * lte :: Order -> Order -> Boolean
 * lte :: Order ~> Order -> Boolean
 */
export const Order = Setoid.inherit("Order",["lte"],["lte"]);

export const Fantasy = {
    ...omit("Constants" ,_Fantasy_),
    Names: _Fantasy_.Constants,
}

export const getClass = prop("__class__");
export const matchContainer = (cases,value) => {
    if( !cases._ ){
        cases._ = identity
    }
    if( Container.isInstance(value) ){
        if( cases[getClass(value)]){
            return cases[getClass(value)](value.get());
        } else {
            return cases._(value.get())
        }
    } else {
        return value;
    }
}