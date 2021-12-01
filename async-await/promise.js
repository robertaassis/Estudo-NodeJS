// promise é assincrona

function soma(x){ // espera 3seg, depois se der tudo certo, chama o resolve
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(x+5000)
        },3000)
    })
}


soma(150).then((resultado) => console.log(resultado))