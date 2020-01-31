const _Error = (value) => {
    return {
        get __class__(){
            return "Error"
        },
        map: (f) => _Error(value),
        get: () => value,
        isOk: () => false,
        isError: () => true,
        onError: (f) => f(value),
    }
}

const Ok = (value) => {
    return {
        get __class__(){
            return "Ok"
        },
        map: (f) => Ok(f(value)),
        get: () => value,
        isOk: () => true,
        isError: () => false,
        onError: (f) => value,
    }
}

const Result = {
    Error: _Error,
    Ok
}

Result.fromError = (e) => e instanceof Error ? _Error(e) : Ok(e);

export { Result }