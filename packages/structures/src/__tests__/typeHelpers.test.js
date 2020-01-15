import { makeTransmorpheable } from "../fp/helpers";
import { Transmorpheable } from "../fp";
import { justOf } from "@juan-utils/functions";

describe("Type helpers", () => {
    describe("makeTransmorpheable", () => {
        test("should make transmorpheable from a Functor Morpheable", () => {
            const mockCreator = () => {
                let calledMap = 0;
                let calledMorph = 0;
                const o = {
                    mapCount(){ return calledMap },
                    morphCount(){ return calledMorph },
                    map(){ 
                        calledMap++;
                        return this;
                    },
                    morph(){
                        calledMorph++
                        return this;
                    }
                }
                return makeTransmorpheable(o);
            }
            mockCreator.of = mockCreator
            const mockObj = mockCreator();
            expect(Transmorpheable.is(mockCreator)).toBeTruthy();
            
            mockObj.transmorph(justOf("of"),justOf("f"));
            expect(mockObj.mapCount()).toBe(1)
            expect(mockObj.morphCount()).toBe(1)
        })
    })
})