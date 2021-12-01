// cria diretorios
const fs = require('fs')

fs.mkdir('projeto', (err, data) =>{ // cria pasta projeto
    if(err) throw err
    console.log('Diretorio criado com sucesso!')
})

// fs.mkdir('projeto/assets/images', (err, data) =>{ se eu quisesse criar isso, ele daria erro pois nao achou pasta assets
// se eu quiser que ele crie "sequencia" de pastas (antes nao existentes), tenho que usar 
//fs.mkdir('projeto/assets/images',{recursive: true}, (err, data) =>{