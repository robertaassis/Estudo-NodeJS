require('./modulo_01') // se eu usar só require pega todas as funcções do outro arquivo, ate os que eu nao exportei
// se eu quisesse pegar só os que eu exportei, eu teria que guarda-los em uma const ex: const x = require('./modulo_01')

const {welcome, executa} = require('./modulo_01') // pego só o modulo welcome de modulo_01

// console.log(welcome)

executa()