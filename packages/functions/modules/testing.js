export const spy = (f) => {
    let calls = 0;
    let callArgs = []
    const funk = (...args) => {
        calls++
        callArgs.push(args);
        return f(...args)
    }
    Object.defineProperty(funk, "count" , {
        get(){ return calls }
    })
    Object.defineProperty(funk, "args" , {
        get(){ return callArgs }
    })
    funk.called = () => calls !== 0
    funk.reset = () => {
        calls = 0
        callArgs = []
    }
    return funk;
}