const {writeFile} = require('fs') // traz so o modulo de fs pra escrever arquivo; procura dentro de fs o writeFile


writeFile('arquivo.txt', 'Criando Arquivo com writeFile', err =>{
    if(err) throw err
    console.log('arquivo criado com sucesso')
})