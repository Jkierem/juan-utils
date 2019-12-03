import { curry2 as curry, compose, pipe, curry3 } from './core'
import { length, reduce } from './array';

export const add = curry((a,b) => b + a);
export const sub = curry((a,b) => b - a)
export const mult = curry((a,b) => b * a)
export const div = curry((a,b) => b / a)
export const mod = curry((a,b) => b % a)
export const pow = curry((a,b) => b ** a)
export const gte = curry((a,b) => b >= a)
export const gt = curry((a,b) => b > a)
export const lte = curry((a,b) => b <= a )
export const lt = curry((a,b) => b < a)
export const eq = curry((a,b) => a === b)
export const neq = curry((a,b) => a !== b)
export const eqBy = curry3((f,a,b) => eq(f(a),f(b)) )
export const min = (a,b) => a < b ? a : b;
export const max = (a,b) => a > b ? a : b;

export const isEven = pipe( mod(2) , eq(0) );
export const isOdd = pipe( mod(2) , eq(1) );
export const half = div(2);
export const floor = Math.floor
export const ceil = Math.ceil
export const abs = x => x < 0 ? -x : x
export const inverse = mult(-1);

export const toDegrees = rads => (rads*180)/Math.PI;
export const toRadians = degs => (degs*Math.PI)/180;

export const inc = add(1);
export const dec = sub(1);

export const mean = arr => compose(compose(div,length)(arr) , reduce(add,0) )(arr);
export const random = limit => Math.random() * limit
export const integerRandom = compose( Math.floor , random );