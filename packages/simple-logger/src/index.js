export const Levels = {
    "All": 6,
    "Debug": 5,
    "Info": 4,
    "Warn": 3,
    "Error": 2,
    "Fatal": 1,
    "Off": 0,
}

const defaultLevel = Levels.All

const createLogger = (initLevel = defaultLevel, out = console.log) => {
    let currentLevel = initLevel
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
    logger.setLevel = (level) => {
        currentLevel = level;
    }
    logger.log = (...args) => src {
        if (currentLevel) {
            out(...args)
        }
    }
    return logger;
}

export default createLogger;