const {promisify} = require('util')

const writeFile = promisify(require('fs').writeFile) // pega o modulo wirteFile com promise; nao precisa do callback
const conteudo = 'Criando arquivo utilizando promisify da api util'
writeFile('utilArquivo.txt', conteudo).then(() => console.log('Arquivo criado com sucesso')).catch((err) => console.log('Deu erro: '+ err))