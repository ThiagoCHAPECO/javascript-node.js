const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,   
    output: process.stdout
});

const cadastro = {
    nome: " ",
    idade: 0,
    telefone: " ",
    email: " ",
    endereco: {
        rua: " ",
        numero: 0,
        cidade: " ",
        estado: " "
    }
};
function realizarcadastro(){
    rl.question("Digite seu nome: ", (nome) => {
        cadastro.nome = nome;
        rl.question("Digite sua idade: ", (idade) => {
            cadastro.idade = idade;
            rl.question("Digite seu telefone: ", (telefone) => {
                cadastro.telefone = telefone;
                rl.question("Digite seu email: ", (email) => {
                    cadastro.email = email;
                    rl.question("Digite sua rua: ", (rua) => {
                        cadastro.endereco.rua = rua;
                        rl.question("Digite o numero da casa (ou prédio): ", (numero) => {
                            cadastro.endereco.numero = numero;
                            rl.question("Digite sua cidade: ", (cidade) => {
                                cadastro.endereco.cidade = cidade;
                                rl.question("Digite seu estado: ", (estado) => {
                                    cadastro.endereco.estado = estado;

                                    console.log(cadastro);
                                    rl.close();
                                });
                            });
                        });
                    });
                });
            });
        });
    }); 
}
function main(){
    rl.question("Deseja se cadastrar (s/n)?: ", (cadastrar) => {
        cadastrar = cadastrar.toLowerCase();
        if (cadastrar === "s"){
            realizarcadastro();
        }else{
            console.log("Programa sendo encerrado!!!");
            rl.close();
        }
    });
};
main();