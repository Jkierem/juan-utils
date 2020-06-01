import Maybe from '../Maybe'
import { isEmpty } from 'ramda'

describe("Maybe", () => {
    describe("object methods", () => {
        const just42 = Maybe.Just(42)
        const none = Maybe.None()
    
        it("should match", () => {
            expect(just42).toTypeMatch("Just");
            expect(none).toTypeMatch("None");
            expect(Maybe.match(just42,{ Just: () => true, _ : () => false })).toBeTruthy()
            expect(Maybe.match(none,{ None: () => true, _ : () => false })).toBeTruthy()
            expect(Maybe.match(42,({ Just: () => false, None: () => false, _: x => x }))).toBe(42)
        })

        it("isEmpty should return true if None", () => {
            expect(isEmpty(just42)).toBeFalsy()
            expect(isEmpty(none)).toBeTruthy()
        })
    
        it("should not call map when is none", () => {
            let called = false;
            const fn = () => called = true;
            none.map(fn)
            expect(called).toBeFalsy();
        })
    
        it("should return new object on map", () => {
            const mapped = just42.map(x => x);
            expect(mapped).not.toBe(just42)
            expect(mapped.equals(just42)).toBeTruthy();
        })
    
        it("should handle equality by inner value", () => {
            expect(just42.equals(Maybe.Just(42))).toBeTruthy();
            expect(just42.equals(Maybe.Just(43))).toBeFalsy();
            expect(just42.equals(just42)).toBeTruthy()
            expect(just42.equals(42)).toBeFalsy()
            expect(none.equals(Maybe.None())).toBeTruthy()
            
            expect(Maybe.equals(just42,Maybe.Just(42))).toBeTruthy();
            expect(Maybe.equals(just42,Maybe.Just(43))).toBeFalsy();
            expect(Maybe.equals(just42,just42)).toBeTruthy()
            expect(Maybe.equals(just42,42)).toBeFalsy()
            expect(Maybe.equals(none,Maybe.None())).toBeTruthy()
        })
    })

    describe("constructors", () => {
        [
            ["from"       , "false"       , false    , "none" ],
            ["from"       , "undefined"   , undefined, "none" ],
            ["from"       , "0"           , 0        , "none" ],
            ["from"       , "empty string", ""       , "none" ],
            ["from"       , "null"        , null     , "none" ],
            ["fromFalsy"  , "false"       , false    , "none" ],
            ["fromFalsy"  , "undefined"   , undefined, "none" ],
            ["fromFalsy"  , "0"           , 0        , "none" ],
            ["fromFalsy"  , "empty string", ""       , "none" ],
            ["fromFalsy"  , "null"        , null     , "none" ],
            ["fromNullish", "null"        , null     , "none" ],
            ["fromNullish", "undefined"   , undefined, "none" ],
            ["fromArray"  , "empty array" , []       , "none" ],
            ["fromEmpty"  , "empty object", {}       , "none" ],
            ["fromEmpty"  , "empty string", ""       , "none" ],
            ["fromEmpty"  , "empty array" , []       , "none" ],
            ["fromEmpty"  , "empty of a type", Maybe.None(), "none" ],
            ["from"       , "truthy value"   , true  , "just" ],
            ["fromFalsy"  , "truthy value"   , true  , "just" ],
            ["fromArray"  , "non empty array", [ 1 ] , "just" ],
            ["fromNullish", "neither null or undefined", 42 , "just" ],
            ["fromEmpty"  , "non-empty object",{ a: 42 }, "just" ],
            ["fromEmpty"  , "non-empty array", [ 42 ]   , "just" ],
            ["fromEmpty"  , "something else" , null     , "just" ]
        ].forEach(([cons,label,val,type]) => {
            it(`${cons} should create a ${type} with ${label}`,() => {
                expect(Maybe[cons](val)).toTypeMatch(type);
            })
        })
    })
})