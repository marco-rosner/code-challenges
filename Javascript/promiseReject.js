const promiseReject = () => Promise.reject()

promiseReject() // Expected: Catch 1, Then 2
    .then(() => console.log('Then 1'))
    .catch(() => console.log('Catch 1'))
    .then(() => console.log('Then 2'))
    .catch(() => console.log('Catch 2'))
