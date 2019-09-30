import { add, sub } from '../math'

describe("Math", () => {
    describe("add", () => {
        it("should add two numbers", () => {
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            const c = a + b;
            expect(add(a,b)).toBe(c)
            expect(add(a)(b)).toBe(c)
        })
    })

    describe("sub", () => {
        it("should substract two numbers",() => {
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            const c = b - a;
            expect(sub(a,b)).toBe(c)
            expect(sub(a)(b)).toBe(c)
        })
    })
})