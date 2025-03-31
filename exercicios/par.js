const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número para ver se é par ou ímpar: ", (numero) => {
    numero = parseInt(numero); // Converte a entrada para número inteiro

    if (numero % 2 === 0) {
        console.log("O número é par!");
    } else {
        console.log("O número é ímpar!");
    }
});