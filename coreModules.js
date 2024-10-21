const fs = require('fs')

fs.readFile("teste.txt" , "utf8" , (erro,dados) =>{
    if(erro){
        console.log(erro)
    } else{
        console.log(dados )
    }
})

const mensage = "Texto muito legal , pra ver se funciona"

const mensage2 = "\nTexto nada interessante"



fs.writeFile('teste2oretorno.txt' , mensage , "utf8" , (erro) =>{
    if(erro){
        console.log("Deu erro otário, se vira ai")

    } else{
        console.log('Arquivo escrito com sucesfully')
    }
})

fs.appendFile('teste2oretorno.txt' , mensage2 , "utf8" , (erro) =>{
    if(erro){
        console.log("Deu erro otário, se vira ai")

    } else{
        console.log('Arquivo escrito com sucesfully')
    }
})

fs.unlink('teste2oretorno.txt' ,(erro) =>{
    if(erro){
        console.log("Não consegui apagar este inútil... Perdão.")

    } else{
        console.log('TE APAGUEI OTÁRIO')
    }
})
