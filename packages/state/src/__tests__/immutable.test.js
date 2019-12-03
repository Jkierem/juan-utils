import { useImmutable, createImmutable } from "../immutable";

describe("Immutable", () => {
    describe("useImmutable", () => {
        it("should return a new tuple everytime set is called", () => {
            const obj1 = { value: "mod" };
            const obj2 = { value: 42 };
            const [get,set,toMutable1] = useImmutable(obj1);
            const [getAfter,,toMutable2] = set("value",42);
            expect(get("value")).toBe("mod")
            expect(getAfter("value")).toBe(42);
            expect(toMutable1()).toStrictEqual(obj1)
            expect(toMutable2()).toStrictEqual(obj2)
        })
    })

    describe("createImmutable", () => {
        it("should return a new object everytime set is called", () => {
            const obj = { value: "mod" };
            const alt = { value: 42 };
            const immu1 = createImmutable(obj);
            const immu2 = immu1.set("value",42);
            expect(immu1).not.toBe(immu2);
            expect(immu1.toMutable()).toStrictEqual(obj);
            expect(immu2.toMutable()).toStrictEqual(alt);
        })
    })
})