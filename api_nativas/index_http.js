const http = require('http') // precisa de endereço dele e porta de entrada

const hostname= '127.0.0.1'
const port= 3000
const url = `http://${hostname}:${port}`


const server= http.createServer((req, res) =>{ // req eh o que o cliente pede, res eh o que o servidor retorna
    res.statusCode = 200 // retornou com sucesso; status 200 eh sucesso
    res.setHeader('Content-Type', 'text/html') // le o texto e interpreta como html
    res.end('<h1>Bem vindo<br>Nodejs</h1>')
})

server.listen(port, hostname, () =>{
    console.log(`Servidor rodando em ${url}`)
})

const open = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open') // wind32 eh windows
// se vc estiver usando windows, ele abrirá automaticamente o navegador no localhost da porta 3000
// se usar nodemon ao mesmo tempo desse 'start', toda alteraçao que eu fiz no codigo abrirá automaticamente
// a aba do navegador mostrando a mudança
require('child_process').exec(open + ' ' + url)