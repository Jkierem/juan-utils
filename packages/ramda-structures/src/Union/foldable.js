const Foldable = ({ overrides }) => (cases) => {
    Object.keys(cases).forEach((key) => {
        cases[key].prototype.fold = overrides?.fold?.[key]
    })
}

export default Foldable