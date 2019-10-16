declare module "@juan-utils/state" {
  export type Getter<A = any> = () => A;
  export type Setter<A = any> = (nextState: A) => void;
  export type EmitEvent<A = any> = (event: any) => void;

  export type State = {
    id: any;
    transitions: Transition[];
    find: (f: (transition: any) => boolean) => any;
  };

  export type Transition = {
    id: any;
  };

  export type StateData = {
    id: any;
    transitions: Transition[];
    data: any;
  };

  export type ObservableConfig = {
    init: any;
    onGet: (state: any) => void;
    mapGet: (state: any) => any;
    onSet: (state: any) => void;
    mapSet: (state: any) => any;
  };

  export type MachineConfig = {
    states: StateData[];
    initial: number;
    onChange: (next: State) => void;
    comparer: (a: Transition, b: Transition) => boolean;
  };

  export function useState(initialValue: any): [Getter, Setter];
  export function useObservable(config: ObservableConfig): [Getter, Setter];

  export function compare(a: any, b: any): boolean;
  export function compare(a: any): (b: any) => boolean;
  export function State(id: any, transition: any[], data: any): State;
  export function useMachine(config: MachineConfig): [Getter, EmitEvent];

  export function useTimeline<State = any>(
    onEvent: (event: any, past: State[]) => State
  ): [Getter<State[]>, EmitEvent];

  export function useTimemachine(
    config: MachineConfig
  ): [Getter<any[]>, EmitEvent];
}
