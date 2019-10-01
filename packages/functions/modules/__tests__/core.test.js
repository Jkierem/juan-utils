import sinon from 'sinon'
import { identity, justOf, prop, path, keysOf, memo, memoBy, curry2, curry3, pipe, compose, log, cardinal, flip, call, bind, apply, take, takeOrdinal, callWith, applyWith, propMap } from "../core";
import { range } from '../array';

describe("Core", () => {
    describe("curry2",() => {
        it("should auto curry a binary function", () => {
            const sum = (a,b) => a+b;
            const currySum = curry2(sum);
            expect(currySum(2,6)).toBe(8)
            expect(currySum(2)(6)).toBe(8)
        })
    })

    describe("curry3",() => {
        it("should auto curry a ternary function", () => {
            const sum = (a,b,c) => a+b+c;
            const currySum = curry3(sum);
            expect(currySum(2)(4)(6)).toBe(12)
            expect(currySum(2, 4)(6)).toBe(12)
            expect(currySum(2)(4, 6)).toBe(12)
            expect(currySum(2, 4, 6)).toBe(12)
        })
    })

    describe("identity",() => {
        it("should return the argument", () => {
            const a = Math.random()
            expect(identity(a)).toBe(a)
        })
    })

    describe("justOf",() => {
        it("should return a function that returns a given value", () => {
            const a = Math.random();
            const justA = justOf(a);
            expect(justA()).toBe(a);
        })
    })

    describe("prop", () => {
        it("should return an attribute of an object with the given key", () => {
            const key = "value";
            const value = Math.random()
            const obj = {
                [key]: value,
            }
            expect(prop(key)(obj)).toBe(value);
        })
        it("should return undefined when attribute is not present", () => {
            expect(prop("something")({})).toBeUndefined();
        })
        it("should return undefined when value is falsy", () => {
            expect(prop("something")()).toBeUndefined();
        })
    })

    describe("propMap", () => {
        it("should return an attribute and mapped through given function", () => {
            const key = "key";
            const value = "value";
            const obj = {
                [key]: value,
            };
            const f = x => "mapped "+x
            const res = "mapped value";
            expect(propMap(f,key,obj)).toBe(res)
        })
    })

    describe("path",() => {
        it("should get a value in a nested object", () => {
            const p = "a.b.c.d";
            const value = Math.random();
            const obj = {
                a: { b: { c: { d: value } } }
            }
            expect(path(p)(obj)).toBe(value)
        })
        it("should be able to use any delimiter", () => {
            const p = "a|b|c|d";
            const delimiter = "|";
            const value = Math.random();
            const obj = {
                a: { b: { c: { d: value } } }
            }
            expect(path(p,delimiter)(obj)).toBe(value)
        })
        it("should return undefined when non existant key", () => {
            const p = "a.b.c.d";
            const obj = {}
            expect(path(p)(obj)).toBeUndefined()
        })
    })

    describe("keysOf",() => {
        it("should return an array of keys",() => {
            const obj = {a:"",b:"",c:""}
            const keys = ["a","b","c"]
            expect(keysOf(obj)).toStrictEqual(keys)
        })
        it("should return an empty array on falsy value",() => {
            expect(keysOf(undefined)).toStrictEqual([]);
        })
    })

    describe("memo",() => {
        it("should prevent reevaluation of function on given parameters", () => {
            const fSpy = sinon.spy();
            const memSpy = memo(fSpy);
            const arg = "arg";
            const callCount = 10;
            for( let i = 0 ; i < callCount ; i++ ){
                memSpy(arg);
            }
            expect(fSpy.callCount).toBe(1);
            expect(fSpy.calledWith(arg)).toBeTruthy();
        })
    })

    describe("memoBy",() => {
        it("should memoize using the given key function", () => {
            const keyFunk = sinon.spy();
            const fSpy = sinon.spy((a,b) => a+b);
            const mem = memoBy(keyFunk,fSpy);
            const args = [2,2]
            expect(mem(...args)).toBe(4)
            expect(mem(...args)).toBe(4)
            expect(keyFunk.calledWith(args)).toBeTruthy();
            expect(fSpy.calledOnce).toBeTruthy();
        })
    })

    describe("pipe", () => {
        it("should call functions in order", () => {
            const arr = []
            const push = x => () => arr.push(x)
            pipe(push(1),push(2),push(3))();
            expect(arr).toStrictEqual([1,2,3])
        })
        it("should pass the return to the function", () => {
            const arr = []
            const push = x => arr.push(x)
            pipe(identity,push)(5)
            expect(arr).toStrictEqual([5])
        })
    })

    describe("compose", () => {
        it("should call functions in reverse order", () => {
            const arr = []
            const push = x => () => arr.push(x)
            compose(push(1),push(2),push(3))();
            expect(arr).toStrictEqual([3,2,1])
        })
        it("should pass the return to the function", () => {
            const arr = []
            const push = x => arr.push(x)
            compose(push,identity)(5)
            expect(arr).toStrictEqual([5])
        })
    })

    describe("log",() => {
        let spy;

        beforeEach(() => {
            spy = sinon.spy(console,"log");
        })

        afterEach(() => {
            console.log.restore()
        })

        it("should return the given argument and log it", () => {
            const value = "Something"
            expect(log(value)).toBe(value);
            expect(spy.calledOnceWith(value)).toBeTruthy()
        })
    })

    describe("cardinal", () => {
        it("should call given binary functions with the given arguments flipped", () => {
            const args = [ 1, 2 ];
            const spy = sinon.spy()
            const cardinalSpy = cardinal(spy);
            cardinalSpy(...args)
            expect(spy.calledWith(2,1)).toBeTruthy();
        })
    })

    describe("flip", () => {
        it("should reverse the order of arguments", () => {
            const args = [1,2,3,4];
            const spy = sinon.spy();
            const flippedSpy = flip(spy);
            flippedSpy(...args);
            expect(spy.calledWith(...[4,3,2,1])).toBeTruthy();
        })
    })
    
    describe("call", () => {
        it("should call the given function", () => {
            const args = [1,2,3,4];
            const spy = {
                call: sinon.spy(),
            }
            const callSpy = call(spy);
            callSpy(...args);
            expect(spy.call.calledWith(...args)).toBeTruthy();
        })
    })

    describe("bind", () => {
        it("should bind the given function", () => {
            const args = [1,2,3,4];
            const spy = {
                bind: sinon.spy(),
            }
            const boundSpy = bind(spy);
            boundSpy(...args);
            expect(spy.bind.calledWith(...args)).toBeTruthy();
        })
    })

    describe("apply", () => {
        it("should apply the given function", () => {
            const args = [1,[2,3,4]];
            const spy = {
                apply: sinon.spy(),
            }
            const applySpy = apply(spy);
            applySpy(...args);
            expect(spy.apply.calledWith(...args)).toBeTruthy();
        })
    })

    describe("take", () => {
        it("should return a function that returns an array of the first n arguments", () => {
            const args = range(0,10);
            const res = range(0,5);
            const funk = take(5);
            expect(funk(...args)).toStrictEqual(res);
        })
    })

    describe("takeOrdinal", () => {
        it("should return a function that returns the n-th argument", () => {
            const args = range(0,10);
            const res = 5;
            const funk = takeOrdinal(5);
            expect(funk(...args)).toBe(res);
        })
    })

    describe("callWith", () => {
        it("should call a function with the given arguments", () => {
            const args = range(0,10);
            const spy = sinon.spy()
            const callWithArgs = callWith(...args);
            callWithArgs(spy);
            expect(spy.calledOnceWith(...args)).toBeTruthy();
        })
    })

    describe("applyWith", () => {
        it("should call a function with the given arguments array", () => {
            const args = range(0,10);
            const spy = sinon.spy();
            const applyWithArgs = applyWith(args);
            applyWithArgs(spy);
            expect(spy.calledOnceWith(...args)).toBeTruthy();
        })
    })
})