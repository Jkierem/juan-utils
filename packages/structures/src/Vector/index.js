import { map, compose, call, mult, isNil, reduce, add } from "@juan-utils/functions";

const Vector = (...values) => {
    const data = values;
    return {
        get x(){ return this.get(0) },
        get y(){ return this.get(1) },
        scale(s){ return Vector(...map(mult(s),data)) },
        add(v){ return this.map( (value,index) => v.get(index) + value )},
        sub(v){ return this.map( (value,index) => value - v.get(index) )},
        mult(v){ return this.map( (value,index) => v.get(index) * value )},
        mod(){ return Math.sqrt(reduce(add)(data)) },
        _normalize(i=1){ return this.scale(this.mod()).scale(i) },
        normalize(i=1){ this._normalize()._normalize(i) },
        distance(v){ return this.sub(v).mod() },
        toArray(){ return data },
        elevate(n){ return Vector(...data , n) },

        reduce(f,init){ return reduce(f,init)(data) },
        toString(){ return `${data}` },

        get(i){ return isNil(i) ? data : (data[i] || 0)  },
        map(f){ return Vector(...map(f,data)) },
        open(f){ return compose( call("get") , map(f) )(this) },
        morph(of){ return of(data) },
        transmorph(of,f){ return compose( of , f )(data) },
    }
}

Vector.of = Vector;

export { Vector }