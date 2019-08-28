/**
 * @description Logging levels available (All < Debug < Info < Warn < Error < Fatal < Off)
 */
export const Levels = {
    "All": 0,
    "Debug": 1,
    "Info": 2,
    "Warn": 3,
    "Error": 4,
    "Fatal": 5,
    "Off": 6,
}

const defaultLevel = Levels.All

/**
 * @typedef {(...args:any[]) => any} OutChannel
 * @typedef {{
 *  All: (...args:any[]) => void, 
 *  Debug: (...args:any[]) => void,
 *  Info: (...args:any[]) => void,
 *  Warn: (...args:any[]) => void,
 *  Error: (...args:any[]) => void,
 *  Fatal: (...args:any[]) => void,
 *  Off: (...args:any[]) => void 
 *  log: (...args:any[]) => void
 *  setLevel: (level:number) => void , 
 *  setOutput: (out: (...args:any[]) => any ) => void , 
 * }} Logger
 * @description A simple logger. Log calls do not return anything. A log call will send the message to the out channel if the level of the call is higher or equal to the current level of the logger. The return of the out channel is ignored. 
 * @param {number} [initLevel=0] initial logging level. Defaults to Levels.All
 * @param {OutChannel} [initOut=console.log] initial output function for logging. Defaults to console.log
 * @returns {Logger} new Logger object
 */
export const createLogger = (initLevel = defaultLevel, initOut = console.log) => {
    let currentLevel = initLevel
    let out = initOut;
    const logger = {}
    Object.keys(Levels).forEach(
        key => {
            logger[key] = (...args) => {
                if (Levels[key] >= currentLevel) {
                    out(`${key}:`, ...args);
                }
            }
        }
    )
    /**
     * @description Does nothing. It is an empty nullary function. Never logs.
     */
    logger.Off = () => { }
    /**
     * @description changes the current level of a logger
     * @param {number} level new level
     */
    logger.setLevel = (level) => {
        currentLevel = level;
    }
    /**
     * @description changes the output channel a logger uses
     * @param {OutChannel} newOut new out channel to be used
     */
    logger.setOutput = (newOut) => {
        out = newOut;
    }
    /**
     * @description Bypasses levels unless level is set to Levels.Off
     */
    logger.log = (...args) => {
        if (currentLevel !== Levels.Off) {
            out(...args)
        }
    }
    return logger;
}

/**
 * @typedef {(message) => any} UnaryOutChannel
 * @typedef {{
 *  All: (message: any) => any, 
 *  Debug: (message: any) => any,
 *  Info: (message: any) => any,
 *  Warn: (message: any) => any,
 *  Error: (message: any) => any,
 *  Fatal: (message: any) => any,
 *  Off: (message: any) => any,
 *  log: (message: any) => any 
 *  setLevel: (level:number) => void , 
 *  setOutput: (out: (message: any) => any) => void , 
 * }} IdentityLogger
 * @description a logger that returns what it receives. All logging functions are unary. A log call will send the message to the out channel if the level of the call is higher or equal to the current level of the logger. The return of the out channel is ignored.
 * @param {number} [initLevel=0] initial logging level. Defaults to Levels.All
 * @param {UnaryOutChannel} [initOut=console.log] initial output function for logging. Defaults to console.log
 * @returns {IdentityLogger} new PipeLogger object
 */
export const createIdentityLogger = (initLevel = defaultLevel , initOut = console.log) => {
    let currentLevel = initLevel
    let out = initOut;
    const logger = {}
    Object.keys(Levels).forEach(
        key => {
            logger[key] = (message) => {
                if (Levels[key] >= currentLevel) {
                    out(`${key}: ${message}`);
                }
                return message;
            }
        }
    )
    /**
     * @description Works like identity function. Never logs.
     * @param {any} message
     * @returns {any} returns what was received
     */
    logger.Off = message => message
    /**
     * @description changes the current level of a logger
     * @param {number} level new level
     */
    logger.setLevel = (level) => {
        currentLevel = level;
    }
    /**
     * @description changes the output channel a logger uses
     * @param {OutChannel} newOut new out channel to be used
     */
    logger.setOutput = (newOut) => {
        out = newOut;
    }
    /**
     * @description Bypasses levels unless level is set to Levels.Off
     * @param {any} message what is to be printed
     * @returns {any} returns exactly what it received
     */
    logger.log = (message) => {
        if (currentLevel !== Levels.Off) {
            out(message)
        }
        return message
    }
    return logger;
}