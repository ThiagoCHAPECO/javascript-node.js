const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise((resolve) => {
      rl.question(pergunta, (resposta) => {
        resolve(resposta);
      });
    });
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

async function cadastrarPessoa(qtdpessoas) {
        listaPessoas = [];
        for (let i = 0; i <= qtdpessoas; i++) {
            let nome = await perguntar("Escreva seu nome: ");
                nome = nome.toLowerCase();

                let idade = await perguntar("Digite sua idade: ");
                    idade = parseInt(idade);

                    let altura = await perguntar("Digite sua altura: ");
                        altura = parseFloat(altura);

                        let peso = await perguntar("Digite seu peso: ");
                            peso = parseFloat(peso);

                            const pessoa = { nome, idade, altura, peso };
                            listaPessoas.push(pessoa);
                    
                         
                           return cadastrarPessoa();
    }
};

function main() {
    rl.question("Quantas pessoas deseja cadastrar? ", async (resposta) => {
        let qtdpessoas = parseInt(resposta);
        if (isNaN(qtdpessoas) || qtdpessoas <= 0) {
            console.log("Por favor, insira um valor válido.");
            rl.close();
            return;
        } else{
            await cadastrarPessoa(qtdpessoas);
        }
    });
};
main();