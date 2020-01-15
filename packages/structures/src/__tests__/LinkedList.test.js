import { LinkedList } from "../LinkedList";
import { add, gte, identity, pipe, mult, decurry, gt, True, False } from "@juan-utils/functions";
import { Setoid, Functor, Foldable, Filterable, Creator, Empty, matchContainer } from "../fp";

describe("LinkedList", () => {
    describe("List operations", () => {
        it("should create an empty List", () => {
            const list = LinkedList();
            list.map(add(1));
            list.filter(gte(1));
            list.reduce(add);
            list.remove(1);
            expect(list.length()).toBe(0);
            expect(list.isEmpty()).toBeTruthy();
        })
        it("should append and preppend", () => {
            const list = LinkedList();
            list.append(2);
            list.preppend(1);
            list.append(3);
            expect(list.toArray()).toStrictEqual([1,2,3])
        })
        it("should be able to get the first element", () => {
            const list = LinkedList();
            list.append(1);
            expect(list.head()).toBe(1);
        })
        it("should be able to get the tail", () => {
            const list = LinkedList.from([1,2,3,4])
            expect(list.tail().toArray()).toStrictEqual([2,3,4]);
        })
        it("should be able to retrieve an element with index", () => {
            const list = LinkedList.of(0,1,2,3,4)
            expect(list.getValue(2)).toBe(2)
            expect(list.getValue(-1)).toBe(undefined)
            expect(list.getValue(10)).toBe(undefined)
        })
        it("should be destructable", () => {
            const list = LinkedList.of(1,2,3,4)
            const [ head , ...tail ] = list
            expect(head).toBe(list.head());
            expect(tail).toStrictEqual(list.tail().toArray());
        })
        it("axiom: head (preppend (e, l)) = e", () => {
            const list = LinkedList()
            list.preppend("head")
            expect(list.head()).toBe("head")
        })
        it("axiom: tail (preppend (e, l)) = l", () => {
            const list = LinkedList.of(1,2,3,4)
            list.preppend(0)
            expect(list.tail().toArray()).toStrictEqual([1,2,3,4])
        })
        it("should remove elements by index", () => {
            const list = LinkedList.of(0,1,2,3,4,5,6);
            list.remove(0)
            list.remove(5)
            list.remove(2)
            list.remove(10)
            list.remove(-1)
            expect(list.length()).toBe(4)
            expect(list.toArray()).toStrictEqual([1,2,4,5])
        })
    })
    describe("Type classes", () => {
        it("should match to LinkedList", () => {
            expect(matchContainer({
                LinkedList: True,
                _: False
            },LinkedList())).toBeTruthy()
        })
        it("should meet the Setoid, Functor, Foldable, Filterable, Creator, Morpheable, Transmorpheable and Empty", () => {
            expect(Setoid.is(LinkedList)).toBeTruthy();
            expect(Functor.is(LinkedList)).toBeTruthy();
            expect(Foldable.is(LinkedList)).toBeTruthy();
            expect(Filterable.is(LinkedList)).toBeTruthy();
            expect(Creator.is(LinkedList)).toBeTruthy();
            expect(Empty.is(LinkedList)).toBeTruthy();
        })
        describe("Functor", () => {
            const list = LinkedList.of(1,2,3,4);
            it("map identity", () => {
                expect(list.map(identity).toArray()).toStrictEqual([1,2,3,4])
            })
            it("map composition", () => {
                const f = add(1);
                const g = mult(2);
                const fog = pipe(f,g);
                const mapped1 = list.map(f).map(g);
                const mapped2 = list.map(fog);
                expect(mapped1.equals(mapped2)).toBeTruthy();
            })
        })
        describe("Foldable", () => {
            const list = LinkedList.of(1,2,3,4);
            it("should call reduce correctly", () => {
                expect(list.reduce(add,0)).toBe(10)
            })
        })
        describe("Filterable", () => {
            const list = LinkedList.of(1,2,3,4,5);
            it("should be able to filter elements", () => {
                expect(list.filter(gt(3)).toArray()).toStrictEqual([4,5])
            })
        })
        describe("Empty", () => {
            it("should return an empty list", () => {
                expect(LinkedList()).toBeTruthy();
                expect(LinkedList.empty.isEmpty()).toBeTruthy();
            })
            it("isEmpty should only be true if length is cero", () => {
                expect(LinkedList.of(1,2,3,4).isEmpty()).toBeFalsy();
                const list = LinkedList(1,2)
                list.remove(0)
                list.remove(0)
                expect(list.isEmpty()).toBeTruthy()
            })
        })
        describe("Setoid", () => {
            it("should compare list by elements", () => {
                const l0 = LinkedList.of(0,1,2,3);
                const l1 = LinkedList.of(0,1,2,3);
                const l2 = LinkedList.of(1,2,3,4);
                expect(l0.equals(l1)).toBeTruthy()
                expect(l0.equals(l2)).toBeFalsy()
                expect(l1.equals(l0)).toBeTruthy()
            })
        })
    })
})