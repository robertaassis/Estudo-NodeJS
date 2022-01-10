const express = require('express')
const router=express.Router()
const Subscriber = require('../models/subscriber') // .. eh pra sair da pasta routes

const bodyParser = require('body-parser')
const subscriber = require('../models/subscriber')

router.get('/',async (req,res)=>{ // ele precisa ser assincrono, pq tem que esperar ele ir pro banco e voltar
    try{
        const subscribers = await Subscriber.find() // procura no banco
        res.json(subscribers) // devolve o que encontrou
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/:id',getSubscriber,(req,res)=>{ // primeiro realiza a funcao getSubscriber depois (no next) chama esse codigo abaixo 
    res.json(res.subscriber)
})

router.post('/', async(req,res)=>{

    const subscriber = new Subscriber({  // body pega do formulario, params pega da url
        userName: req.body.userName,
        userChannel: req.body.userChannel
    })
    
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch(error){
        res.status(400).json({message: error.message})
    }
})

router.patch('/:id',getSubscriber, async (req,res)=>{ // alterar algo
    if(req.body.userName != null) res.subscriber.userName = req.body.userName // body eh do formulario, entao se vc enviar um userName (body) ele troca no banco (subscriber)
    if(req.body.userChannel != null) res.subscriber.userChannel = req.body.userChannel

    try{
        const updateSubscriber = await res.subscriber.save()
        res.json(updateSubscriber)
    }
    catch(error){
        return res.status(4).json({message: error.message})
    }
})

router.delete('/:id',getSubscriber,async (req,res)=>{ // deletar 
    try{
        await res.subscriber.remove()
        res.json({message: 'subscriber was deleted!'})
    }
    catch(error){
        return res.status(500).json({message: 'SUBSCRIBER NOT FOUND!'})
    }
})

async function getSubscriber(req,res,next){ // verifica se o id existe; MIDDLEWARE
    try{
        subscriber1 = await Subscriber.findById(req.params.id)
        if(subscriber1==null) return res.status(400).json({message: 'subscriber not found'})
    } catch(error){
        return res.status(500).json({message: error.message})
    }
   
    res.subscriber = subscriber1
    
    next()
}

module.exports=router