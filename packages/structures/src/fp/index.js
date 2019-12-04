import { Type } from './type';
import * as _Fantasy_ from './fantasy';

export const Functor = Type([],["map"],[]);
export const Filterable = Type([],["filter"],[]);
export const Foldable = Type([],["reduce"],[]);
export const Empty = Type([],[],["empty"]);
export const Creator = Type([],[],["of"]);
export const Morpheable = Creator.inherit(["morph"],[]);
export const Transmorpheable = Type.combine(Functor,Morpheable).inherit(["transmorph"]);
export const Container = Creator.inherit(["open","get"],[]);
export const Setoid = Type([],["equals"],["equals"]);
export const Order = Setoid.inherit(["lte"],["lte"]);

export const Fantasy = {
    ..._Fantasy_
}