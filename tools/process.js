// pega variáveis de ambiente
console.log('Nome do arquivo: ', __filename)
console.log('Diretório do arquivo: ', __dirname) // dirname traz raiz, process.cwd traz de onde "invoquei"
console.log('Parâmetros do arquivo: ', process.argv) // traz todos os parametros de execucao do arquivo
console.log('Ambiente do arquivo: ', process.platform)
console.log('Sistema operaconal: ', process.env.OS)
console.log('Idioma: ', process.env.LANG)
console.log('Username: ', process.env.USERNAME)
console.log('Nome do Server: ', process.env.COMPUTERNAME)

switch(process.argv[2]){

    case '-a':
        console.log('execute rotina principal');
        break;
    case '-i':
        console.log('execute rotina alternativa');
        process.exit() // interrompe o código
        break;
    default :
        console.log('parametro invalido')
    
}

// Nome do arquivo:  C:\Users\roberta.carvalho\Documents\NodeJS\tools\process.js
// Diretório do arquivo:  C:\Users\roberta.carvalho\Documents\NodeJS\tools
// Parâmetros do arquivo:  [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\roberta.carvalho\\Documents\\NodeJS\\tools\\process.js'
// ]
// Ambiente do arquivo:  win32
// Sistema operaconal:  Windows_NT
// Idioma:  pt_BR.UTF-8
// Username:  roberta.carvalho
// Nome do Server:  GON019400967
