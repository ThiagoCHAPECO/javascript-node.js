const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function main() {
rl.question("Digite seu nome: ", (nome) => {
    nome = nome.toLowerCase();

    rl.question("Digite sua idade: ", (idade) => {
        idade = parseInt(idade);

        console.log(escrevaNome (nome));
        verificarIdade(idade);

        rl.close();
        });
    });
};


function escrevaNome(nome) {
    return ('Seu nome é ' + nome);
}

function verificarIdade(idade) {

    if (idade < 18) {
        console.log("Vocé é menor de idade.");
    } else {
        console.log("Vocé é maior de idade.");
    }
}

main();