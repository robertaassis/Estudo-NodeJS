// caso eu esteja iniciando um projeto e quero que o js ja crie varias pastas de uma vez pra mim, ex; css, js, etc

const fs = require('fs')

const assets = ['css', 'js', 'images']

function make(assets){
    assets.forEach((item) =>{ // item é cada valor do vetor
        fs.mkdir(`projeto/assets/${item}`,{recursive:true}, (err, data) =>{ // cria pasta projeto
            if(err) throw err
            console.log(`Diretorio criado com sucesso: ${item}!`)
        })
    })
    
}

make(assets) // vai criar uma pasta pra cada elemento do vetor assets