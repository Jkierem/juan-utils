const Swap = ({ left, right, overrides }) => (cases) => {
    function triviallswap(){
        return new cases[right](this.get())
    }
    function trivialrswap(){
        return new cases[left](this.get())
    }
    const lswap = overrides?.swap?.[left]  || triviallswap
    const rswap = overrides?.swap?.[right] || trivialrswap
    cases[left].prototype.swap = lswap
    cases[right].prototype.swap = rswap
}

export default Swap