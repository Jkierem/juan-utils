import { getType, getVariant, getInnerValue } from "../_internals"

const Show = ({ overrides }) => (cases) => {
    Object.keys(cases).forEach(trivial => {
        function trivialShow(){
            return `[${getType(this)} => ${getVariant(this)} ${getInnerValue(this)}]`;
        }
        const show = overrides?.show?.[trivial] || trivialShow
        cases[trivial].prototype.show = show
        cases[trivial].prototype.toString = show
    })
}

export default Show