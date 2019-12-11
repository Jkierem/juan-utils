import { lens, identity, set, omit, mapValues } from "@juan-utils/functions";
import * as Fantasy from '../fp/fantasy'

const TypeClasses = omit("Constants",Fantasy);

const mockCreator = (methods,repres) => {
    const creator = () => methods.reduce( (obj,next) => set(lens(next,next),identity,obj), {});
    repres.forEach(key => {
        creator[key] = identity;
    });
    return creator;
}

const Mocks = mapValues( ({methods,rep}) => mockCreator(methods,rep) , TypeClasses)

describe("Fantasy", () => {
    mapValues( type => {
        it(`${type.id} should return true for an appropiate creator`, () => {
            expect(type.is(Mocks[type.id])).toBeTruthy();
        })
    })(TypeClasses)
})