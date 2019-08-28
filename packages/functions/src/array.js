export const length = x => x.length;
export const createArray = (...args) => args;
export const map = f => data => data.map(f);
export const filter = f => data => data.filter(f);
export const reduce = (...args) => data => data.reduce(...args);
export const isEmpty = arr => length(arr) == 0

export const head = ([head]) => head
export const tail = ([, ...tail]) => tail
export const reverse = (arr) => arr.reduce((acc, obj) => [obj, ...acc], [])
export const binaryUnion = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);
export const union = (...arrs) => arrs.reduce(binaryUnion)

export const zip = (...arrs) => arrs.some(isEmpty) ? [] : [arrs.map(head), ...zip(...arrs.map(tail))]

export const inclusiveZip = (...arrs) => arrs.every(isEmpty) ? [] : [[...arrs.map(head)], ...inclusiveZip(...arrs.map(tail))]