const fs = require('fs').promises // mesma coisa de const {promisify} = require('util') const readFile = promisify(require('fs').readFile)

async function read(){
    const data = await fs.readFile('texto.txt', 'binary') // le em binario e o transforma em tostring
    return data.toString()
}

try{
    read().then(console.log)
}
catch(e){
    throw e
}