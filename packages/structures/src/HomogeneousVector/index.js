import { map, mult, reduce, add } from "@juan-utils/functions";
import { makeTransmorpheable, makeAppliable } from "../fp/helpers";

let HomogenousVector = (...values) => {
    const data = values;
    const o = {
        get __class__(){
            return "HomogenousVector"
        },
        get x(){ return this.getValue(0) },
        get y(){ return this.getValue(1) },
        get z(){ return this.getValue(2) },
        scale(s){ return HomogenousVector.from(map(mult(s),data)) },
        add(v){ return this.map( (value,index) => v.getValue(index) + value )},
        sub(v){ return this.map( (value,index) => value - v.getValue(index) )},
        mult(v){ return this.map( (value,index) => v.getValue(index) * value )},
        mod(){ return Math.sqrt(data.map(x => x*x).reduce((acc,next) => acc + next ,0)) },
        normalize(i=1){ return this.map(v => v/this.mod()).scale(i) },
        distance(v){ return this.sub(v).mod() },
        toArray(){ return data },
        elevate(n){ return HomogenousVector.of(...data , n) },
        toString(){ return `[${data}]` },
        getValue(i){ return data[i] || 1 },
        
        // Foldable
        reduce(f,init){ return reduce(f,init)(data) },
        // Container
        get(){ return data  },
        open(f){ return this.map(f).get() },
        // Functor
        map(f){ return HomogenousVector.from(data.map(f)) },
        // Morpheable
        morph(creator){ return creator.of(data) },
    }
    return makeTransmorpheable(o)
}

HomogenousVector.of = HomogenousVector;
HomogenousVector = makeAppliable(HomogenousVector);

export { HomogenousVector }