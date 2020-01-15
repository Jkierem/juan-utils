import { add, sub, div, mult, mod, pow, gte, eq, neq, gt, lte, lt, eqBy, min, max, abs, toDegrees, toRadians, random, mean, clamp, isBetween } from '../math'
import { compose } from '../core';

describe("Math", () => {
    describe("add", () => {
        it("should add two numbers", () => {
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            const c = a + b;
            expect(add(a,b)).toBe(c)
        })
    })

    describe("sub", () => {
        it("should substract two numbers",() => {
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            const c = b - a;
            expect(sub(a,b)).toBe(c)
        })
    })

    describe("mult", () => {
        it("should multiply two numbers", () => {
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            const c = b * a;
            expect(mult(a,b)).toBe(c)
        })
    })

    describe("div", () => {
        it("should divide two numbers", () => {
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            const c = b / a;
            expect(div(a,b)).toBe(c)
        })
    })

    describe("mod", () => {
        it("should return mod(a) of b", () => {
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            const c = b % a;
            expect(mod(a,b)).toBe(c)
        })
    })

    describe("pow", () => {
        it("should return b^a", () => {
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            const c = b ** a;
            expect(pow(a,b)).toBe(c)
        })
    })

    describe("gte", () => {
        it("should return if 'b' is greater or equal to 'a'", () => {
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            expect(gte(a,b)).toBe(b >= a)
        })
    })

    describe("gt", () => {
        it("should return if 'b' is greater to 'a'", () => {
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            expect(gt(a,b)).toBe(b > a)
        })
    })

    describe("lte", () => {
        it("should return if 'b' is less or equal to 'a'", () => {
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            expect(lte(a,b)).toBe(b <= a)
        })
    })

    describe("lt", () => {
        it("should return if 'b' is less to 'a'", () => {
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            expect(lt(a,b)).toBe(b < a)
        })
    })

    describe("eq", () => {
        it("should return true if values are equal", () => {
            const [a,b,c] = [5,5,4]
            expect(eq(a,b)).toBeTruthy();
            expect(eq(a,c)).toBeFalsy();
        })
    })

    describe("neq", () => {
        it("should return true if values are not equal", () => {
            const [a,b,c] = [5,4,5]
            expect(neq(a,b)).toBeTruthy();
            expect(neq(a,c)).toBeFalsy();
        })
    })

    describe("eqBy", () => {
        it("should check for equality after calling the arguments with the provided function", () => {
            const a = { value: 5 }
            const b = { value: 5 }
            const c = { value: 4 }
            const eqByValue = eqBy(x => x.value)
            expect(eqByValue(a,b)).toBeTruthy();
            expect(eqByValue(a,c)).toBeFalsy();
        })
    })

    describe("min", () => {
        it("should return the lower number", () => {
            const [a,b] = [1,2]
            expect(min(a,b)).toBe(1)
            expect(min(b,a)).toBe(1)
        })
    })

    describe("max", () => {
        it("should return the highest number", () => {
            const [a,b] = [1,2]
            expect(max(a,b)).toBe(2)
            expect(max(b,a)).toBe(2)
        })
    })

    describe("abs", () => {
        it("should return the absolute value", () => {
            expect(abs(-1)).toBe(1)
            expect(abs(2)).toBe(2)
        })
    })

    describe("toDegrees", () => {
        it("should convert from radians to degrees", () => {
            expect(toDegrees(Math.PI)).toBe(180)
        })
        it("should hold toRadians(toDegrees(a)) = a", () => {
            const a = Math.floor(Math.random()*100);
            expect(compose( toRadians, toDegrees )(a)).toBeCloseTo( a, 5 )
        })
    })

    describe("toRadians", () => {
        it("should convert from degrees to radians", () => {
            expect(toRadians(180)).toBe(Math.PI);
        })
        it("should hold toDegrees(toRadians(a)) = a", () => {
            const a = Math.floor(Math.random()*100);
            expect(compose( toDegrees, toRadians )(a)).toBeCloseTo( a, 5 )
        })
    })

    describe("mean", () => {
        it("should return the mean of an array", () => {
            const arr = [1,2,3,4,5]
            expect(mean(arr)).toBe(3)
        })
    })

    describe("random", () => {
        it("should return a random number between 0 and the limit", () => {
            const a = 100;
            const r = random(a);
            expect(r).toBeLessThan(a)
            expect(r).toBeGreaterThanOrEqual(0)
        })
    })

    describe("clamp",() => {
        it("clamp(x) = x if x >= min and x < max", () => {
            const min = 10;
            const max = 20;
            const f = clamp(min,max);
            expect(f(5)).toBe(10);
            expect(f(15)).toBe(15);
            expect(f(25)).toBe(20);
        })
    })

    describe("isBetween", () => {
        it("true if value is between min (inclusive) and max (non-inclusive)", () => {
            const min = 10;
            const max = 20;
            const f = isBetween(min,max);
            expect(f(5)).toBeFalsy();
            expect(f(15)).toBeTruthy();
            expect(f(20)).toBeFalsy();
            expect(f(25)).toBeFalsy();
        })
    })
})