const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o número do jogador 1: ", (jogador1) => {
    rl.question("Digite o número do jogador 2: ", (jogador2) => {

        jogador1 = Number(jogador1); // faz a alocação de um valor numérico
        jogador2 = Number(jogador2);

if (jogador1 > jogador2) {
    console.log("Jogador 1 ganhou");
} else if (jogador2 > jogador1) {
    console.log("Jogador 2 ganhou");
} else {jogador1 === jogador2
    console.log("Empate");
}
rl.close();
    });
});
