import sinon from 'sinon'
import { identity, justOf, prop, path, keysOf, memo, memoBy, curry2, curry3, pipe, compose } from "../core";

describe("Core", () => {
    describe("curry2",() => {
        it("should auto curry a binary function", () => {
            const sum = (a,b) => a+b;
            const currySum = curry2(sum);
            expect(currySum(2,6)).toBe(8)
            expect(currySum(2)(6)).toBe(8)
        })
    })
    describe("curry3",() => {
        it("should auto curry a ternary function", () => {
            const sum = (a,b,c) => a+b+c;
            const currySum = curry3(sum);
            expect(currySum(2)(4)(6)).toBe(12)
            expect(currySum(2, 4)(6)).toBe(12)
            expect(currySum(2)(4, 6)).toBe(12)
            expect(currySum(2, 4, 6)).toBe(12)
        })
    })
    describe("identity",() => {
        it("should return the argument", () => {
            const a = Math.random()
            expect(identity(a)).toBe(a)
        })
    })
    describe("justOf",() => {
        it("should return a function that returns a given value", () => {
            const a = Math.random();
            const justA = justOf(a);
            expect(justA()).toBe(a);
        })
    })
    describe("prop", () => {
        it("should return an attribute of an object with the given key", () => {
            const key = "value";
            const value = Math.random()
            const obj = {
                [key]: value,
            }
            expect(prop(key)(obj)).toBe(value);
        })
        it("should return undefined when attribute is not present", () => {
            expect(prop("something")({})).toBeUndefined();
        })
    })
    describe("path",() => {
        it("should get a value in a nested object", () => {
            const p = "a.b.c.d";
            const value = Math.random();
            const obj = {
                a: { b: { c: { d: value } } }
            }
            expect(path(p)(obj)).toBe(value)
        })
        it("should be able to use any delimiter", () => {
            const p = "a|b|c|d";
            const delimiter = "|";
            const value = Math.random();
            const obj = {
                a: { b: { c: { d: value } } }
            }
            expect(path(p,delimiter)(obj)).toBe(value)
        })
        it("should return undefined when non existant key", () => {
            const p = "a.b.c.d";
            const obj = {}
            expect(path(p)(obj)).toBeUndefined()
        })
    })
    describe("keysOf",() => {
        it("should return an array of keys",() => {
            const obj = {a:"",b:"",c:""}
            const keys = ["a","b","c"]
            expect(keysOf(obj)).toStrictEqual(keys)
        })
    })
    describe("memo",() => {
        it("should prevent reevaluation of function on given parameters", () => {
            const fSpy = sinon.spy();
            const memSpy = memo(fSpy);
            const arg = "arg";
            const callCount = 10;
            for( let i = 0 ; i < callCount ; i++ ){
                memSpy(arg);
            }
            expect(fSpy.callCount).toBe(1);
            expect(fSpy.calledWith(arg)).toBeTruthy();
        })
    })
    describe("memoBy",() => {
        it("should memoize using the given key function", () => {
            const keyFunk = sinon.spy();
            const fSpy = sinon.spy((a,b) => a+b);
            const mem = memoBy(keyFunk,fSpy);
            const args = [2,2]
            expect(mem(...args)).toBe(4)
            expect(mem(...args)).toBe(4)
            expect(keyFunk.calledWith(args)).toBeTruthy();
            expect(fSpy.calledOnce).toBeTruthy();
        })
    })
    describe("pipe", () => {
        it("should call functions in order", () => {
            const arr = []
            const push = x => () => arr.push(x)
            pipe(push(1),push(2),push(3))();
            expect(arr).toStrictEqual([1,2,3])
        })
        it("should pass the return to the function", () => {
            const arr = []
            const push = x => arr.push(x)
            pipe(identity,push)(5)
            expect(arr).toStrictEqual([5])
        })
    })
    describe("compose", () => {
        it("should call functions in reverse order", () => {
            const arr = []
            const push = x => () => arr.push(x)
            compose(push(1),push(2),push(3))();
            expect(arr).toStrictEqual([3,2,1])
        })
        it("should pass the return to the function", () => {
            const arr = []
            const push = x => arr.push(x)
            compose(push,identity)(5)
            expect(arr).toStrictEqual([5])
        })
    })
})