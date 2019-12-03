import { map, compose, mult, isNil, reduce, add } from "@juan-utils/functions";

const HomogeneousVector = (values) => {
    const data = values;
    return {
        scale(s){ return compose( HomogeneousVector , map(mult(s)))(data) },
        add(v){ return this.map( (value,index) => v.get(index) + value )},
        sub(v){ return this.map( (value,index) => v.get(index) - value )},
        mult(v){ return this.map( (value,index) => v.get(index) * value )},
        mod(){ return Math.sqrt(reduce(add)(data)) },
        _normalize(i=1){ return this.scale(this.mod()).scale(i) },
        normalize(i=1){ this._normalize()._normalize(i) },
        distance(v){ return this.sub(v).mod() },
        toArray(){ return this.get() },

        reduce(f,init){ return reduce(f,init)(data) },

        get(i){ return isNil(i) ? data : (data[i] || 1)  },
        map(f){ return compose( HomogeneousVector , map(f) )(data) },
        open(f){ return this.map(f).get() },
        morph(of){ return of(data) },
        transmorph(of,f){ return compose( of , f )(data) }
    }
}

HomogeneousVector.of = HomogeneousVector;

export { HomogeneousVector }