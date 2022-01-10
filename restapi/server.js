// 1 comando mongo depois comando mongod para conectar ao mongodb
require('dotenv').config()
const express=require('express')
const app = express()
const mongoose = require('mongoose')

//body-parser necessario
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const subscribersRouter=require('./routes/subscribers') 
app.use('/subscribers', subscribersRouter) // sempre que alguem acessar o /subscribers, o arquivo routes/subscribers que manipula as rotas


mongoose.connect(process.env.DATABASE_STRING)
const db = mongoose.connection // tenta a conexao
db.on('error', (err) => console.log(err)) // caso a conexao dê erro
db.once('open', () => console.log('Connected to data base'))

app.use(express.json())


app.listen(3000, () => console.log('Server running!'))
