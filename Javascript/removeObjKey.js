const removeKey = (key, obj) => {
    const { [key]: ommitted, ...res } = obj
    
    return res
}

console.log(removeKey('bar', {'key': 1, 'bar': 2}))

const deleteKey = (key, obj) => {
    delete obj[key]

    return obj
}

console.log(removeKey('key', {'key': 1, 'bar': 2}))