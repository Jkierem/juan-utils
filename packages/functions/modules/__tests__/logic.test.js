import sinon from 'sinon'
import { True, False, not, and, extract, or, allPass, anyPass, nonePass, conditional, defaultTo, unless, until } from "../logic";
import { identity } from '../core';

describe("Logic", () => {
    describe("True", () => {
        it("should return true", () => {
            expect(True()).toBeTruthy();
        })
    })

    describe("False", () => {
        it("should return false", () => {
            expect(False()).toBeFalsy();
        })
    })

    describe("extract", () => {
        it("should return argument if value", () => {
            expect(extract(true)).toBeTruthy()
            expect(extract(false)).toBeFalsy()
        })
        it("should return call if function", () => {
            expect(extract(True)).toBeTruthy()
            expect(extract(False)).toBeFalsy()
        })
    })

    describe("not", () => {
        it("should negate a value",() => {
            const notFalse = not(False())
            const notTrue = not(True())
            expect(notFalse).toBeTruthy()
            expect(notTrue).toBeFalsy()
        })
        it("should negate a function", () => {
            const notFalse = not(False)()
            const notTrue = not(True)()
            expect(notFalse).toBeTruthy()
            expect(notTrue).toBeFalsy()
        })
    })

    describe("and", () => {
        it("should work with values", () => {
            expect(and(true)(true)).toBeTruthy()
            expect(and(false)(true)).toBeFalsy()
            expect(and(true)(false)).toBeFalsy()
            expect(and(false)(false)).toBeFalsy()
        })
        it("should work with functions",() => {
            expect(and(True)(True)).toBeTruthy()
            expect(and(False)(True)).toBeFalsy()
            expect(and(True)(False)).toBeFalsy()
            expect(and(False)(False)).toBeFalsy()
        })
    })

    describe("or", () => {
        it("should work with values", () => {
            expect(or(true)(true)).toBeTruthy()
            expect(or(false)(true)).toBeTruthy()
            expect(or(true)(false)).toBeTruthy()
            expect(or(false)(false)).toBeFalsy()
        })
        it("should work with functions",() => {
            expect(or(True)(True)).toBeTruthy()
            expect(or(False)(True)).toBeTruthy()
            expect(or(True)(False)).toBeTruthy()
            expect(or(False)(False)).toBeFalsy()
        })
    })

    describe("allPass", () => {
        const preds = [
            x => x !== 1,
            x => x > 2,
        ]
        it("should return true if all predicates resolve to true", () => {
            const value = 3;
            expect(allPass(...preds)(value)).toBeTruthy();
        })
        it("should return false if any predicate resolves to false", () => {
            const values = [1, 2]
            expect(allPass(...preds)(values[0])).toBeFalsy();
            expect(allPass(...preds)(values[1])).toBeFalsy();
        })
    })

    describe("anyPass",() => {
        const preds = [
            x => x < 0,
            x => x > 0
        ]
        it("should return true if any predicate resolves to true",() => {
            const values = [ 1, -1 ]
            expect(anyPass(...preds)(values[0])).toBeTruthy()
            expect(anyPass(...preds)(values[1])).toBeTruthy()
        })
        it("should return false if all predicates resolve to false",() => {
            const value = 0
            expect(anyPass(...preds)(value)).toBeFalsy()
        })
    })

    describe("nonePass", () => {
        const preds = [
            x => x < 0,
            x => x > 0
        ]
        it("should return true when all predicates resolve to false", () => {
            expect(nonePass(...preds)(1)).toBeFalsy()
            expect(nonePass(...preds)(-1)).toBeFalsy()
        })
        it("should return false when any predicate resolves to true", () => {
            expect(nonePass(...preds)(0)).toBeTruthy()
        })
    })

    describe("conditional",() => {
        it("should default to identity",() => {
            const value = Math.random()
            expect(conditional()(value)).toBe(value);
            expect(conditional([])(value)).toBe(value);
        })
        it("should only call the first function whose predicate is true",() => {
            const cond = conditional([
                [x => x > 5 , x => x+1],
                [x => x < 10, x => x*2]
            ])
            const value = cond(-2);
            expect(value).toBe(-4)
        })
    })

    describe("defaultTo", () => {
        it("should default to given value if NaN or Nil", () => {
            const value = Math.random()
            const def = defaultTo(value)
            expect(def(NaN)).toBe(value)
            expect(def(undefined)).toBe(value)
            expect(def(null)).toBe(value)
        })
        it("should be identity if is not NaN or Nil", () => {
            const value = Math.random()
            const res = Math.random()
            const def = defaultTo(value)
            expect(def(res)).toBe(res)
        })
    })

    describe("unless",() => {
        it("should pass value to given function unless condition meets", () => {
            const doubleUnlessLessThan5 = unless(
                x => x < 5, 
                x => x*2
            )
            expect(doubleUnlessLessThan5(6)).toBe(12)
            expect(doubleUnlessLessThan5(4)).toBe(4)
        })
    })

    describe("until",() => {
        it("should call a function with given value and pass the result to the next call until the condition meets", () => {
            const doubleSpy = sinon.spy(x => x * 2)
            const doubleUntilGreaterThan10 = until(
                x => x > 10,
                doubleSpy
            )
            const res = doubleUntilGreaterThan10(1);
            expect(res).toBe(16)
            expect(doubleSpy.callCount).toBe(4)
        })
    })
})