# Functions

Package with standalone functions. Functions are divided into modules but exported as a single module. As of writing this, typescript typings are included. Documentation comming soon...

## Core

Support functions for other packages. Includes:

- curry2
- curry3
- identity
- justOf
- prop
- propMap
- path
- keysOf
- memo
- memoBy
- pipe
- compose
- log
- cardinal
- flip
- call
- bind
- apply
- take
- takeOrdinal
- takeFirst
- takeSecond
- takeThird
- callWith
- applyWith

## Lens

small module with a lens that meets the lens laws. Includes:

- lens
- view
- set
- over

## Array

module with array functions. All functions are iteratee first, data second. Includes:

- length
- createArray
- map
- filter
- reduce
- isEmpty
- belongs
- head
- tail
- reverse
- binaryUnion
- union
- difference
- zip
- inclusiveZip
- flatten
- range
- repeat

## Logic

Includes:

- True
- False
- extract
- not
- and
- or
- allPass
- anyPass
- nonePass
- conditional
- defaultTo
- unless
- until

## Math

Includes:

- add
- sub
- mult
- div
- mod
- pow
- gte
- gt
- lte
- lt
- eq
- neq
- eqBy
- min
- max
- isEven
- isOdd
- half
- floor
- ceil
- abs
- inverse
- toDegrees
- toRadians
- inc
- dec
- mean
- random
- integerRandom

## Object

Includes:

- mapKeys
- mapValues
- pick
- diff
- omit
- strip
- entries
- fromEntries
- clone
- deepClone

## Types

Includes:

- shareConstructor
- typeEquals
- isInstanceOf
- isFunction
- isObject
- isArray
- isNil
- isDefined
- isNaN
- asymEquals
- shallowEquals
- equals
- multiEquals
- multiShallowEquals