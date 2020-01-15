import sinon from 'sinon'
import { lens, set, view, justOf, takeSecond, compose } from "@juan-utils/functions";
import { applyMiddleware, useStore, combineReducers } from "../store";

describe("Store", () => {

    describe("useStore", () => {
        const init = {
            one: false,
            two: ''
        }
        const actions = {
            noData(){ return { type: 1 } },
            withData(data){ return { type: 2, payload:data }},
        }
        const reducer = (state=init,action={}) => {
            switch(action.type){
                case 1:
                    return { ...state, one: !state.one }
                case 2:
                    return { ...state, two: action.payload }
                default:
                    return state
            }
        }
        const otherReducer = justOf("Something else");
        it("should return a store tuple",() => {
            const [ getState , dispatch ] = useStore(reducer,init);
            expect(getState()).toStrictEqual(init)
            dispatch(actions.noData())
            dispatch(actions.withData("data"))
            expect(getState()).toStrictEqual({
                one: true,
                two: "data"
            })
        })
        it("should allow subscription and notify on changes",() => {
            const [ getState , dispatch , subscribe ] = useStore(reducer,init);
            const subSpy = sinon.spy();
            subscribe(subSpy);
            dispatch(actions.noData());
            expect(subSpy.callCount).toBe(1);
        })
        it("should allow unsubscription to changes",() => {
            const [ getState , dispatch , subscribe ] = useStore(reducer,init);
            const subSpy = sinon.spy();
            const one = subscribe(() => {})
            const unsub = subscribe("spy",subSpy);
            const two = subscribe(() => {})
            unsub()
            one()
            two()
            dispatch(actions.noData());
            expect(subSpy.callCount).toBe(0);
        })
        it("should allow replacing of reducer",() => {
            const [getState,dispatch,,replaceReducer] = useStore(reducer,init);
            replaceReducer(otherReducer)
            dispatch({})
            expect(getState()).toBe("Something else")
        })
    })

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
            const reducer = () => {
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
            const reducer = (state,action) => {
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
            const reducer = compose((action) => action, takeSecond);
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
            const add = (state,action) => set(l, view(l,state) + action, state )
            const mult = (state,action) => set(l, view(l,state) * action, state )
            const addAndMult = combineReducers(add,mult);
            expect(addAndMult({ value: 7 },2)).toStrictEqual({ value: 18 })
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