let rankingPrata = "Prata"

let resultado = calculo(50, 21)
console.log("O Herói tem um saldo = " + resultado + ", e ele está no nível " + rankingPrata)

function calculo(vitorias, derrotas){
 let somatorio = vitorias - derrotas
 return somatorio
}