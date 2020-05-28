import Maybe from '../Maybe'

describe("Maybe", () => {
    describe("object methods", () => {
        const just42 = Maybe.Just(42)
        const none = Maybe.None()
    
        it("should match", () => {
            expect(just42).toTypeMatch("Just");
            expect(none).toTypeMatch("None");
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
            expect(none.equals(Maybe.None())).toBeTruthy()
        })
    })

    describe("constructors", () => {
        [
            ["fromFalsy"  , "false"       , false    , "none" ],
            ["fromFalsy"  , "undefined"   , undefined, "none" ],
            ["fromFalsy"  , "0"           , 0        , "none" ],
            ["fromFalsy"  , "empty string", ""       , "none" ],
            ["fromFalsy"  , "null"        , null     , "none" ],
            ["fromNullish", "null"        , null     , "none" ],
            ["fromNullish", "undefined"   , undefined, "none" ],
            ["fromArray"  , "empty array" , []       , "none" ],
            ["fromFalsy"  , "true"           , true  , "just" ],
            ["fromArray"  , "non empty array", [ 1 ] , "just" ],
            ["fromNullish", "neither null or undefined", 42 , "just" ]
        ].forEach(([cons,label,val,type]) => {
            it(`${cons} should create a ${type} with ${label}`,() => {
                expect(Maybe[cons](val)).toTypeMatch(type);
            })
        })
    })
})