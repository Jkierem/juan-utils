import Maybe from '../Maybe'
import Result from '../Result'
import Try from '../Try'

describe("Result", () => {
    describe("constructors", () => {
        const error = new Error(42);
        const truthy = 42;
        const falsy = 0;
        const success = Try.from(() => 42)
        const failure = Try.fromMaybe(Maybe.None());
        const just = Maybe.Just(42);
        const none = Maybe.None();
        const fnFails = () => { throw 42 };

        [
            ["from", "Err", "Error object", error],
            ["from", "Ok", "Non-Error value", truthy],
            ["fromFalsy", "Err", "falsy value", falsy],
            ["fromFalsy", "Ok", "truthy value", truthy],
            ["fromTry"  , "Err", "Failure", failure],
            ["fromTry"  , "Ok", "Success", success],
            ["fromMaybe", "Err", "None", none],
            ["fromMaybe", "Ok", "Just", just],
            ["attempt", "Err", "function that throws", fnFails],
            ["attempt", "Ok", "function that returns", () => 42]
        ].forEach(([ cons, type, value, arg ]) => {
            it(`should return ${type} when "${cons}" is called with ${value}`, () => {
                expect(Result[cons](arg)).toTypeMatch(type)
            })
        })
    })

    describe("methods", () => {
        const ok42 = Result.Ok(42);
        const err42 = Result.Err(42)
        it("should return inner value", () => {
            expect(ok42.get()).toBe(42)
            expect(err42.get()).toBe(42)
        })

        it("should map to new object if Ok, ignore otherwise", () => {
            const mappedOk = ok42.map(x => x);
            const mappedErr = err42.map(x => x);
            expect(ok42).not.toBe(mappedOk);
            expect(mappedErr).toBe(err42);
        })

        it("should call chain with inner value", () => {
            expect(ok42.chain(x => x == 42)).toBeTruthy()
            expect(err42.chain(x => x == 42)).toBeTruthy()
        })

        it("should compare by type and inner value", () => {
            expect(err42.equals(Result.Err(42))).toBeTruthy();
            expect(err42.equals(Result.Err(43))).toBeFalsy();
            expect(err42.equals(42)).toBeFalsy()

            expect(ok42.equals(Result.Ok(42))).toBeTruthy();
            expect(ok42.equals(Result.Ok(43))).toBeFalsy();
            expect(ok42.equals(42)).toBeFalsy()
        })

        it("onError should return inner value if Ok, extract argument otherwise", () => {
            expect(ok42.onError()).toBe(42);
            expect(err42.onError(() => 43)).toBe(43)
            expect(err42.onError(43)).toBe(43)
        })

        it("should return true/false for appropiate 'is' function", () => {
            expect(ok42.isOk()).toBeTruthy();
            expect(ok42.isErr()).toBeFalsy();
            expect(err42.isErr()).toBeTruthy();
            expect(err42.isOk()).toBeFalsy();
        })
    })
})