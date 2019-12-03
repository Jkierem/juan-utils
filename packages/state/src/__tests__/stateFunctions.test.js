import { useState, useObservable } from "../stateFunctions";

describe("stateFunctions", () => {
    describe("useState", () => {
        it("should return a copy of state", () => {
            const init = { key: "value" }
            const [ get , set ] = useState(init);
            set({ key: "some" })
            get().key = "another"
            expect(get().key).toBe("some");
        })

        it("should copy init object", () => {
            const init = { key: "value" }
            const [ get ] = useState(init);
            expect(get()).not.toBe(init);
            expect(get()).toStrictEqual(init);
        })

        it("should have empty object by default", () => {
            const [ get ] = useState();
            expect(get()).toStrictEqual({});
        })

        it("should allow primitives", () => {
            const [ get , set ] = useState(5);
            set({ })
            set(7)
            expect(get()).toBe(7)
        })
    })

    describe("useObservable", () => {
        it("should work like useState", () => {
            const init = { key: "value" }
            const [ get , set ] = useObservable({init});
            expect(get()).not.toBe(init)
            expect(get()).toStrictEqual(init)
            set({ another: "value" })
            expect(get()).toStrictEqual({ ...init , another: "value" })
        })

    })
})