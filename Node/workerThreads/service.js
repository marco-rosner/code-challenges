const { parentPort, workerData } = require("worker_threads");

const heavyComputation = (data) => {
    let result = 0

    for (let i = 0; i < 1e6; i++) {
        result += i * Math.random();
    }

    return `processed result: ${result}. Its ${data}`
}

parentPort.postMessage(heavyComputation(workerData))