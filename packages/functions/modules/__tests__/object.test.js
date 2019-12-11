import { mapKeys, mapValues, pick, diff, omit, strip, entries, fromEntries, clone, deepClone, filterKeys, filterValues, reduceValues } from '../object'
import { keysOf } from '../core';
import { equals } from '../types';

describe("Object", () => {
    describe("mapKeys", () => {
        it("should return a new object with transformed keys", () => {
            const obj = {
                a: "value"
            }
            const mappedKeys = mapKeys(key => key.toUpperCase())(obj)
            expect(mappedKeys.A).toBe("value");
            expect(mappedKeys).not.toBe(obj)
        })
    })

    describe("mapValues", () => {
        it("should return a new object with the transformed values", () => {
            const obj = {
                a: "value"
            }
            const mappedValues = mapValues(val => val.toUpperCase())(obj);
            expect(mappedValues.a).toBe("VALUE");
            expect(mappedValues).not.toBe(obj)
        })
    })

    describe("filterKeys", () => {
        it("should return new object with the key-value pairs where the key passes some predicate", () => {
            const obj = {
                1: 1,
                2: 2,
                3: 3
            }
            const filteredKeys = filterKeys(key => key < 3)(obj);
            const expected = omit(["3"],obj);
            expect(filteredKeys).toStrictEqual(expected)
            expect(filteredKeys).not.toBe(obj)
        })
    })
    describe("filterValues", () => {
        it("should return new object with the key-value pairs where the value passes some predicate", () => {
            const obj = {
                1: 1,
                2: 2,
                3: 3
            }
            const filteredValues = filterValues(val => val < 3)(obj);
            const expected = omit(["3"],obj);
            expect(filteredValues).toStrictEqual(expected)
            expect(filteredValues).not.toBe(obj)
        })
    })
    describe("reduceValues", () => {
        it("reduces the values of an object", () => {
            const obj = {
                1: 1,
                2: 2,
                3: 3
            }
            const reduction = reduceValues((x,y) => x+y, 0 , obj);
            expect(reduction).toBe(6)
        })
    })
    describe("pick",() => {
        it("should return a new object with only the specified keys", () => {
            const obj = {
                a: "value",
                b: "another"
            }
            const pickedObj = pick(["a"])(obj);
            expect(pickedObj).toEqual({ a: "value" })
            expect(pickedObj).not.toBe(obj)
            expect(keysOf(pickedObj)).toStrictEqual(["a"])
        })
    })

    describe("diff", () => {
        it("should return a new object with the keys, and their corresponding values in A, that are in A but not in B", () => {
            const A = {
                a: "value",
                b: "other"
            }
            const B = {
                a: "value",
                c: "other"
            }
            const diffAB = diff(A,B)
            const diffBA = diff(B,A)
            expect(diffAB).toEqual({ b: "other" })
            expect(diffBA).toEqual({ c: "other" })
        })
    })

    describe("omit", () => {
        it("should return a new object without the given keys", () => {
            const obj = {
                a: "value",
                b: "other"
            }
            const omittedObj = omit(["a"],obj)
            expect(omittedObj).toEqual({ b: "other" })
            expect(omittedObj).not.toBe(obj)
            expect(omittedObj.a).toBeUndefined();
            expect(keysOf(omittedObj)).toStrictEqual(["b"])
        })
    })

    describe("strip", () => {
        it("should remove all Nil values from an obj in a new object", () => {
            const obj = {
                a: null,
                b: undefined,
                c: "value"
            }
            const strippedObj = strip(obj);
            expect(strippedObj).toEqual({ c: "value" })
            expect(strippedObj).not.toBe(obj)
            expect(keysOf(strippedObj)).toStrictEqual(["c"])
        })
    })

    describe("entries", () => {
        it("should return an array containing (key,value) pairs", () => {
            const obj = { key: "value" }
            expect(entries(obj)).toStrictEqual([[ "key", "value"]])
        })

        it("should hold: entries(fromEntries(entry)) = entry",() => {
            const entry = [["key","value"]]
            expect(entries(fromEntries(entry))).toStrictEqual(entry)
        })
    })
    
    describe("fromEntries", () => {
        it("should return an object from it's (key,value) pair representation", () => {
            const entry = [["key","value"]]
            expect(fromEntries(entry)).toEqual({ key: "value" })
        })

        it("should hold: fromEntries(entries(obj)) = obj", () => {
            const obj = { key: "value" }
            expect(fromEntries(entries(obj))).toEqual(obj)
        })
    })

    describe("clone", () => {
        it("should return a shallow copy", () => {
            const obj = {
                a: "some value"
            }
            const cloneObj = clone(obj);
            expect(equals(obj,cloneObj)).toBeTruthy();
            expect(cloneObj).not.toBe(obj);
        })
    })

    describe("deepClone", () => {
        it("should return a deep copy of an object", () => {
            const obj = {
                a: {
                    b: {
                        c: {
                            d: 5
                        },
                        e: [ 1, 2, 3, 4 ]
                    }
                }
            }
            const cloneObj = deepClone(obj);
            expect(equals(obj,cloneObj)).toBeTruthy();
            expect(cloneObj).not.toBe(obj);
        })

        it("should clone an array", () => {
            const arr = [1,2,{a:3},4,5]
            const cloneObj = deepClone(arr);
            expect(cloneObj).not.toBe(arr)
            expect(cloneObj).toStrictEqual(arr)
        })
    })
})