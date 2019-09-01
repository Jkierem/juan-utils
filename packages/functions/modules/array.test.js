import { 
    length, 
    createArray, 
    map, 
    filter, 
    reduce, 
    isEmpty,
    head, 
    tail, 
    reverse,
    binaryUnion,
    union,
    zip,
    inclusiveZip,
    belongs,
    flatten,
    range,
    repeat
} from './array';

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
    describe("head", () => {
        it("should return first element", ()=>{
            expect(head([5])).toBe(5);
        })
        it("should return undefined", ()=>{
            expect(head([])).toBeUndefined();
        })
    })
    describe("tail", () => {
        it("should return new array without first element", () => {
            const data = [1,2,3,4]
            const res  = [2,3,4]
            expect(tail(data)).toStrictEqual(res)
        })
        it("should return empty array", () => {
            expect(tail([1])).toStrictEqual([])
            expect(tail([])).toStrictEqual([])
        })
    })
    describe("reverse", () => {
        it("should reverse the array",() => {
            const data = [1,2,3,4,5]
            const res  = [5,4,3,2,1]
            expect(reverse(data)).toStrictEqual(res)
        })
    })
    describe("binaryUnion", () => {
        it("should return the union of two arrays", () => {
            const a = [2,4,6]
            const b = [1,3,5,6]
            const aub = [2,4,6,1,3,5]
            expect(binaryUnion(a,b)).toStrictEqual(aub);
        })
        it("should hold identity property", () => {
            const a = [1,2,3]
            expect(binaryUnion(a,[])).toStrictEqual(a);
            expect(binaryUnion([],a)).toStrictEqual(a);
        })
    })
    describe("union",() => {
        it("should return the union of three arrays", () => {
            const a = [1,2,3];
            const b = [3,4,5];
            const c = [5,6,7];
            const aubuc = [1,2,3,4,5,6,7]
            expect(union(a,b,c)).toStrictEqual(aubuc);
        })
    })
    describe("zip", () => {
        it("should return pairs", () => {
            const a = [1,2,3];
            const b = [2,4,6];
            const azipb = [[1,2],[2,4],[3,6]]
            expect(zip(a,b)).toStrictEqual(azipb)
        })
        it("should return only full pairs", () => {
            const a = [1,2,3,4];
            const b = [2,4,6];
            const azipb = [[1,2],[2,4],[3,6]]
            expect(zip(a,b)).toStrictEqual(azipb)
        })
    })
    describe("inclusiveZip", () => {
        it("should return pairs", () => {
            const a = [1,2,3];
            const b = [2,4,6];
            const aizipb = [[1,2],[2,4],[3,6]]
            expect(inclusiveZip(a,b)).toStrictEqual(aizipb)
        })
        it("should return partial pairs", () => {
            const a = [1,2,3,4];
            const b = [2,4,6];
            const aizipb = [[1,2],[2,4],[3,6],[4,undefined]]
            expect(inclusiveZip(a,b)).toStrictEqual(aizipb)
        })
    })
    describe("belongs",() => {
        it("should return true when in array", () => {
            const data = [1,2,3]
            const elem = 2
            expect(belongs(data,elem)).toBeTruthy()
        })
        it("should return false when not in array", () => {
            const data = [1,2,3]
            const elem = 4
            expect(belongs(data,elem)).toBeFalsy()
        })
    })
    describe("flatten", () => {
        it("should return a flat array",() => {
            const arr = [1,[2,3],4]
            const flat = [1,2,3,4];
            expect(flatten(arr)).toStrictEqual(flat)
        })
    })
    describe("range", () => {
        it("should return an array [start,finish) with step of 1", () => {
            const res = [0,1,2,3,4]
            expect(range(0,5)).toStrictEqual(res);
        })
        it("should return an array [start,finish) with a given step", () => {
            const res = [0,2,4]
            expect(range(0,5,2)).toStrictEqual(res);
        })
    })
    describe("repeat", () => {
        it("should return an array with a repeated value", () => {
            const res = [1,1,1,1];
            expect(repeat(4,1)).toStrictEqual(res)
        })
    })
})