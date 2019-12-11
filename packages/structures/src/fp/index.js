import { Type } from './type';
import * as _Fantasy_ from './fantasy';
import { omit } from '@juan-utils/functions';

export const Functor = Type("Functor",[],["map"],[]);
export const Filterable = Type("Filterable",[],["filter"],[]);
export const Foldable = Type("Foldable",[],["reduce"],[]);
export const Empty = Type("Empty",[],[],["empty"]);
export const Creator = Type("Creator",[],[],["of"]);
export const Morpheable = Creator.inherit("Morpheable",["morph"],[]);
export const Transmorpheable = Type.combine("debug",[Functor,Morpheable],[]).inherit("debug",["transmorph"]);
export const Container = Creator.inherit("Container",["open","get"],[]);
export const Setoid = Type("Setoid",[],["equals"],["equals"]);
export const Order = Setoid.inherit("Order",["lte"],["lte"]);

export const Fantasy = {
    ...omit("Constants" ,_Fantasy_),
    Names: _Fantasy_.Constants,
}