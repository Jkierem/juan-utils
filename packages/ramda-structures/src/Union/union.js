import { fromPairs, toPairs } from 'ramda'
import { setType, setInnerValue, getInnerValue, setVariant, extractWith, getVariant, getCase } from '../_internals'
import Functor from './functor'
import Show from './show'

const mapObj = fn => obj => fromPairs(toPairs(obj).map(fn))

const Box = (cases) => {
    Object.keys(cases).forEach((trivial,idx,keys) => {
        cases[trivial].prototype.get = function(fn){
            return getInnerValue(this)
        }
        cases[trivial].prototype.match = function(patterns){
            return extractWith([this.get()])(getCase(getVariant(this),patterns));
        }
        cases[trivial].prototype[`on${trivial}`] = function(fn){
            return extractWith([this.get()])(fn)
        }
        cases[trivial].prototype[`is${trivial}`] = function(){
            return true
        }
        keys.filter(x => x !== trivial).forEach( key => {
            cases[trivial].prototype[`is${key}`] = function(){
                return false
            }
            cases[trivial].prototype[`on${key}`] = function(fn) {
                return this.get()
            }
        })
    })
}

const Union = (name, cases, exts) => {
    const mappedCases = mapObj(([key,val]) => {
        return [key , function(...args){
            setType(this,name)
            setVariant(this,key)
            setInnerValue(this,val(...args))
        }]
    })(cases)
    const extensions = [ Box, ...exts ]
    const globals = {}
    extensions.forEach(fn => fn(mappedCases,globals))
    const trueCases = mapObj(([key,value]) => [key, (...args) => new value(...args)])(mappedCases)
    return {
        constructors(cons){
            return {
                ...trueCases,
                ...globals,
                ...mapObj(([key,fn]) => [key,fn.bind(trueCases)])(cons)
            }
        }
    }
}

export const NewType = (name) => Union(name,
    { [name]: x => x },
    [
        Functor({ trivials: [ name ], identities:[] }),
        Show({ overrides:{
                show: { 
                    [name](){ 
                        return `[NewType => ${name} ${this.get()}]`
                    }
                }
            }
        })
    ]).constructors({ from(...args){ return this[name](...args) }})

export default Union;