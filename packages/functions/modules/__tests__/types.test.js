import { shareConstructor, isDefined, asymEquals, shallowEquals, equals, multiEquals, multiShallowEquals } from '../types'
import { range } from '../array';

describe("Types", () => {
    describe("shareConstructor", () => {
        it("should return if two objects share the same constructor",() => {
            const a = new Array()
            const b = new Array()
            const c = new Object()
            expect(shareConstructor(a,b)).toBeTruthy()
            expect(shareConstructor(a,c)).toBeFalsy()
        })
    })

    describe("isDefined", () => {
        it("false if not undefined or null, true otherwise", () => {
            expect(isDefined(null)).toBeFalsy()
            expect(isDefined(undefined)).toBeFalsy()
        })
    })

    describe("asymEquals", () => {
        it("should return true if every key in A has the same value as B", () => {
            const a = {
                a: "some",
                b: Math.random()
            }
            const b = {
                ...a,
                c: "value"
            }
            expect(asymEquals(a,b)).toBeTruthy();
            expect(asymEquals(b,a)).toBeFalsy();
        })
    })

    describe("shallowEquals", () => {
        it("should return true if every key in A has the same value in B and should be symmetrical", () => {
            const a = {
                a: "some",
                b: Math.random()
            }
            const b = {
                ...a,
            }
            const c = {
                ...a,
                c: "not equal"
            }
            expect(shallowEquals(a,b)).toBeTruthy();
            expect(shallowEquals(b,a)).toBe(shallowEquals(a,b));
            expect(shallowEquals(a,c)).toBeFalsy();
            expect(shallowEquals(a,c)).toBe(shallowEquals(c,a));
        })
    })

    describe("equals", () => {
        it("should hold shallow object equality", () => {
            const a = {
                a: "some",
                b: Math.random()
            }
            const b = {
                ...a,
            }
            const c = {
                ...a,
                c: "not equal"
            }
            expect(shallowEquals(a,b)).toBeTruthy();
            expect(shallowEquals(b,a)).toBe(shallowEquals(a,b));
            expect(shallowEquals(a,c)).toBeFalsy();
            expect(shallowEquals(a,c)).toBe(shallowEquals(c,a));
        })
        it("should compare nested objects by value", () => {
            const a = {
                nest: {
                    as:{
                        much: {
                            value: "some"
                        }
                    }
                }
            }
            const b = {
                nest: {
                    as:{
                        much: {
                            value: "some"
                        }
                    }
                }
            }
            const c = {}
            expect(equals(a,b)).toBeTruthy();
            expect(equals(b,a)).toBe(equals(a,b));
            expect(equals(a,c)).toBeFalsy();
            expect(equals(a,c)).toBe(equals(c,a));
        })
        it("should compare arrays by value", () => {
            const a = range(0,20);
            const b = [...a];
            const c = range(5,30,2);
            expect(equals(a,b)).toBeTruthy();
            expect(equals(b,a)).toBe(equals(a,b));
            expect(equals(a,c)).toBeFalsy();
            expect(equals(a,c)).toBe(equals(c,a));
        })
    })

    describe("multiEquals", () => {
        it("should return true if all are equal", () => {
            const a = {
                nested: {
                    value: "some"
                }
            }
            const b = {
                nested: {
                    value: "some"
                }
            }
            const c = {
                nested: {
                    value: "some"
                }
            }
            const d = {}
            expect(multiEquals(a,b,c)).toBeTruthy();
            expect(multiEquals(a,b,c,d)).toBeFalsy();
        })
    })

    describe("multiShallowEquals", () => {
        it("should return true if all are shallow equal", () => {
            const a = {
                value: "some"
            }
            const b = {...a}
            const c = {...a}
            const d = {}
            expect(multiShallowEquals(a,b,c)).toBeTruthy();
            expect(multiShallowEquals(a,b,c,d)).toBeFalsy();
        })
    })
})