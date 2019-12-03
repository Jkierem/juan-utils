import sinon from 'sinon'
import { identity, justOf, prop, path, keysOf, memo, memoBy, curry2, curry3, pipe, compose, flip, call, apply, take, takeOrdinal, propMap, partial, _, effect, converge, diverge, propApply, propCall, reverseArgs, unapply, arity, trampoline, branch, createPathFunction, curryN } from "../core";
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

    describe("curryN", () => {
        it("should auto curry a function given the arity", () => {
            const sum = (a,b,c,d) => a+b+c+d;
            const currySum = curryN(4,sum);
            expect(currySum(2)(4)(6)(8)).toBe(20)
            expect(currySum(2, 4, 6, 8)).toBe(20)
            expect(currySum(2)(4, 6, 8)).toBe(20)
            expect(currySum(2)(4)(6, 8)).toBe(20)
            expect(currySum(2)(4, 6)(8)).toBe(20)
            expect(currySum(2, 4)(6, 8)).toBe(20)
            expect(currySum(2, 4)(6)(8)).toBe(20)
            expect(currySum(2, 4, 6)(8)).toBe(20)
        })
    })

    describe("partial", () => {
        it("should do partial aplication", () => {
            const f = sinon.spy()
            const fixedArgs = [1,2,3];
            const nextArgs = [4,5,6];
            const allArgs = [ ...fixedArgs, ...nextArgs ];
            partial(f,...fixedArgs)(...nextArgs);
            expect(f.calledWith(...allArgs)).toBeTruthy();
        })
        it("should allow use of the placeholder", () => {
            const f = sinon.spy()
            const fixedArgs = [1,2,3];
            const nextArgs = [4,5,6];
            const allArgs = [ ...fixedArgs, ...nextArgs ];
            partial(f,1,_,3)(2,...nextArgs);
            expect(f.calledWith(...allArgs)).toBeTruthy();
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

    describe("propApply", () => {
        it("should get an attribute and apply it", () => {
            const key = "funk";
            const value = sinon.spy();
            const args = [1,2,3,4]
            const obj = {
                [key]: value,
            }
            propApply(key,args,obj);
            expect(value.calledWith(...args)).toBeTruthy();
        })
    })

    describe("propCall", () => {
        it("should get an attribute and call it", () => {
            const key = "funk";
            const value = sinon.spy();
            const args = [1,2,3,4]
            const obj = {
                [key]: value,
            }
            propCall(key,obj,...args);
            expect(value.calledWith(...args)).toBeTruthy();
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
            expect(createPathFunction(delimiter)(p,obj)).toBe(value)
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

    describe("effect",() => {
        it("should call an effect and return the value", () => {
            const eff = sinon.spy();
            const x = 5
            const res = effect(eff)(x)
            expect(res).toBe(x)
            expect(eff.calledOnceWith(x)).toBeTruthy()
        })
    })

    describe("flip", () => {
        it("should reverse the order of the first two arguments", () => {
            const args = [1,2,3,4];
            const spy = sinon.spy();
            const flippedSpy = flip(spy);
            flippedSpy(...args);
            expect(spy.calledWith(...[2,1,3,4])).toBeTruthy();
        })
    })

    describe("reverseArgs", () => {
        it("should reverse the order of the arguments", () => {
            const args = [1,2,3,4];
            const spy = sinon.spy();
            const reversedSpy = reverseArgs(spy);
            reversedSpy(...args);
            expect(spy.calledWith(...[4,3,2,1])).toBeTruthy();
        })
    })
    
    describe("call", () => {
        it("should call the given function", () => {
            const args = [1,2,3,4];
            const spy =  sinon.spy()
            call(spy,...args);
            expect(spy.calledWith(...args)).toBeTruthy();
        })
    })

    describe("apply", () => {
        it("should apply the given function", () => {
            const args = [1,[2,3,4]];
            const spy =  sinon.spy()
            apply(spy)(args);
            expect(spy.calledWith(...args)).toBeTruthy();
        })
    })

    describe("arity", () => {
        it("should change the arity of a function", () => {
            const randArity = Math.ceil(Math.random() * 100);
            const args = range(0,102);
            const funk = sinon.spy();
            arity(randArity)(funk)(...args);
            expect(funk.calledWithExactly(...args.slice(0,randArity))).toBeTruthy();
        })
    })

    describe("unapply", () => {
        it("should unapply the given function", () => {
            const args = [1,2,3,4];
            const spy =  sinon.spy()
            unapply(apply(spy))(args);
            expect(spy.calledWith(args)).toBeTruthy();
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

    describe("converge", () => {
        it("should converge various outputs to a single function", () => {
            const converger = sinon.spy();
            const branches = [
                x => x + 1,
                x => x - 1,
                x => x * 2
            ]
            converge( converger , branches )(5)
            expect(converger.calledWith(...branches.map(f => f(5)))).toBeTruthy();
        })
    })

    describe("diverge", () => {
        it("should pass the output to various functions", () => {
            const diverger = () => 5
            const branches = [
                sinon.spy(),
                sinon.spy()
            ]
            diverge(diverger,branches)();
            expect(branches.every(s => s.calledOnceWith(5))).toBeTruthy()
        })
    })

    describe("trampoline", () => {
        it("should avoid max stack size error", () => {
            let i = 20000;
            const funk1 = (i) => funk1(i-1);
            const funk2 = (i) => {
                if( i >= 0 ){
                    return () => funk2(i-1);
                }
            }
            const throwableFunk = sinon.spy(funk1);
            const trampolineFunk = sinon.spy(trampoline(funk2));
            try{
                throwableFunk(i);
            } catch {}
            trampolineFunk(i);
            expect(throwableFunk.threw()).toBeTruthy();
            expect(trampolineFunk.threw()).toBeFalsy();
        })
    })

    describe("branch", () => {
        it("should call array of function with their respective values in array", () => {
            const values = range(0,10);
            const funks = values.map(x => sinon.spy());
            branch(funks)(values);
            funks.forEach( (f,index) => {
                expect(f.calledOnceWith(values[index])).toBeTruthy();
            })
        })
    })
})