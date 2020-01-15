declare module "@juan-utils/state" {
  
  // Common types 
  export type Key = string | number | symbol;
  export type Getter<A = any> = () => A;
  export type Setter<A = any> = (nextState: A) => void;
  export type EmitEvent<A = any> = (event: any) => void;

  export type Actions = {
    [key: string]: (data: any, ...arg: any[]) => any;
  };

  // State functions

  export type ObservableConfig = {
    init: any;
    onGet: (state: any) => void;
    mapGet: (state: any) => any;
    onSet: (state: any) => void;
    mapSet: (state: any) => any;
  };

  export function useState(initialValue: any): [Getter, Setter];
  export function useObservable(config: ObservableConfig): [Getter, Setter];

  // Machine types

  export type Transition = {
    id: any;
  };

  export type StateData = {
    id: any;
    transitions: Transition[];
    data: any;
  };

  export type MachineConfig = {
    states: StateData[];
    initial: number;
    onChange: (next: State) => void;
    comparer: (a: Transition, b: Transition) => boolean;
  };

  export type State = {
    id: any;
    transitions: Transition[];
    find: (f: (transition: any) => boolean) => any;
  };

  export function compare(a: any, b: any): boolean;
  export function compare(a: any): (b: any) => boolean;
  export function State(id: any, transition: any[], data: any): State;
  export function useMachine(config: MachineConfig): [Getter, EmitEvent];

  // Timeline types

  export function useTimeline<T = any>(
    onEvent: (event: any, past: T[]) => T
  ): [Getter<T[]>, EmitEvent];

  // Timemachine types

  export function useTimemachine(
    config: MachineConfig
  ): [Getter<any[]>, EmitEvent];

  // Entity types

  export function useEntity(
    initialValue: any,
    actions: Actions
  ): [Getter, Actions];

  // Immutable types
  
  export type ImmutableTuple<T> = [
    <A extends keyof T>(key: A) => T[A] ,
    <A>(key: Key, value: A) => ImmutableTuple<A> ,
    () => T
  ]

  export type ImmutableObject<T> = {
    set: <A>(key: Key, value: A) => ImmutableObject<A> ;
    get: <A extends keyof T>(key: A) => T[A] ;
    toMutable: () => T
  }

  export function createImmutable<T>( obj: T ): ImmutableObject<T>;
  export function useImmutable<T>(value: T): ImmutableTuple<T>

  // Store types
  export type Action = { type?: any }
  export type Dispatch = (action: Action) => void;
  export type Reducer<State> = (prevState: State, action: Action) => State
  export type StoreCreator<State> = (reducer: Reducer<State>, initialState: State) => Store<State>
  export type Enhancer<State> = (create: StoreCreator<State>) => StoreCreator<State>
  export type Unsubscribe = () => void
  export type Subscribe = (listener: () => void) => Unsubscribe
  export type ReplaceReducer<T> = (newReducer: Reducer<T>) => void
  export type Middleware<T> = (store: Store<T>) => (next: (action:Action) => void ) => (action: Action) => void;
  
  export type Store<T> = {
    getState: Getter<T>;
    dispatch: Dispatch;
    subscribe: Subscribe; 
    replaceReducer: ReplaceReducer<T>;
  }

  export type StoreTuple<T> = [
    Getter<T>,
    Dispatch,
    Subscribe,
    ReplaceReducer<T>
  ]

  export function useStore<State>( reducer: Reducer<State>, initialState: State, enhancer: Enhancer<Store<State>>): StoreTuple<State>

  export function combineReducers<T>(...reducers: Reducer<T>[]): Reducer<T>;
  export function applyMiddleware<T>(...middleware: Middleware<T>[]): Enhancer<T>

  // Transactional types

  export type CommitHandler<T> = (data: T) => void;

  export type Transactional<T> = {
    set: <K extends keyof T>(key: K, value: T[K]) => Transactional<T>;
    get: (key: string) => any;
    commit: (handler?: CommitHandler<T>) => Transactional<T>;
    rollback: () => void;
  }

  export function createTransactional<T>( initialValue: T, onCommit: CommitHandler<T> ): Transactional<T>
}
