import { Type } from './type'
import { _ } from '@juan-utils/functions';

export const Constants = {
    Equals: "fantasy-land/equals",
    Lte: "fantasy-land/lte",
    Compose: "fantasy-land/compose",
    Id: "fantasy-land/id",
    Concat: "fantasy-land/concat",
    Empty: "fantasy-land/empty",
    Invert: "fantasy-land/invert",
    Filter: "fantasy-land/filter",
    Map: "fantasy-land/map",
    Contramap: "fantasy-land/contramap",
    Ap: "fantasy-land/ap",
    Of: "fantasy-land/of",
    Alt: "fantasy-land/alt",
    Zero: "fantasy-land/zero",
    Reduce: "fantasy-land/reduce",
    Traverse: "fantasy-land/traverse",
    Chain: "fantasy-land/chain",
    ChainRec: "fantasy-land/chainRec",
    Extend: "fantasy-land/extend",
    Extract: "fantasy-land/extract",
    Bimap: "fantasy-land/bimap",
    Promap: "fantasy-land/promap",
}

export const Setoid = Type("Setoid",[],[ Constants.Equals ], []);
export const Ord = Setoid.inherit("Ord",[ Constants.Lte ], []);
export const Semigroupoid = Type("Semigroupoid", [], [ Constants.Compose ], []);
export const Category = Semigroupoid.inherit("Category",[], [ Constants.Id ]);
export const Semigroup = Type("Semigroup",[],[ Constants.Concat ], []);
export const Monoid = Semigroup.inherit("Monoid",[],[ Constants.Empty ]);
export const Group = Monoid.inherit("Group",[ Constants.Invert ],[]);
export const Filterable = Type("Filterable",[],[ Constants.Filter ],[]);
export const Contravariant = Type("Contravariant",[],[ Constants.Contramap ],[]);
export const Functor = Type("Functor",[],[ Constants.Map ],[]);
export const Apply = Functor.inherit("Apply",[ Constants.Ap ],[]);
export const Applicative = Apply.inherit("Applicative",[],[ Constants.Of ]);
export const Alt = Functor.inherit("Alt",[ Constants.Alt ],[]);
export const Plus = Alt.inherit("Plus",[],[ Constants.Zero ]);
export const Alternative = Type.combine("Alternative",[Applicative,Plus]);
export const Foldable = Type("Foldable",[],[ Constants.Reduce ],[]);
export const Traversable = Type.combine(_,[Functor,Foldable]).inherit("Traversable",[ Constants.Traverse ],[]);
export const Chain = Apply.inherit("Chain",[ Constants.Chain ],[]);
export const ChainRec = Chain.inherit("ChainRec",[],[ Constants.ChainRec ]);
export const Monad = Type.combine( "Monad" ,[ Applicative , Chain ]);
export const Extend = Functor.inherit("Extend",[ Constants.Extend ],[]);
export const Comonad = Extend.inherit("Comonad",[ Constants.Extract ],[]);
export const Bifunctor = Functor.inherit("Bifunctor",[ Constants.Bimap ],[]);
export const Profunctor = Functor.inherit("Profunctor",[ Constants.Promap ],[]);