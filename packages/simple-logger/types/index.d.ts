declare module "@juan-utils/simple-logger" {
    export interface Levels {
        All: 0;
        Debug: 1;
        Info: 2;
        Warn: 3;
        Error: 4;
        Fatal: 5;
        Off: 6;
    }

    export type Level = "All" | "Debug" | "Info" | "Warn" | "Error" | "Fatal" | "Off"

    export interface OutChannel {
        (...args: any[]): any
    }

    export interface UnaryOutChannel {
        (message: any): any
    }

    export interface GroupOutChannel {
        group: (name: string) => void;
        groupEnd: () => void;
        log: UnaryOutChannel;
    }

    export type Suffix = string | ((level:Level, message: any) => string);

    export interface Logger {
        All: (...args:any[]) => void;
        Debug: (...args:any[]) => void;
        Info: (...args:any[]) => void;
        Warn: (...args:any[]) => void;
        Error: (...args:any[]) => void;
        Fatal: (...args:any[]) => void;
        Off: (...args:any[]) => void;
        log: (...args:any[]) => void;
        setLevel: (level:number) => void; 
        setOutput: (out: (...args:any[]) => any ) => void;
    }

    export interface IdentityLogger {
        All: (message: any) => any;
        Debug: (message: any) => any;
        Info: (message: any) => any;
        Warn: (message: any) => any;
        Error: (message: any) => any;
        Fatal: (message: any) => any;
        Off: (message: any) => any;
        log: (message: any) => any;
        setLevel: (level:number) => void;
        setOutput: (out: (message: any) => any) => void;
    }

    export interface IdentityGroupLogger {
        All: (message: any | any[], temporalSuffix: Suffix) => any;
        Debug: (message: any | any[], temporalSuffix: Suffix) => any;
        Info: (message: any | any[], temporalSuffix: Suffix) => any;
        Warn: (message: any | any[], temporalSuffix: Suffix) => any;
        Error: (message: any | any[], temporalSuffix: Suffix) => any;
        Fatal: (message: any | any[], temporalSuffix: Suffix) => any;
        Off: (message: any | any[], temporalSuffix: Suffix) => any;
        log: (message: any | any[], temporalSuffix: Suffix) => any;
        setLevel: (level:number) => void;
        setOutput: (out: (message: any) => any) => void;
        setSuffix: (suffix: Suffix) => void;
    }

    export function createLogger(initialLevel?: Level, initialOutChannel?: OutChannel );
    export function createLogger(initialLevel?: number, initialOutChannel?: OutChannel );

    export function createIdentityLogger(initialLevel?: Level, initialOutChannel?: UnaryOutChannel );
    export function createIdentityLogger(initialLevel?: number, initialOutChannel?: UnaryOutChannel );

    export function createIdentityGroupLogger(initialLevel?: Level, initialOutChannel?: GroupOutChannel);
    export function createIdentityGroupLogger(initialLevel?: number, initialOutChannel?: GroupOutChannel);
}