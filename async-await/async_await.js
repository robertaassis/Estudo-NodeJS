function soma(x){ // espera 3seg, depois se der tudo certo, chama o resolve
    return new Promise((resolve, reject)=>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'numeric')  reject('Deu ruiiim')// se nao for numero 
        setTimeout(()=>{
            resolve(x+5000)
        },3000)
    })
}

async function main(){
    try{
        const resultado = await soma('eaiii')
        console.log(resultado + ' com aynsc/await')
    }
    catch(e){
        console.log(e)
    }
}

main()
