import { useTimeline } from "../timeline";
import { range } from "@juan-utils/functions";

describe("timeline", () => {
    describe("useTimeline", () => {
        it("should keep track of past events", () => {
            const [get , send] = useTimeline();
            range(0,10).forEach(x => send(x));
            expect(get()).toStrictEqual(range(0,10));
        })

        it("should receive a function that dictates what happens when receiving an event", () => {
            const [get, send] = useTimeline(x => "event")
            send("something")
            expect(get()).toStrictEqual([ "event" ]);
        })
    })
})