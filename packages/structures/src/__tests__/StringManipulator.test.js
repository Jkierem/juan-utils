import { matchContainer } from '../fp'
import { StringManipulator } from '../StringManipulator'
import { identity, add, eq, pipe, True, False } from '@juan-utils/functions';

describe("StringManipulator", () => {
    describe("forEach", () => {
        it("should iterate over characters without returning",() => {
            const arr = [];
            const str = StringManipulator.of("hello");
            const res = str.forEach(c => arr.push(c) );
            expect(res).toBeUndefined();
            expect(arr.join("")).toBe("hello");
        })
    })
    describe("Functor", () => {
        it("map identity", () => {
            const val = "hello"
            const str = StringManipulator.of(val);
            expect(str.map(identity).toString()).toBe(val);
            expect(str.map(identity).contains(val)).toBeTruthy()
        })
        it("map composition", () => {
            const str = StringManipulator.of("ababa")
            const f = (v) => v == "a" ? "c" : v;
            const g = (v) => v == "b" ? "d" : v;
            const fog = pipe(f,g);
            const mapped1 = str.map(f).map(g);
            const mapped2 = str.map(fog);
            expect(mapped1.equals(mapped2)).toBeTruthy();
        })
    })
    describe("Filterable", () => {
        it("filters by character", () => {
            const val = "abababa"
            const res = "bbb";
            const str = StringManipulator.of(val)
            expect(str.filter(eq("b")).toString()).toBe(res);
        })
    })
    describe("Foldable", () => {
        it("reduces characters", () => {
            const val = "hello world!";
            const str = StringManipulator.of(val);
            const isVowel = (v) => "aeiou".includes(v)
            const countVowels = (acc,next) => acc + (isVowel(next) ? 1 : 0);
            expect(str.reduce(countVowels,0)).toBe(3);
        })
    })
    describe("Box", () => {
        it("should have an open operation", () => {
            const str = StringManipulator.of("something");
            expect(str.open(identity)).toBe("something");
        })
    })
    describe("Setoid", () => {
        it("should compare by inner string value", () => {
            const val0 = "hello world"
            const val1 = "goodbye world"
            const s0 = StringManipulator.of(val0)
            const s1 = StringManipulator.of(val0)
            const s2 = StringManipulator.of(val1)
            expect(s0.equals(s1)).toBeTruthy();
            expect(s0.equals(s2)).toBeFalsy();
            expect(StringManipulator.equals(s0,s1)).toBeTruthy();
            expect(StringManipulator.equals(s0,s2)).toBeFalsy();
        })
    })
    describe("arraylike", () => {
        it("should have a getValue", () => {
            expect(StringManipulator.of("hello").getValue(0)).toBe("h")
        })
    })
    describe("match", () => {
        it("should match to StringManipulator", () => {
            const val = "hello world";
            const str = StringManipulator.from(val.split(""));
            const isStringManipulator = matchContainer({
                StringManipulator: True,
                _ : False
            },str)
            expect(isStringManipulator).toBeTruthy();
        })
    })
})