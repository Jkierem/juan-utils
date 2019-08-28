import { belongs, filter } from './array';
import { not, keysOf } from './logic';

export const pick = curry((keys, obj) => keys.reduce((prev, next) => ({ ...prev, [next]: obj[next] }), {}))
export const diff = curry((a, b) => filter(not(belongs(b)))(a))
export const omit = curry((keys, obj) => pick(diff(keysOf(obj), keys), obj))
