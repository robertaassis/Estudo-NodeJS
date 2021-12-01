const EventEmitter = require('events') 

class Evento extends EventEmitter{

}

const meuEvento = new Evento()

meuEvento.on('seguranca', (x,y) => { // on cria o evento
    console.log('Executando o evento seguranca: '+ x,y) // Executando o evento seguranca: userAdmin Alterou salário
})

meuEvento.emit('seguranca', 'userAdmin', 'Alterou salário') // executa o evento