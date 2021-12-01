const {EventEmitter} = require('events')
const emitter = new EventEmitter()

const validaObjeto = (a) => {
    if(typeof a !='object') emitter.emit('error', new Error('tipo informado inválido')) // se der erro, chama o addListener pra error
    else console.log('objeto válido!')
}

emitter.addListener('error', (err)=>{
    console.log( 'Evento: '+ err.message)
})

let dados={nome: 'Roberta', empresa: 'Totvs'}

validaObjeto('1')