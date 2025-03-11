const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function main() {
    let i = 0;
    let listaPessoas = [];
    rl.question("Quantas pessoas deseja cadastrar? ", (pessoas) => {
        pessoas = parseInt(pessoas);
        cadastrarPessoa(pessoa, listaPessoas, i);
});
};
function cadastrarPessoa(pessoas, listaPessoas, i) {
        if (i < pessoas) {
            console.log(`Pessoa ${i + 1}`);
            rl.question("Escreva seu nome: ", (nome) => {
                nome = nome.toLowerCase();
                rl.question("Digite sua idade: ", (idade) => {
                    idade = parseInt(idade);
                    rl.question("Digite sua altura: ", (altura) => {
                        altura = parseFloat(altura);
                        rl.question("Digite seu peso: ", (peso) => {
                            peso = parseFloat(peso);

                            listaPessoas.push(new Pessoa(nome, idade, altura, peso));

                            cadastrarPessoa(pessoas, listaPessoas, i + 1);

                        });
                    });
                });
            });
        } else {
            console.log("\nLista de pessoas cadastradas:");
            listaPessoas.forEach(Pessoa => {
                console.log(Pessoa.boasVindas());
        });
        rl.close();
    }
};
class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        }
    boasVindas() {
        return ('Seja bem-vindo essas são suas informações ' + this.nome + this.idade + this.altura + this.peso);
    }
};

main();