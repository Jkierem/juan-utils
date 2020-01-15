import * as Lib from '../fp'
import { Type } from '../fp/type';
import { _, mapValues, omit, identity, set, lens, add, True, False } from '@juan-utils/functions';

const TypeClasses = omit(["Fantasy","Empty","matchContainer","getClass"],Lib);

const mockCreator = (methods,repres) => {
    const creator = () => methods.reduce( (obj,next) => set(lens(next,next),identity,obj), {});
    repres.forEach(key => {
        creator[key] = identity;
    });
    return creator;
}

const Mocks = mapValues( (type) => {
    const {methods,rep} = type;
    return mockCreator(methods,rep)
} , TypeClasses)

describe("Types", () => {
    describe("matchContainer", () => {
        const value = {
            get __class__(){ return "A" },
            get(){ return 42 }
        }
        it("should match by __class__ prop", () => {
            const res = Lib.matchContainer({
                A: (val) => val
            },value);
            expect(res).toBe(42)
        })
        it("should default to identity of get", () => {
            expect(Lib.matchContainer({},value)).toBe(42);
        })
        it("should match with wild card", () => {
            expect(Lib.matchContainer({
                B: () => 50,
                _: add(1)
            },value)).toBe(43);
        })
    })
    describe("Type", () => {
        it("should call is", () => {
            const fakeType = {
                is: (() => {
                    function mock(){ 
                        mock.called = true 
                    }
                    mock.called = false
                    return mock;
                })()
            }
            Type.is(fakeType,{});
            expect(fakeType.is.called).toBeTruthy()
        })

        const emptyCreator = () => ({});

        it("empty type should return true for every type", () => {
            const any = Type();
            expect(any.is(emptyCreator)).toBeTruthy();
        })

        it("should validate attribute requirements", () => {
            const typeWithData = Type(_,["data"]);
            const dataCreator = () => ({ data: 42 })
            expect(typeWithData.is(dataCreator)).toBeTruthy();
            expect(typeWithData.is(emptyCreator)).toBeFalsy();
        })

        it("should validate method requirements", () => {
            const typeWithData = Type(_,[],["data"]);
            const dataCreator = () => ({ data: () => 42 })
            expect(typeWithData.is(dataCreator)).toBeTruthy();
            expect(typeWithData.is(emptyCreator)).toBeFalsy();
        })

        it("should validate representative requirements", () => {
            const typeWithData = Type(_,[],[],["data"]);
            const dataCreator = () => ({ })
            dataCreator.data = () => 42
            expect(typeWithData.is(dataCreator)).toBeTruthy();
            expect(typeWithData.is(emptyCreator)).toBeFalsy();
        })

        it("should validate test requirements", () => {
            const typeWithData = Type(_,[],[],[],(crt) => crt.data == 42);
            const dataCreator = () => ({ })
            dataCreator.data = 42
            expect(typeWithData.is(dataCreator)).toBeTruthy();
            expect(typeWithData.is(emptyCreator)).toBeFalsy();
        })
    })
    describe("Type classes",() => {
        mapValues( type => {
            it(`${type.id} should return true for an appropiate creator`, () => {
                expect(type.is(Mocks[type.id])).toBeTruthy();
            })
            it(`${type.id} should return false when creator does not meet criteria`, () => {
                expect(type.is(() => {})).toBeFalsy()
            })
        })(TypeClasses)
        it("Empty should return true for an appropiate creator", () => {
            const c = () => ({ isEmpty(){} })
            c.empty = {}
            expect(Lib.Empty.is(c)).toBeTruthy()
        })
        it("Empty should return false when creator does not meet criteria", () => {
            const c = () => {}
            expect(Lib.Empty.is(c)).toBeFalsy()
        })
    })
    describe("matchContainer", () => {
        it("should match using __class__ attribute", () => {
            const obj = {
                get __class__(){
                    return "one"
                }
            }
            expect(Lib.matchContainer({
                one: True,
                _ : False
            },obj)).toBeTruthy();
        })
        it("should fallback to identity when container is not matched", () => {
            const obj = {
                get __class__(){
                    return "two"
                }
            }
            expect(Lib.matchContainer({
                one: True,
                _ : False
            },obj)).toStrictEqual(obj);
        })
        it("should be identity when received value is not a Container",() => {
            expect(Lib.matchContainer({
                _ : False
            },true)).toBeTruthy();
        })
    })
})