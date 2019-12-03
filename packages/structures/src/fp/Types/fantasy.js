import { Type } from "./Type";

const Constants = {
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

export const Setoid = Type([],[ Constants.Equals ], []);
export const Ord = Setoid.inherit([ Constants.Lte ], []);
export const Semigroupoid = Type([], [ Constants.Compose ], []);
export const Category = Semigroupoid.inherit([], [ Constants.Id ]);
export const Semigroup = Type([],[ Constants.Concat ], []);
export const Monoid = Semigroup.inherit([],[ Constants.Empty ]);
export const Group = Monoid.inherit([ Constants.Invert ],[]);
export const Filterable = Type([],[ Constants.Filter ],[]);
export const Contravariant = Type([],[ Constants.Contramap ],[]);
export const Functor = Type([],[ Constants.Map ],[]);
export const Apply = Functor.inherit([ Constants.Ap ],[]);
export const Applicative = Apply.inherit([],[ Constants.Of ]);
export const Alt = Functor.inherit([ Constants.Alt ],[]);
export const Plus = Alt.inherit([],[ Constants.Zero ]);
export const Alternative = Type.combine(Applicative,Plus);
export const Foldable = Type([],[ Constants.Reduce ],[]);
export const Traversable = Type.combine(Functor,Foldable).inherit([ Constants.Traverse ],[]);
export const Chain = Apply.inherit([ Constants.Chain ],[]);
export const ChainRec = Chain.inherit([],[ Constants.ChainRec ]);
export const Monad = Type.combine( Applicative , Chain );
export const Extend = Functor.inherit([ Constants.Extend ],[]);
export const Comonad = Extend.inherit([ Constants.Extract ],[]);
export const Bifunctor = Functor.inherit([ Constants.Bimap ],[]);
export const Profunctor = Functor.inherit([ Constants.Profunctor ],[]);