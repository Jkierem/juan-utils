import { Vector } from '../Vector'
import { mult, True, False } from '@juan-utils/functions';
import { matchContainer } from '../fp';

describe("Vector", () => {
    describe("Vector operations", () => {
        it("get x , y , z", () => {
            const v = Vector.of(1,2,3);
            expect([ v.x, v.y, v.z ]).toStrictEqual([1,2,3]);
        })
        it("get should default to 0", () => {
            const v = Vector.from([]);
            expect([ v.x, v.y, v.z ]).toStrictEqual([0,0,0]);
        })
        it("scale", () => {
            const vect = Vector.of(1,2,3,4);
            expect(vect.scale(2).toArray()).toStrictEqual([2,4,6,8]);
        })
        it("add", () => {
            const v0 = Vector.of(1,2,3);
            const v1 = Vector.of(3,3);
            expect(v0.add(v1).toArray()).toStrictEqual([4,5,3]);
        })
        it("sub", () => {
            const v0 = Vector.of(1,2,3);
            const v1 = Vector.of(3,3);
            expect(v0.sub(v1).toArray()).toStrictEqual([-2,-1,3]);
        })
        it("mult", () => {
            const v0 = Vector.of(1,2,3);
            const v1 = Vector.of(3,3);
            expect(v0.mult(v1).toArray()).toStrictEqual([3,6,0]);
        })
        it("mod", () => {
            expect(Vector.of(1,0,0).mod()).toBe(1);
        })
        it("normalize", () => {
            expect(Vector.of(50,645,487).normalize().mod()).toBe(1)
            expect(Vector.of(50,645,487).normalize(5).mod()).toBe(5)
        })
        it("distance", () => {
            const v0 = Vector.of(1,0,0);
            const v1 = Vector.of(0,0,0);
            expect(v0.distance(v1)).toBe(1);
        })
        it("elevate", () => {
            const v0 = Vector.of(1);
            expect(v0.elevate(2).toArray()).toStrictEqual([1,2]);
        })
        it("toString", () => {
            const v0 = Vector.of(1,2,3);
            expect(v0.toString()).toBe("[1,2,3]");
        })
    })
    describe("Foldable", () => {
        it("reduce", () => {
            const v = Vector.from([1,2,3]);
            expect(v.reduce(mult,1)).toBe(6);
        })
    })
    describe("Container", () => {
        it("should match to Vector", () => {
            expect(matchContainer({
                Vector: True,
                _ : False
            },Vector.of(0))).toBeTruthy();
        })
        it("get", () => {
            expect(Vector.of(1,2,3).get()).toStrictEqual([1,2,3]);
        })
    })
    describe("Box", () => {
        expect(Vector.of(1).open(mult(2))).toStrictEqual([2]);
    })
    describe("Morpheable", () => {
        it("morph", () => {
            let called = false
            const fake = {
                of(...arg){
                    called = true
                }
            }
            Vector.of(1).morph(fake);
            expect(called).toBeTruthy();
        })
    })
})