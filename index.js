let numeroVitorias = 800
let numeroDerrotas =  45
let saldoVitorias = soma (numeroVitorias,numeroDerrotas)


function soma(numA, numB){
    let somatoria = numA - numB
    return somatoria
}

if (saldoVitorias <= 10){
    console.log("O Herói tem o saldo de " + saldoVitorias + " está no nível Ferro")
}
else if (saldoVitorias <= 20){
    console.log("O Herói tem o saldo de " + saldoVitorias + " está no nível Bronze")  
}
else if (saldoVitorias <= 50){
    console.log("O Herói tem o saldo de " + saldoVitorias + " está no nível Prata")
}
else if (saldoVitorias <= 80){
    console.log("O Herói tem o saldo de " + saldoVitorias + " está no nível Ouro")
}
else if (saldoVitorias <= 90){
    console.log("O Herói tem o saldo de " + saldoVitorias + " está no nível Diamante")
}
else if (saldoVitorias <= 100){
    console.log("O Herói tem o saldo de " + saldoVitorias + " está no nível Lendário")
}
else if (saldoVitorias >= 101){
    console.log("O Herói tem o saldo de " + saldoVitorias + " está no nível Imortal")
}