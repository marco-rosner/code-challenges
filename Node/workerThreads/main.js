const { Worker } = require('worker_threads')

const runService = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./service.js', { workerData })
        worker.on('message', resolve)
        worker.on('error', reject)
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`))
        })
    })
}

const main = async () => {
    const result = await runService('heavy computation data')
    console.log(result)
}

main().catch(err => console.error(err))

// To perform profilling
// node --prof main.js
// To process the result
// node --prof-process file1 file2 > processed-profile.txt