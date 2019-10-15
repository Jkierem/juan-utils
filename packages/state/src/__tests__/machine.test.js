import { useMachine, State, compare } from "../machine";

describe("machine", () => {
    const machineConfig = {
        states: [
            { 
                id: 0, 
                transitions: [
                    { id: 1 }
                ]
            },
            { 
                id: 1, 
                transitions: [
                    { id: 0 }
                ]
            },
            { 
                id: 2, 
                transitions: [
                    { id: 1 }
                ]
            },
        ],
        initial: 2,
    }
    describe("useMachine", () => {
        it("should start at initial state and move according to transitions", () => {
            const [get, send] = useMachine(machineConfig);
            expect(get().id).toBe(2)
            send(1)
            expect(get().id).toBe(1)
            send(0)
            expect(get().id).toBe(0)
        })

        it("should not change state upon undefined transition", () => {
            const [get, send] = useMachine(machineConfig);
            expect(get().id).toBe(2)
            send(20)
            expect(get().id).toBe(2)
        })

        it("should be undefined upon transition to invalid state", () => {
            const [get, send] = useMachine({
                states: [
                    { id: 0 , transitions: [ { id: 5 } ] }
                ]
            });
            send(5)
            expect(get()).toBeUndefined();
        })

        it("should work even if no states are supplyed", () => {
            const [get,send] = useMachine()
            expect(get().id).toBe(0)
            send("anything")
            expect(get().id).toBe(0)
        })

        it("should call onchange upon state change", () => {
            const history = []
            const [get, send] = useMachine({
                ...machineConfig,
                onChange: (prev,next) => history.push(next.id)
            });
            send(1)
            send(0)
            expect(history).toStrictEqual([ 1, 0 ])
        })
    })

    describe("State", () => {
        it("should return a state with a find function", () => {
            const state = State(0,[ 5 ]);
            expect(state.find(x => x === 5)).toBeTruthy();
            expect(state.id).toBe(0)
            expect(state.data).toBeDefined()
        })
    })

    describe("compare", () => {
        it("should compare by id", () => {
            expect(compare({ id : 0}, {id : 1})).toBeFalsy()
            expect(compare({ id : 0}, {id : 0})).toBeTruthy()
        })
    })
})