import { compose, identity } from "@juan-utils/functions";

const Pipeline = (src) => {
    let trans = src || identity
    return {
        get(){
            return trans()
        },
        map(f){
            trans = compose( f , trans )
            return this;
        },
        morph(of){
            return of(this.get());
        }
    }
}

Pipeline.of = Pipeline

export { 
    Pipeline
};