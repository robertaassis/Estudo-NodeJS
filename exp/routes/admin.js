const express = require('express')
const router = express.Router()

// NAO PRECISA COLOCAR /admin PQ SO VAI ACESSAR ESSA ROTA SE TIVER ACESSANDO O /admin
router.use(express.json()) // aceita padrao json

function logReq(req,res,next){
    if(1<0)  console.log("deu erro")
    else return next() // ele só vai para a proxima (next; printar Listando os adm) se o que ele estiver (1 for maior que 0) pra fazer der certo aqui
}
// Ex: antes de printar Listando os adm, eu quero ir no banco checar se aquele adm existe, logo posso fazer com if, e 
// caso exista mesmo, darei return next() para puxar o res.send da proxima(next) funcao

router.get('/', logReq, (req,res) => { // primeira pagina; // printa quando alguem entra na pagina principal
    res.send('Listando os adm')
}) 

// post eh pra envio de informações
router.post('/', (req,res) => { // pagina admin
    const corpo = `Login: ${req.body.login}\nSenha: ${req.body.senha}`
    res.send('Administração via post! ' + corpo)
})

// path eh pra alterar alguns dados, put eh pra todos
router.patch('/:id', (req,res) => { // pagina admin
    res.send('Administração via patch do usuario ' +req.params.id)
})

router.put('/:id', (req,res) => { // pagina admin
    res.send('Administração via put id: '+req.params.id)
})


router.delete('/:id', (req,res) => { // pagina admin
    res.send('Administração via delete id: '+req.params.id)
})

router.get('/:id', (req,res) => { // pagina admin
    res.send(`Administração com o id: ${req.params.id}!`)
})

module.exports = router