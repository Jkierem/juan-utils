import { length, createArray, map, filter, reduce, isEmpty } from './array';

describe("Array functions", () => {
    describe("length",() => {
        it("should return length",() => {
            const data = [1,2,3]
            expect(length(data)).toBe(data.length)
        })
        it("should return undefined", () => {
            expect(length({})).toBeUndefined()
        })
    }) 
    describe("isEmpty", () => {
        it("should return true on empty", () => {
            expect(isEmpty([])).toBeTruthy()
        })
        it("should return false on not empty", () => {
            expect(isEmpty([1,2,3])).toBeFalsy()
        })
        it("should return false on not arrays", () => {
            expect(isEmpty({})).toBeFalsy()
            expect(isEmpty(1)).toBeFalsy()
        })
    })
    describe("createArray", () => {
        it("should return an array",() => {
            expect(createArray(1,2,3,4) instanceof Array).toBeTruthy()
        })
    })
    describe("map", () => {
        it("should map the data",() => {
            const data = [1,2,3,4]
            const f = x => x * 2
            expect(map(f,data)).toStrictEqual(data.map(f))
        })
    })
    describe("filter", () => {
        it("should filter the data", () => {
            const data = [1,2,3,4]
            const f = x => x % 2
            expect(filter(f,data)).toStrictEqual(data.filter(f))
        })
    })
    describe("reduce", () => {
        it("should reduce the data", () => {
            const data = [1,2,3,4]
            const f = (x,y) => x+y
            expect(reduce(f,0)(data)).toStrictEqual(data.reduce(f,0))
        })
    })
})