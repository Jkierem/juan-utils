const Functor = (data) => ({ 
    get: () => data,
    map: f => Functor(f(data)),
    open: (f) => f(data),
    morph: (of) => of(data),
    transmorph: (of,f) => of(f(data)),
});

Functor.of = Functor;

export { Functor };