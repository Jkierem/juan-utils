import { Maybe } from "../Maybe";
import { add, True, identity, False } from "@juan-utils/functions";
import { matchContainer } from "../fp";

describe("Maybe", () => {
    it("should return a Just when not null or undefined", () => {
        expect(Maybe(5).isJust()).toBeTruthy()
    })
    it("should return Nothing when null or undefined", () => {
        expect(Maybe(0).isJust()).toBeTruthy()
        expect(Maybe(null).isNothing()).toBeTruthy()
        expect(Maybe(undefined).isNothing()).toBeTruthy()
    })
    it("should return Nothing when falsy", () => {
        expect(Maybe.from(0).isNothing()).toBeTruthy();
        expect(Maybe.from("").isNothing()).toBeTruthy();
        expect(Maybe.from(NaN).isNothing()).toBeTruthy();
        expect(Maybe.from(null).isNothing()).toBeTruthy();
        expect(Maybe.from(false).isNothing()).toBeTruthy();
        expect(Maybe.from(undefined).isNothing()).toBeTruthy();
        expect(Maybe.fromFalsy(0).isNothing()).toBeTruthy();
        expect(Maybe.fromFalsy("").isNothing()).toBeTruthy();
        expect(Maybe.fromFalsy(NaN).isNothing()).toBeTruthy();
        expect(Maybe.fromFalsy(null).isNothing()).toBeTruthy();
        expect(Maybe.fromFalsy(false).isNothing()).toBeTruthy();
        expect(Maybe.fromFalsy(undefined).isNothing()).toBeTruthy();
    })
    it("should return Just from truthy", () => {
        expect(Maybe.from(5).isJust()).toBeTruthy()
        expect(Maybe.from({}).isJust()).toBeTruthy()
        expect(Maybe.from(true).isJust()).toBeTruthy()
        expect(Maybe.from("just").isJust()).toBeTruthy()
    })
    it("should match a Just or a None", () => {
        expect(matchContainer({
            Just: True,
               _: False, 
        },Maybe.from(42))).toBeTruthy()
        expect(matchContainer({
            None: True,
               _: False, 
        },Maybe.from(null))).toBeTruthy()
    })
    describe("Just", () => {
        it("Maybe of truthy should be a Just", () => {
            const just5 = Maybe(5);
            expect(just5.isJust()).toBeTruthy();
            expect(just5.isNothing()).toBeFalsy();
            expect(just5.get()).toBe(5);
            expect(just5.open(add(1))).toBe(6);
        })
        it("should compare inner values", () => {
            const just5 = Maybe(5);
            const otherJust5 = Maybe(5);
            const just6 = just5.map(add(1));
            const nothing = just5.map(() => null);
            expect(just5.equals(otherJust5)).toBeTruthy();
            expect(just5.equals(just6)).toBeFalsy();
            expect(just5.equals(nothing)).toBeFalsy();
            expect(Maybe.equals(just5,otherJust5)).toBeTruthy();
            expect(Maybe.equals(just5,just6)).toBeFalsy();
            expect(Maybe.equals(just5,nothing)).toBeFalsy();
        })
    })
    describe("None",() => {
        it("should map to None", () => {
            expect(Maybe.empty.map(True).isNothing()).toBeTruthy();
        })
        it("should contain undefined", () => {
            expect(Maybe.empty.get()).toBeUndefined();
            expect(Maybe.empty.open(identity)).toBeUndefined();
        })
        it("should only equal None", () => {
            const just5 = Maybe(5);
            const nothing = Maybe.empty;
            expect(nothing.equals(just5)).toBeFalsy()
            expect(nothing.equals(Maybe.empty)).toBeTruthy()
        })
    })
})