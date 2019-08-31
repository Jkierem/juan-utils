import { isNil } from "@juan-utils/functions";

const JString = (value) => {
    const data = new String(value);

    data.toArray = function(){ return data.split("") };
    data.innerMap = function(f){ return JString(this.map(f).join("")) };
    data.reduce = function(f,init){ return this.toArray().reduce(f,init)}
    data.forEach = function(f){ this.toArray().forEach(f) }
    data.get = (i) => isNil(i) ? data.valueOf() : data.charAt(i);
    data.map = function(f){ return this.toArray().map(f) }
    data.open = function(f){ return this.map(f).get() }
    data.morph = function(of){ return of(data) };
    data.transmorph = function(of,f){ return of(f(data)) }

    return data;
}

JString.of = JString;

export { JString };
