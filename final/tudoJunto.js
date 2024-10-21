//Utilização de módulo externo via npm
const minimist = require("minimist")
const argumentos = minimist(process.argv.slice(2))

//Utilizar módulo interno
const moduloSoma = require("../modulo_interno")
const funcSoma = moduloSoma.soma

const a = argumentos["a"]
const b = argumentos["b"]

funcSoma(a,b)

// Utilização de core modules
const fs = require('fs')

const resultado = funcSoma(a,b)

fs.write("Resultado.txt" , resultado, "utf8", (erro,dados) =>{
    if(erro){
        console.log(erro)
    } else{
        console.log(dados)
    }
})