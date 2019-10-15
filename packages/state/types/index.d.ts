declare module "@juan-utils/state" {
  export type Getter<A = any> = () => A;
  export type Setter<A = any> = (nextState: A) => void;
  export type State = {
    getState: Getter;
    setState: Setter;
  };

  export type ObservableConfig = {
    init: any;
    onGet: (state: any) => void;
    mapGet: (state: any) => any;
    onSet: (state: any) => void;
    mapSet: (state: any) => any;
  };

  export function useState(initialValue: any): [Getter, Setter];
  export function createState(initialValue: any): State;
  export function useObservable(config: ObservableConfig): [Getter, Setter];
}
