const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function main() {
    let listaPessoas = [];
    rl.question("Quantas pessoas deseja cadastrar? ", (pessoas) => {
        pessoas = parseInt(pessoas);
        cadastrarPessoa();
});
};
function cadastrarPessoa(pessoas, listaPessoas, Pessoa) {
        for (let i = 0; i < pessoas; i++) {
            rl.question("Escreva seu nome: ", (nome) => {
                nome = nome.toLowerCase();
                rl.question("Digite sua idade: ", (idade) => {
                    idade = parseInt(idade);
                    rl.question("Digite sua altura: ", (altura) => {
                        altura = parseFloat(altura);
                        rl.question("Digite seu peso: ", (peso) => {
                            peso = parseFloat(peso);

                            listaPessoas.push(new Pessoa(nome, idade, altura, peso));
                            return cadastrarPessoa(listaPessoas);
                        });
                    });
                });
            });
        } 
        rl.close();
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