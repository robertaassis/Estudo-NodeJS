const fs = require('fs')

fs.readFile('file2.txt', (err, data) => { // tira o Sync, enquanto vc tiver executando o file, ele faz o arrow function
    if(err) throw err
    console.log(data)
    fs.unlink('file2.txt',(unlinkErr)=>{
        if(unlinkErr) throw unlinkErr
        console.log("Arquivo excluido")
    }) // metodo bloqueante
}) 

