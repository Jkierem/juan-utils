import { __ } from 'ramda'
import { getCase } from '../_internals';

describe("Utils", () => {
    describe("getCase", () => {
        it("should be case insensitive", () => {
            const cases = {
                "hey": 5
            }
            expect(getCase("HeY",cases)).toBe(getCase("hey",cases));
        })

        it("should fallback to default, then _, then placeholder", () => {
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