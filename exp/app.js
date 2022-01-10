const express = require('express')
const app = express()

const adminRoutes = require('./routes/admin')

const cookieParser = require('cookie-parser') // middleware de terceiro; tem que instalar

app.use(cookieParser())

app.use(express.json()) // aceita padrao json

app.use( (req, res, next) => { // middleware entra no meio de uma requisição e trata a informação; quando termina de fazer o que ele tem que fazer nessa função, ele chama a função next
    console.log("Executando middleware em nivel de aplicação") // vai printar toda hora que alguem entrar em qualquer pagina
    return next()
})

app.get('/setcookie', (req, res) =>{
    res.cookie('user', 'Roberta Assis', {maxAge:90000, httpOnly:true}) // gero o cookie 
    return res.send('Cookie gravado com sucesso')
})

app.get('/getcookie', (req, res) =>{
    let user = req.cookies['user'] // pega o user do cookie; f12 > application > cookies > value
    if(user) res.send(user)
})

app.get('/', (req,res) => { // primeira pagina
    res.send('Vai dar certo')
}) 

app.get('*', (req,res,next) => { 
    setImmediate(()=> {
        next(new Error('Temos um problema!!')) // leva esse erro para a proxima função, que no caso eh 
    // console.log('Erro gerado') => printa isso no console
   
    })
}) 

app.use((err,req,res,next)=>{ // tratamento de erro
    console.log('Erro gerado') // printa isso no console
    res.status(500).json({message: err.message}) // printa isso na tela 
})

app.use('/admin', adminRoutes) // se alguem chamar o /admin, vai pras rotas (arquivo) do admin.js

app.listen(3000, ()=>{
    console.log('Server running!')
})