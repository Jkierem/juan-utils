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
    /**
     * @description changes the current level of a logger
     * @param {number} level new level
     */
    logger.setLevel = (level) => {
        currentLevel = level;
    }
    /**
     * @description changes the output channel a logger uses
     * @param {(...any) => void} output new out channel to be used;
     */
    logger.setOutput = (newOut) => {
        out = newOut;
    }
    /**
     * @description Bypasses levels unless level is set to Levels.Off
     */
    logger.log = (...args) => {
        if (currentLevel) {
            out(...args)
        }
    }
    return logger;
}

export default createLogger;