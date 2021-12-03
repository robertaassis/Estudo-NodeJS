// Tratado em nivel de registro; tudo que precisa pra colocar no mongodb; 
// Model (forma que o nodejs vai "conversar" com mongo)

const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({ // estrutura que vai pro mongo
    userName:{
        type: String,
        required:true
    },
    userChannel:{
        type: String,
        required:true
    },
    userDate:{
        type: Date,
        required:true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema) // vou chamar Subscriber sempre que eu precisar