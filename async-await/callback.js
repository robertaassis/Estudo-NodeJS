function soma(x, callback){ // espera 3seg, depois chama a funcao callback com os parametros
    return setTimeout(()=>{
        return callback(null, x+5000)
    },3000)
}

// callback function
function resolveSoma(err, resultado){
    if(err) throw err
    console.log(resultado)
}

soma(200, resolveSoma)