const http = require('http') // traz modulo nativo do node, entao nao precisa instalar
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req,res)=>{ // cria servidor
    res.statusCode = 200; // deu certo se devolver esse codigo
    res.setHeader('Contente-Type', 'text/plain');
    res.end('Ola mundo \n Meu primeiro script')
})

server.listen(port, host, ()=>{
    console.log('Server running at http://' + host + ' : ' + port)
})