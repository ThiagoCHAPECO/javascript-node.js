const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número para ver a tabuada: ", (numero) => {
    numero = parseInt(numero); // Converte a entrada para número inteiro

    for (let i = 1; i <= 10; i++) {
        console.log(i * numero);
    }

    rl.close();
});
    