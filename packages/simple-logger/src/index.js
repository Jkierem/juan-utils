/**
 * @description Logging levels available. All < Debug < Info < Warn < Error < Fatal < Off
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
 * @param {number} [initLevel=0] initial logging level. Defaults to Levels.All
 * @param {OutChannel} [initOut=console.log] initial output function for logging. Defaults to console.log
 * @returns {Logger} new Logger object
 */
const createLogger = (initLevel = defaultLevel, initOut = console.log) => {
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

export default createLogger;