const {EventEmitter} = require('events') 

class Evento extends EventEmitter{

}

const meuEvento = new Evento()

// se alguem emitir o evento seguranca, da o console.log
meuEvento.on('seguranca', (x,y) => { // on cria o evento
    console.log('Executando o evento seguranca: '+ x,y) // Executando o evento seguranca: userAdmin Alterou salário
})

meuEvento.emit('seguranca', 'userAdmin', 'Alterou salário') // executa o evento

meuEvento.on('encerrar',(dados)=>{
    console.log('Assinante: '+dados)
})

meuEvento.emit('encerrar', 'Encerrando importação de dados')