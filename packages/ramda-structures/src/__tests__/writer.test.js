import Writer from '../Writer';
import Sum from '../Sum'
import Mult from '../Mult';

describe("WriterMonad", () => {
    console.log(Writer, Writer.from(42).__proto__)
    describe("sinks", () => {
        it("should accumulate a mult value",() => {
            const writer = Writer.multSink();
            const fn = () => {
                tell(Mult.from(2))
                forward(21)
            }
            const result = Writer.runWriter(fn,writer)
            expect(result.get()).toStrictEqual(Mult.from(42))
        })

        it("should accumulate a sum value",() => {
            const writer = Writer.sumSink();
            const fn = () => {
                tell(Sum.from(21))
                forward(21)
            }
            const result = Writer.runWriter(fn,writer)
            expect(result.get()).toStrictEqual(Sum.from(42))
        })

        it("should receive writer as argument",() => {
            const writer = Writer.sumSink();
            const fn = (w) => {
                w.tell(Sum.from(21))
                w.forward(21)
            }
            const result = Writer.runWriter(fn,writer)
            expect(result.get()).toStrictEqual(Sum.from(42))
        })

        it("should accumulate an array value",() => {
            const writer = Writer.arraySink();
            const fn = () => {
                tell([20])
                forward(21)
            }
            const result = Writer.runWriter(fn,writer)
            expect(result.get()).toStrictEqual([20,21])
        })

        it("should run over a sequence of functions", () => {
            const writer = Writer.sumSink();
            const fn = () => forward(7);
            const result = Writer.runSeq([fn,fn,fn,fn,fn,fn],writer)
            expect(result.get()).toStrictEqual(Sum.from(42))
        })

        it("flush should return the writer unchanged", () => {
            const writer = Writer.sumSink();
            const fn = () => forward(7);
            const result = Writer.runSeq([fn,fn,fn,fn,fn,fn],writer)
            expect(result.flush().get()).toStrictEqual(Sum.from(0))
        })

        it("chain computes value", () => {
            const writer = Writer.sumSink();
            const fn = () => forward(7);
            const result = Writer.runSeq([fn,fn,fn,fn,fn,fn],writer)
            expect(result.get()).toStrictEqual(Sum.from(42))
        })
    })
    describe("constructors", () => {
        it("return a writer on any monoid value", () => {
            expect(Writer.from(Sum.from(42))).toTypeMatch("Writer")
        })
    })
})