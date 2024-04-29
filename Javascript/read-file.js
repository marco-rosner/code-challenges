const fs = require('node:fs')
const fsPromises = require('node:fs/promises')

const readFile = (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        console.log(data)
    })
}

const readFileSync = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf8')
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}

const readFilePromises = async (path) => {
    try {
        const data = await fsPromises.readFile(path, { encoding: 'utf8' })
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}

readFile('iife.js')
readFileSync('iife.js')
readFilePromises('iife.js')