const Monoid = ({ cero, trivials, identities, overrides }) => (cases,globals) => {
    trivials.forEach(trivial => {
        function trivMappend(m){
            return m.match({
                [trivial]: () => new cases[trivial](this.get().concat(m.get())),
                _: () => this
            })
        }
        const mappend = overrides?.mappend?.[trivial] || trivMappend
        cases[trivial].prototype.mappend = mappend
        cases[trivial].prototype.append = mappend
    })
    identities.forEach(empt => {
        function idMappend(m){
            return m
        }
        const mappend = overrides?.mappend?.[empt] || idMappend
        cases[empt].prototype.mappend = mappend
        cases[empt].prototype.append = mappend
    })
    Object.keys(cases).forEach(key => {
        cases[key].prototype.empty = function(){ return new cases[cero]() }
    })
    globals.empty = function(){ return new cases[cero]() }
}

export default Monoid