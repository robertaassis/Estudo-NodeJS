// le arquivos
const fs = require('fs')

fs.readFile('texto.txt', (err, data) =>{
    if(err) throw err
    console.log(data.toString()) // se colocasse so data, leria espaço no buffer; toString le as palavras do arquivo
})