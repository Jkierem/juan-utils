function transmorphDefinition(creator,f){
    return this.map(f).morph(creator)
}

export const makeTransmorpheable = (obj) => {
    obj.transmorph = transmorphDefinition.bind(obj)
    return obj
}

export const makeAppliable = (crt) => {
    crt.from = (data) => crt.of(...data)
    return crt
}