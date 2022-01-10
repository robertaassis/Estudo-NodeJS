const http = require('http') // pra conseguir criar o server e abrir a pagina automaticamente
const host ='127.0.0.1'
const port = '3000'
const url = `http://${host}:${port}`

const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const app=express()

const path = require('path') // biblioteca pra pegar caminho do arquivo

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req, res)=>{
  
    res.sendFile(__dirname+'/index.html') // devolve o arquivo que está nesse caminho
})

const storage = multer.diskStorage({ // informações de armazenamento em disco
    destination:(req,file,cb)=>{ // requisição, o arquivo, callback quando terminar de executar a requisicao
        cb(null, 'uploads/') // leva o arquivo pra pasta uploads
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
        // pega o nome do arquivo do arquivo original (file), junta com - e data de agora, 
        // e pega a extensao do arquivo original
    } 
})

const upload = multer({storage})
console.log(upload)

app.post('/upload',upload.single('arquivo'), (req,res,next)=>{ // href="/upload" do arquivo index.html; upload.single é middleware (interfere na requisicao); permite upload de um unico arquivo
    const file = req.file // pega o arquivo que o usuario colocou
    if(!file){
        const err = new Error('Por favor, selecione um arquivo!') // caso nao tenha selecionado nenhum arquivo
        err.httpStatusCode = 400 // erro interno
        return next(err)
    } 
    res.send(file) // devolve upload e as informações dele
    // Ex: {"fieldname":"arquivo","originalname":"SEGURO DE VIDA - Roberta Assis.pdf","encoding":"7bit","mimetype":"application/pdf","destination":"uploads/","filename":"arquivo-1638454751976","path":"uploads\\arquivo-1638454751976","size":282980}
})



app.listen(3000, '127.0.0.1', ()=>{
    console.log('Server running na porta 3000')
})

const start = (process.platform == 'win32' ? 'start' : 'xdg-open')

require('child_process').exec(start + ' ' + url)