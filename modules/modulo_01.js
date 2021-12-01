// console.log('Executando modulo_01')

const oculta = ()=>{ // const torna ele "privado"
    console.log('executando funcao oculta')
}

executa= () =>{ // disponibiliza pra outro arquivo
    console.log('executando funcao executa')
}

welcome='Bem vindo ao modulo_02'

module.exports = {executa, welcome}

// REPL - executa o node no terminal