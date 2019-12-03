import { Functor } from '../fp/Types'

describe("Types", () => {
    describe("Functor", () => {
        it("should return true on map method existing", () => {
            const functorCreator = () => ({ map(){} })
            const emptyCreator = () => ({ })
            expect(Functor.is(functorCreator)).toBeTruthy();
            expect(Functor.is(emptyCreator)).toBeTruthy();
        })
    })
})