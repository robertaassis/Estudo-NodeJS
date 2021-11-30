// arquivo bloqueante; executa rotina uma por vez, so começa a outra depois que termina a atual
const fs = require('fs') // file system

console.log((process.hrtime()[0]/60).toFixed(5)) // transforma hora pra segundo com 5 casas de precisao
console.log( "Antes da leitura do arquivo")

const dados = fs.readFileSync('file.txt') // bloqueia aqui ate o arquivo ser todo lido

console.log("Executando console após o arquivo")


console.log((process.hrtime()[0]/60).toFixed(5))

// 8769.83333
// Antes da leitura do arquivo
// Executando console após o arquivo
// 8769.83333