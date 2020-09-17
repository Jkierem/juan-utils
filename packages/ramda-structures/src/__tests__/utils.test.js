import { __ } from 'ramda'
import Union, { NewType } from '../Union/union';
import { getCase } from '../_internals';
import { toPrimitive } from '../_tools'

describe("Utils", () => {
    describe("Union types", () => {
        // Box is the simplest definition of an union
        const Boxed = Union("Box",{ Box: x => x },[]).constructors({ of(a){ return this.Box(a) }});
        const TooMuch = Boxed.of(Boxed.of(Boxed.of(42)))
        it("should have a way to break nested unions", () => {
            expect(TooMuch.unwrap()).toBe(42)
        })
        
        it("should unbox using toPrimitive", () => {
            expect(toPrimitive(TooMuch)).toBe(42)
            expect(toPrimitive(42)).toBe(42)
            expect(toPrimitive(undefined)).toBeUndefined();
        })
    })

    describe("newType", () => {
        const Box = NewType("Box");
        const Boxed42 = Box.from(42)
        it("should create a trivial functor boxed type", () => {
            expect(Boxed42).toTypeMatch("Box")
            expect(Boxed42.toString()).toEqual("[NewType => Box 42]")
            expect(Boxed42.get()).toEqual(42)
        })
    })
    describe("getCase", () => {
        it("should be case insensitive", () => {
            const cases = {
                "hey": 5
            }
            expect(getCase("HeY",cases)).toBe(getCase("hey",cases));
        })

        it("should fallback to default, then _", () => {
            const cases1 = {
                value: "what",
                "default": "default",
                "_": "_"
            }
            const cases2 = {
                value: "what",
                "_": "_"
            }
            const notMatch = "anything"

            expect(getCase(notMatch,cases1)).toBe("default")
            expect(getCase(notMatch,cases2)).toBe("_")
        })
    })
})