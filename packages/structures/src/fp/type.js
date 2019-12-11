import { keysOf, belongs, prop, isFunction, union, True, diverge, identity, compose } from "@juan-utils/functions";

const Checker = (type) => (creator) => {
    const { attributes: attrs , methods, rep, test } = type;
    const obj = creator();
    const propOf = obj => x => prop(x,obj);
    return union(attrs,methods).every(belongs(keysOf(obj)))
    && methods.every(compose(isFunction, propOf(obj)))
    && rep.every(compose( isFunction , propOf(creator)))
    && test(creator);
}

const Type = (id="[Nothing]",attributes=[],methods=[],rep=[],test=True) => {
    const type = {
        attributes,
        methods,
        rep,
        test,
        id
    }
    type.extend = (id,attr,meths,reps) => Type( id, union(attributes,attr) , union(methods,meths), union(rep,reps));
    type.inherit = (id,meths,reps=[]) => Type( id, attributes, union(methods,meths), union(rep,reps));
    type.is = Checker(type);
    return type;
}

Type.combine = (id,types) => types.reduce( (prev,next) => prev.extend(id,...diverge(identity, [ prop("attributes"), prop("methods"), prop("rep") ])(next)) , Type());
Type.is = (type, creator) => type.is(creator);

export { Type }