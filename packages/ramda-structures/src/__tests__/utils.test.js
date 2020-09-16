import { __ } from 'ramda'
import { NewType } from '../Union/union';
import { getCase } from '../_internals';

describe("Utils", () => {
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