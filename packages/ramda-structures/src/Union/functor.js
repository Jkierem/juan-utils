import { includes } from "ramda"
import { splitBy } from "../_internals"

const Functor = ({ trivials, identities, overrides }) => (cases) => {
    trivials.forEach(trivial => {
        function trivialFmap(fn){
            return new cases[trivial](fn(this.get()))
        }
        const fmap = overrides?.fmap?.[trivial] || trivialFmap
        cases[trivial].prototype.fmap = fmap
        cases[trivial].prototype.map = fmap
    })
    identities.forEach(empt => {
        function idFmap(fn){
            return this
        }
        const fmap = overrides?.fmap?.[empt] || idFmap
        cases[empt].prototype.fmap = fmap
        cases[empt].prototype.map = fmap
    })
}

export const FunctorError = ({ errors , overrides }) => (cases) => {
    const [ lefts, rights ] = splitBy( c => !includes(c,errors), Object.keys(cases))
    lefts.forEach(left => {
        function trivialMapError(fn){
            return new cases[left](fn(this.get()))
        }
        const mapError = overrides?.mapError?.[left] || trivialMapError
        cases[left].prototype.mapError = mapError
    })

    rights.forEach(right => {
        function idMapError(){
            return this
        }
        const mapError = overrides?.mapError?.[right] || idMapError
        cases[right].prototype.mapError = mapError
    })
}

export default Functor;