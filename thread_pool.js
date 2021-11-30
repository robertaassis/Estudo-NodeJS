const crypto = require('crypto')

const start = Date.now()

// thread pool - trabalha com 4; aloca recursos do processador
function logHashTime(){ // quanto tempo leva pra gerar cada rash
    crypto.pbkdf2('a','b',100000, 512, 'sha512',() =>{
        console.log(`Hash: ${Date.now() - start} `)
    })
}

logHashTime()
logHashTime()
logHashTime()
logHashTime()