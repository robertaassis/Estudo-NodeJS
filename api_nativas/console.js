console.error(new Error('Exibindo mensagem de erro'))

const carros = ['GM', 'FIAT', 'PORSCHE']

console.table(carros)

// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │    0    │   'GM'    │
// │    1    │  'FIAT'   │
// │    2    │ 'PORSCHE' │
// └─────────┴───────────┘

const dados = {name: 'Roberta', empresa: 'Totvs'}

console.table(dados)

// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │  name   │ 'Roberta' │
// │ empresa │  'Totvs'  │
// └─────────┴───────────┘

// consegue checar o tempo de execucao de um processo. Ex:
console.time('contador')
for(let i=0;i<10;i++){}
console.timeEnd('contador') // contador: 0.077ms