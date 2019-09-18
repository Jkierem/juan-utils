import sinon from 'sinon'
import { identity, justOf, prop, path, keysOf, memo, memoBy } from "../core";

describe("Core", () => {
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
            const fSpy = sinon.spy();
            const memSpy = memoBy(keyFunk,fSpy);
            const arg = "args"
            expect(false).toBeTruthy();
        })
    })
})