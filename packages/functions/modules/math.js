import { curry2 as curry, compose, pipe } from './core'
import { length, reduce } from './array';
import { not } from './logic'

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
export const neq = not(eq);
export const eqBy = curry((f,a,b) => eq(f(a),f(b)) )
export const min = (a,b) => a < b ? a : b;
export const max = (a,b) => a > b ? a : b;

export const isEven = pipe( mod(2) , eq(0) );
export const isOdd = pipe( mod(2) , eq(1) );
export const half = div(2);
export const floor = x => Math.floor(x)
export const ceil = x => Math.ceil(x)
export const abs = x => x < 0 ? -1*x : x
export const inverse = mult(-1);

export const toDegrees = rads => (rads*180)/Math.PI;
export const toRadians = degs => (degs*Math.PI)/180;

export const inc = a => a+1;
export const dec = a => a-1;

export const mean = arr => compose(compose(div,length)(arr) , reduce(add) )(arr);
export const random = limit => Math.random() * limit
export const integerRandom = limit => Math.floor(random(limit))