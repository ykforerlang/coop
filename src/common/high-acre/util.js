function updateKeys(keyArray, nobj, newValue) {
    if (keyArray.length > 0) {
        const key = keyArray.shift()

        const tmpObjNew = updateKeys(keyArray,  nobj[key], newValue)
        return {
            ...nobj,
            [key]: tmpObjNew
        }
    } else {
        return {
            ...nobj,
            ...newValue
        }
    }
}

function setKeys(keyArray, nobj, newValue) {
    if (keyArray.length > 0) {
        const key = keyArray.shift()
        const tmpObjNew = setKeys(keyArray,  nobj[key], newValue)
        console.log('tmp:', tmpObjNew)
        return {
            ...nobj,
            [key]: tmpObjNew
        }
    } else {
        return newValue
    }
}

export function updateStateWithKeys(keys, state, newValue) {
    const keyArray = Array.isArray(keys) ? keys : [keys]

    if (typeof newValue !== 'object') {
        console.warn('new value is not a object, will use setStateWithKeys')
        return setStateWithKeys(keyArray, state, newValue)
    }

    try {
        return updateKeys(keyArray, state, newValue)
    } catch (e) {
        console.error(e)
        return state
    }
}

export function setStateWithKeys(keys, state, newValue) {
    const keyArray = Array.isArray(keys) ? keys : [keys]

    try {
        return setKeys(keyArray, state, newValue)
    } catch (e) {
        console.error(e)
        return state
    }
}

export function deleteStateWithKeys(keyArray, state) {
    return setStateWithKeys(keyArray, state, undefined)
}