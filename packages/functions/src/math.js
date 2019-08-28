import { curry, compose, pipe } from './core'
import { length, reduce } from './array';

export const add = curry((a,b) => b + a);
export const sub = curry((a,b) => b - a)
export const mult = curry((a,b) => b * a)
export const div = curry((a,b) => b / a)
export const mod = curry((a,b) => b % a)
export const pow = curry((a,b) => b ** a)
export const gte = curry((a,b) => a >= b)
export const gt = curry((a,b) => a > b)
export const lte = curry((a,b) => a <= b)
export const lt = curry((a,b) => a < b)
export const eq = curry((a,b) => a === b)
export const eqBy = curry((f,a,b) => eq(f(a),f(b)) )

export const isEven = pipe( mod(2) , eq(0) );
export const isOdd = pipe( mod(2) , eq(1) );
export const half = div(2);
export const floor = x => Math.floor(x)
export const ceil = x => Math.ceil(x)
export const inverse = mult(-1);

export const inc = a => a+1;
export const dec = a => a-1;

export const mean = arr => compose(compose(div,length)(arr) , reduce(add) )(arr);
