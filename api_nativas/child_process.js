const {spawn} = require('child_process')
const ls = spawn('ls') // pega os nomes dos arquivos

ls.stdout.on('data', (data) =>{ // quando vc tiver lendo os dados
    console.log(data.toString())
})

ls.stderr.on('data', (data) =>{ // pra erro
    console.log(data)
})

ls.on('close', (code) =>{
    console.log(`Processo em segundo plano terminado com codigo: ${code}`)
})