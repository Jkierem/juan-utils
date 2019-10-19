import { useEntity } from "../entity";

describe("Entity", () => {
    describe("useEntity", () => {
        it("should return an entity that mutates through actions", () => {
            const [ get, actions ] = useEntity(0, {
                inc: (value) => value + 1,
                dec: (value) => value - 1,
                incBy: (value,amount) => value + amount
            })
            actions.inc();
            actions.incBy(3);
            expect(get()).toBe(4)
            actions.dec();
            expect(get()).toBe(3)
        })
    })
})