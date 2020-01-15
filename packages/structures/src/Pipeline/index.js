import { compose, identity } from "@juan-utils/functions";
import { makeTransmorpheable } from "../fp/helpers";

const Pipeline = (src) => {
    let trans = src || identity
    const o = {
        get __class__(){
            return "Pipeline"
        },
        get(){
            return trans()
        },

        // Functor
        map(f){
            trans = compose( f , trans )
            return this;
        },

        // Morpheable
        morph(creator){
            return creator.of(this.get());
        },
    }
    return makeTransmorpheable(o);
}

Pipeline.of = Pipeline;
Pipeline.from = (srcArray) => Pipeline(...srcArray);

export { 
    Pipeline
};