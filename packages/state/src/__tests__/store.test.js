import sinon from 'sinon'
import { lens, set, view } from "@juan-utils/functions";
import { applyMiddleware, useStore, combineReducers } from "../store";

describe("Store", () => {

    describe("applyMiddleware", () => {
        it("should combine middleware into a single enhancer", () => {
            const test = []
            let first = store => next => action => {
                test.push(1)
                next(action)
            }
            let second = store => next => action => {
                test.push(2)
                next(action)
            }
            const reducer = (action,state) => {
                test.push(3)
            }
            const combined = applyMiddleware(first,second)
            const [ , dispatch ] = useStore(reducer,undefined,combined)
            dispatch("something")
            expect(test).toStrictEqual([3,1,2,3])
        })

        it("should be able to create a middleware that catches actions", () => {
            const test = []
            const catchOnes = store => next => action => {
                if( action !== "one" ){
                    next(action)
                }
            }
            const reducer = (action,state) => {
                return [ ...state , action ]
            }
            const [ get, dispatch] = useStore(reducer,[],applyMiddleware(catchOnes))
            dispatch("one")
            dispatch("two")
            expect(get()).toStrictEqual([{},"two"])
        })

        it("should be able to create a middleware that transforms actions", () => {
            const appendA = store => next => action => {
                next(action + "A")
            }
            const reducer = action => action
            const [ get , dispatch ] = useStore(reducer,"",applyMiddleware(appendA));
            dispatch("hey there ")
            expect(get()).toBe("hey there A")
        })

        it("should be able to trap actions", () => {
            const trap = store => next => action => {
                if( action !== "trap" ){
                    next(action)
                }
            }
            const sp = sinon.spy()
            const notCalled = store => next => action => {
                sp()
            }
            const reducer = sinon.spy()
            const [, dispatch] = useStore(reducer,{},applyMiddleware(trap,notCalled))
            dispatch("trap")
            expect(reducer.callCount).toBe(1);
            expect(sp.callCount).toBe(0)
        })
    })

    describe("combineReducers", () => {
        it("should compose reducers", () => {
            const l = lens("value","value")
            const add = (action,state) => set(l, view(l,state) + action, state )
            const mult = (action,state) => set(l, view(l,state) * action, state )
            const addAndMult = combineReducers(add,mult);
            expect(addAndMult(2,{ value: 7 })).toStrictEqual({ value: 18 })
        })

        it("should be able to namespace reducers", () => {
            const reducerObject = {
                foo: () => 2,
                bar: () => 4
            }
            const reducer = combineReducers(reducerObject);
            expect(reducer({},{})).toStrictEqual({ foo: 2 , bar: 4})
        })
    })
})