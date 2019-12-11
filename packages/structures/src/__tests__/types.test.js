import * as Lib from '../fp'
import { Type } from '../fp/type';
import { _, mapValues, omit, identity } from '@juan-utils/functions';

const TypeClasses = omit("Fantasy",Lib);

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
        })(TypeClasses)
    })
})