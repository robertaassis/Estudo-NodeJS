const {wirteFile, writeFile} = require('fs')

function criaArquivo(name, content){
    return new Promise((resolve, reject) => {
        writeFile(name, content, err => {
            if(err) throw reject(err)
            resolve('Arquivo promise criado com sucesso')
        })
    })
}

criaArquivo('promiseArquivo.txt', 'Criando arquivo utilizando promise a partir de função; sem utilizar writeFile direto').then(console.log).catch(err => console.log(err))