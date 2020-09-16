import { equals as eq } from "ramda"
import { getVariant } from "../_internals"

const Eq = ({ trivials, empties, overrides }) => (cases) => {
    function trivialEquals(other){
        return getVariant(this) === getVariant(other) && eq(this.get(), other.get())
    }
    function emptyEquals(other){
        return getVariant(this) === getVariant(other)
    }
    trivials.forEach(trivial => {
        const equals = overrides?.equals?.[trivial] || trivialEquals
        cases[trivial].prototype.equals = equals
    })
    empties.forEach(empt => {
        const equals = overrides?.equals?.[empt] || emptyEquals
        cases[empt].prototype.equals = equals
    })
}

export default Eq;