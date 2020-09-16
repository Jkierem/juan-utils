const Semigroup = ({ trivials, identities, overrides }) => (cases) => {
    trivials.forEach(trivial => {
        function trivialConcat(m){
            return m.match({
                [trivial]: () => new cases[trivial](this.get().concat(m.get())),
                _: () => this
            })
        }
        const concat = overrides?.concat?.[trivial] || trivialConcat
        cases[trivial].prototype.concat = concat
    })
    identities.forEach(empt => {
        function idConcat(m){
            return m
        }
        const concat = overrides?.concat?.[empt] || idConcat
        cases[empt].prototype.concat = concat
    })
}

export default Semigroup;