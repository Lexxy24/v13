const fs = require('fs-extra')
const { color } = require('./color')

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

function nocache(module, cb = () => { }) {
    console.log(color('Module', 'green'), color(`'${module} By Lexxy Official'`, 'cyan'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
