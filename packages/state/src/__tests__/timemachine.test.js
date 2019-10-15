import { prop, mapOverUnary as map } from "@juan-utils/functions";
import { useTimemachine } from "../timemachine";

describe("timemachine", () => {
    describe("useTimemachine", () => {
        it("should have a timeline of states", () => {
            const mapToIds = map(prop("id"))
            const config = {
                states: [
                    {id: 0, transitions: [{id: 3}]},
                    {id: 1, transitions: [{id: 2}]},
                    {id: 2, transitions: [{id: 0}]},
                    {id: 3, transitions: [{id: 1}]},
                ],
                initial: 1,
            }

            const firstStamp  = [1]
            const secondStamp = [1, 2]
            const thirdStamp  = [1, 2, 0]
            const fourthStamp = [1, 2, 0, 3]

            const [get , send] = useTimemachine(config);
            expect(mapToIds(get())).toStrictEqual(firstStamp);
            send(2)
            expect(mapToIds(get())).toStrictEqual(secondStamp);
            send(0)
            expect(mapToIds(get())).toStrictEqual(thirdStamp);
            send(3)
            expect(mapToIds(get())).toStrictEqual(fourthStamp);
        })

        it("should work with no config passed", () => {
            const [get,send] = useTimemachine();
            expect(get).toBeDefined()
            expect(send).toBeDefined()
        })
    })
})