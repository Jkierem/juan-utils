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
import { createLogger , Levels } from '@juan-utils/simple-logger';

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

This package contains a second logger type. The identity logger works just like the simple logger but all the functions receive only one argument and return the argument. Also the out function will only receive one argument.

```javascript
import { createIdentityLogger , Levels } from '@juan-utils/simple-logger';

//createIdentityLogger :: ( level = Levels.All , out = console.log ) => logger
const logger = createIdentityLogger();

// logger[Level] :: (message: any) => any
logger.All("Logged in every level config"); //logs and returns "All: Logged in every level config"
logger.Debug("Logged in Debug or lower config"); //logs and returns "Debug: Logged in Debug or lower config"
logger.Info("Logged in Info or lower config"); //logs and returns "Info: Logged in Info or lower config"
logger.Warn("Logged in Warn or lower config"); //logs and returns "Warn: Logged in Warn or lower config"
logger.Error("Logged in Error or lower config"); //logs and returns "Error: Logged in Error or lower config"
logger.Fatal("Logged in Fatal or lower config"); // logs and returns "Fatal: Logged in Fatal or lower config"
logger.Off("Never logs"); // returns "Never logs"
logger.log("Bypasses levels. Logs unless level is Off"); //Bypasses levels. Logs unless level is Off. returns "Bypasses levels. Logs unless level is Off"

// logger.setLevel :: (level:number) => void
logger.setLevel( Levels.All ); //Changes level.
// logger.setOutput :: (out: f :: (message: any) => void ) => void
logger.setOutput( console.log ); //Changes output channel. 
```

This package contains a third logger type. The identitiy group logger works just like the identity logger but the out channel must be an object with group, groupEnd and log functions. The default is console. Instead of simply printing in a single line, it prints groups with the name of the level. In case a suffix is wanted, a set suffix function is available. It may accept functions in case a suffix function is desired. The suffix function receives the level and message as parameters. In case a title suffix wants to be temporarily changed for a single message, the logging functions receive a second parameter to temporarily change the suffix

```javascript
import { createIdentityGroupLogger , Levels } from '@juan-utils/simple-logger';

//createIdentityLogger :: ( level = Levels.All , out = console.log ) => logger
const logger = createIdentityGroupLogger();

// logger[Level] :: (message: any, suffix: string | ((level,msg) => string)) => any
logger.All("Logged in every level config"); 
logger.Debug("Logged in Debug or lower config"); 
logger.Info("Logged in Info or lower config"); 
logger.Warn("Logged in Warn or lower config"); 
logger.Error("Logged in Error or lower config"); 
logger.Fatal("Logged in Fatal or lower config"); 
logger.Off("Never logs");
logger.log("Bypasses levels. Logs unless level is Off");

logger.All([
    "Many separate messages",
    "In a single group",
    "Can be passed as an Array",
    "Or anything with a forEach method"
])

// logger.setLevel :: (level:number) => void
logger.setLevel( Levels.All ); //Changes level.
// logger.setOutput :: (out: f :: (message: any) => void ) => void
logger.setOutput( console ); //Changes output channel. 
// logger.setSuffix :: (suffix: string ) => void
logger.setSuffix( "Some message is being logged" );
// logger.setSuffix :: (suffix: (level: string, message: any) => string ) => void
logger.setSuffix( () => "Some message is being logged" );
```