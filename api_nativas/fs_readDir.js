// le diretorios
const fs = require('fs')

fs.readdir(__dirname, (err,data) =>{ // vai pegar diretorio atual; se eu tivesse colocado fs.readdir("../", (err,data) teria trago ate os que
    // estao fora da pasta (nivel superior)
    if(err) throw err
    data.forEach(files=>{
        console.log(__dirname +'\\' + files) // traz o caminho de todos os arquivos dessa pasta
        // C:\Users\roberta.carvalho\Documents\NodeJS\api_nativas\fs_readDir.js
        // C:\Users\roberta.carvalho\Documents\NodeJS\api_nativas\index_http.js
    })
}) 