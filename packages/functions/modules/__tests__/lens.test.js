import sinon from 'sinon';
import { lens, view, set, over } from "../lens";
import { inc } from '../math';

describe("lens", () => {
    describe("lens", () => {
        it("should hold GetPut law: view l (set l v s) == v", () => {
            const l = lens("x","x");
            const v = "somevalue";
            const s = { x: "notsomevalue"};
            expect(view(l,set(l,v,s))).toBe(v);
        })

        it("should hold PutGet law: set l (view l s) s == s", () => {
            const l = lens("x","x");
            const s = { x: "notsomevalue"};
            expect(set(l,view(l,s),s)).toStrictEqual(s);
        })

        it("should hold PutPut law: set l v' (set l v s) = set l v' s", () => {
            const l = lens("x","x");
            const s = { x: "notsomevalue" };
            const v = "somevalue"
            const vp = "someothervalue";
            expect(set(l,vp,set(l,v,s))).toStrictEqual(set(l,vp,s));
        })
    })

    describe("over", () => {
        it("should set property over map function", () => {
            const map = sinon.spy(inc);
            const l = lens("x","x");
            const s = { x: 0 };
            const res = { x: 1 };
            expect(over(l,map,s)).toStrictEqual(res)
            expect(map.calledWithExactly(0)).toBeTruthy();
        })
    })
})