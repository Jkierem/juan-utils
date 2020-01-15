import { Pipeline } from "../Pipeline";
import { justOf, mult, identity, add, True, False } from "@juan-utils/functions";
import { matchContainer } from "../fp";

const Spy = (f=identity) => {
    function _spy(...args){
        _spy.count++;
        _spy.args.push(args)
        return f(...args);
    }
    _spy.count = 0;
    _spy.args = []
    return _spy; 
}

describe("Pipeline", () => {
    it("Empty pipeline returns undefined", () => {
        const pipe = Pipeline()
        expect(pipe.get()).toBeUndefined();
    })
    it("should only call the mapper functions upon get", () => {
        const pipe = Pipeline()
        const s1 = Spy();
        pipe.map(s1);
        expect(s1.count).toBe(0);
        pipe.get();
        expect(s1.count).toBe(1);
    })
    it("should compose the methods passed to map", () => {
        const pipe = Pipeline(justOf(6));
        pipe.map(add(1))
        pipe.map(mult(2))
        expect(pipe.get()).toBe(14);
    })
    it("should be morpheable", () => {
        const pipe = Pipeline.from([justOf(5)]);
        const mock = { of: Spy() };
        pipe.morph(mock);
        expect(mock.of.args[0]).toStrictEqual([5]);
    })
    it("should match",() => {
        expect(matchContainer({
            Pipeline: True,
                   _: False,
        },Pipeline())).toBeTruthy()
    })
})