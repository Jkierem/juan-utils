import { createTransactional } from '../transactional'

describe("transactional", () => {
    describe("createTransactional", () => {
        it("should not change value until commit is called", () => {
            const trans = createTransactional({
                init: { value : 42 }
            })
            const preCommit = trans.set("value",20).get("value");
            const postCommit = trans.commit().get("value");
            expect(preCommit).toBe(42);
            expect(postCommit).toBe(20);
        })

        it("should call onCommit when commit is called", () => {
            let what = null;
            const trans = createTransactional({
                init: { value : 42 },
                onCommit: (obj) => {
                    what = obj
                }
            })
            trans.set("value",40).commit();
            expect(what).toStrictEqual({ value: 40 });
        })

        it("should be able to add new onCommit with the commit function", () => {
            let called = false;
            const callMeNextCommit = () => called = true;
            const trans = createTransactional({
                init: { value : 42 }
            })
            trans
            .set("value",20).commit(callMeNextCommit)
            .set("value",42).commit();
            expect(called).toBeTruthy();
        })
    })
})