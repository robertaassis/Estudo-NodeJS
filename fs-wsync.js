// arquivo nao bloqueante, scripts trabalhando em conjunto

const fs = require('fs') // file system

console.log((process.hrtime()[0]/60).toFixed(5))
console.log( "Antes da leitura do arquivo")

const dados = fs.readFile('file.txt', (err, data) => { // tira o Sync, enquanto vc tiver executando o file, ele faz o arrow function
    if(err) throw err
    console.log("Executando a leitura")
}) 

console.log("Executando console após o arquivo")


console.log((process.hrtime()[0]/60).toFixed(5))

// 8775.16667
// Antes da leitura do arquivo
// Executando console após o arquivo
// 8775.16667
// Executando a leitura