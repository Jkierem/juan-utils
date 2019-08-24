# Simple Logger

Simple personal logger.

## Usage 

Log Levels:

| Level | Value |
|-------|-------|
| All | 0 |
| Debug | 1 |
| Info | 2 |
| Warn | 3 |
| Error | 4 |
| Fatal | 5 |
| Off | 6 |

A log call will be sent to the output channel if the current level of the logger is less or equal to the call level. Named log calls will prepend the level name to the message.

```javascript
import createLogger , { Levels } from '@juan-utils/simple-logger';

//createLogger :: ( level = Levels.All , out = console.log ) => logger
const logger = createLogger();

// logger[Level] :: (...any) => void
logger.All("Logged in every level config"); //All: Logged in every level config
logger.Debug("Logged in Debug or lower config"); //Debug: Logged in Debug or lower config
logger.Info("Logged in Info or lower config"); //Info: Logged in Info or lower config
logger.Warn("Logged in Warn or lower config"); //Warn: Logged in Warn or lower config
logger.Error("Logged in Error or lower config"); //Error: Logged in Error or lower config
logger.Fatal("Logged in Fatal or lower config"); //Fatal: Logged in Fatal or lower config
logger.Off("Never logs"); //
logger.log("Bypasses levels. Logs unless level is Off"); //Bypasses levels. Logs unless level is Off

// logger.setLevel :: (level:number) => void
logger.setLevel( Levels.All ); //Changes level.
// logger.setOutput :: (out: f :: (...any) => void ) => void
logger.setOutput( console.log ); //Changes output channel. 
```