import Try from '../Try'
import Maybe from '../Maybe'
import Result from '../Result'

describe("Try", () => {
    describe("constructors", () => {
        it("should return Success on resolved promise", () => {
            const p = new Promise((resolve) => resolve(42));
            const t = Try.fromAsync(p).then( t => {
                expect(t).toTypeMatch("Success");
            }).catch(fail)
        })
        it("should return Failure on rejected promise", () => {
            const p = new Promise((resolve,reject) => reject());
            const t = Try.fromAsync(p).then( t => {
                expect(t).toTypeMatch("Failure");
            }).catch(fail)
        })

        const fnSucceeds = () => 42
        const fnFails = () => {throw new Error("I Failed")}
        const None = Maybe.None();
        const Just = Maybe.Just(42);
        const Err = Result.Err("");
        const Ok = Result.Ok(42);
        [
            ["from"      , fnSucceeds, "Success", "succeeding function"],
            ["from"      , fnFails   , "Failure", "failing function"],
            ["fromResult", Ok     , "Success", "Ok"  ],
            ["fromResult", Err    , "Failure", "Err" ],
            ["fromMaybe" , Just   , "Success", "Just"],
            ["fromMaybe" , None   , "Failure", "None"],
        ].forEach( ([ cons, val, type, name ]) => {
            it(`should return ${type} when calling "${cons}" with ${name}`, () => {
                expect(Try[cons](val)).toTypeMatch(type)
            })
        })

        const is42 = x => x === 42
        const True = () => true;
        const False = () => false;

        it("fromPredicate should create an Ok with a predicate that returns true", () => {
            expect(Try.fromPredicate(is42,42)).toTypeMatch("Success")
            expect(Try.fromPredicate(True)).toTypeMatch("Success")
        })

        it("fromPredicate should create an Err with a predicate that returns false", () => {
            expect(Try.fromPredicate(is42,2)).toTypeMatch("Failure")
            expect(Try.fromPredicate(False)).toTypeMatch("Failure")
        })
    })

    describe("object methods", () => {
        const Success42 = Try.from(() => 42);
        const Failure42 = Try.from(() => { throw 42 })

        it("should match correctly", () => {
            expect(Success42.match({ Success: true, _: false })).toBeTruthy()
            expect(Failure42.match({ Failure: true, _: false })).toBeTruthy()
        })

        it("should return inner value", () => {
            expect(Success42.get()).toBe(42)
            expect(Failure42.get()).toBe(42)
        })

        it("should map if success", () => {
            const mapped = Success42.map(x => x+1);
            expect(mapped).not.toBe(Success42);
            expect(mapped.get()).toBe(43)
        })

        it("should ignore map if failure", () => {
            const mapped = Failure42.map(x => x+1);
            expect(mapped).toBe(Failure42)
            expect(mapped.get()).toBe(42)
        })

        it("should chain", () => {
            expect(Success42.chain(() => 45)).toBe(45)
            expect(Failure42.chain(() => 45)).toBe(45)
        })

        it("should compare by type and value", () => {
            expect(Success42.equals(Try.Success(42))).toBeTruthy()
            expect(Success42.equals(Try.Success(43))).toBeFalsy()
            expect(Success42.equals(Try.Failure(42))).toBeFalsy()

            expect(Failure42.equals(Try.Failure(42))).toBeTruthy()
            expect(Failure42.equals(Try.Failure(43))).toBeFalsy()
            expect(Failure42.equals(Try.Success(42))).toBeFalsy()
        })

        it("catch should return inner value if success", () => {
            expect(Success42.catch()).toBe(42)
        })

        it("catch should call argument if failure", () => {
            expect(Failure42.catch(() => 43)).toBe(43)
        })

        it("onFailure should return or call argument if failure, return inner value otherwise", () => {
            expect(Success42.onFailure()).toBe(42);
            expect(Failure42.onFailure(() => 43)).toBe(43)
            expect(Failure42.onFailure(43)).toBe(43)
        })

        it("should not call effect when err and effect should leave inner value as is", () => {
            let calls = 0;
            const fn = (x) => {
                calls++;
                return 0;
            }
            Failure42.effect(fn)
            const val = Success42.effect(fn).get();
            expect(val).toBe(42)
            expect(calls).toBe(1);
        })
    })
})