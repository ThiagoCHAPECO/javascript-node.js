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

class Cadastro { // cria a classe com o objeto
    constructor(nome, idade, telefone, email, rua, numero, cidade, estado) {
      this.nome = nome;
      this.idade = idade;
      this.telefone = telefone;
      this.email = email;
      this.endereco = {
        rua: rua,
        numero: numero,
        cidade: cidade,
        estado: estado
      };
    }
  }
async function realizarcadastro(qtdpessoas){
    ListaDeCadastros = []
    for(let i = 1; i <= qtdpessoas; i++) {
        let nome = await perguntar("Digite seu nome: ");
            
            let idade = await perguntar("Digite sua idade: ");
                
                let telefone = await perguntar("Digite seu telefone: ");
                    
                    let email = await perguntar("Digite seu email: ");
                        
                        let rua = await perguntar("Digite sua rua: ");
                            
                            let numero = await perguntar("Digite o numero da casa (ou prédio): ")
                                
                                let cidade = await perguntar("Digite sua cidade: ");
                                   
                                    let estado = await perguntar("Digite seu estado: ");
                                        


                                        let cadastro = new Cadastro( // cria um novo cadastro e coloca as informações lá
                                            nome.toLowerCase(),
                                            parseInt(idade),
                                            parseInt(telefone),
                                            email.toLowerCase(),
                                            rua.toLowerCase(),
                                            parseInt(numero),
                                            cidade.toLowerCase(),
                                            estado.toLowerCase()
                                        );
                                
                                        ListaDeCadastros.push(cadastro);
                                        console.log("Cadastro realizado:", cadastro);
        return exibirMenu();
                                        
    };
};
function buscarCadastro(){
    rl.question("Escreva o seu nome: ", (nome) => { // find vai encontrar o nome no cadastro, se encontrar ele vai exibir
    let encontrado = ListaDeCadastros.find(cadastro => cadastro.nome === nome.toLowerCase()); 
    if (encontrado) {
      console.log("Cadastro encontrado:", encontrado);
    } else {
      console.log("Cadastro não encontrado.");
    }
    rl.close();
  });
  return exibirMenu();
}

function listarCadastro(){
    console.log("Lista de cadastros:");
    ListaDeCadastros.forEach(cadastro => { // foreach vai percorrer a lista toda e vai exibir os cadastros
      console.log(cadastro);
    });
    return exibirMenu();
}

function excluirCadastro(){
    rl.question("Escreva o seu nome: ", (nome) => { // findIndex vai encontrar o indice do nome no cadastro, se encontrar ele vai excluir
        let encontrado = ListaDeCadastros.findIndex(cadastro => cadastro.nome === nome.toLowerCase());
        if (encontrado !== -1) { // se ele for diferente de -1 ele foi encontrado e excluido
          ListaDeCadastros.splice(indice, 1);
          console.log("Cadastro encontrado e deletado");
        } else {
          console.log("Cadastro não encontrado.");
        }
        rl.close();
      });
    return exibirMenu();
}
async function alterarCadastro() {
  rl.question("Escreva o seu nome: ", async (nome) => {
    let indiceEncontrado = ListaDeCadastros.findIndex(cadastro => cadastro.nome === nome.toLowerCase());
    if (indiceEncontrado !== -1) {
      try {
        let novoNome = await perguntar("Digite seu nome: ");
        let idade = parseInt(await perguntar("Digite sua idade: "));
        let telefone = parseInt(await perguntar("Digite seu telefone: "));
        let email = await perguntar("Digite seu email: ");
        let rua = await perguntar("Digite sua rua: ");
        let numero = parseInt(await perguntar("Digite o numero da casa (ou prédio): "));
        let cidade = await perguntar("Digite sua cidade: ");
        let estado = await perguntar("Digite seu estado: ");

        ListaDeCadastros[indiceEncontrado] = new Cadastro(
          novoNome.toLowerCase(),
          idade,
          telefone,
          email.toLowerCase(),
          rua.toLowerCase(),
          numero,
          cidade.toLowerCase(),
          estado.toLowerCase()
        );

        console.log("Cadastro alterado com sucesso:", ListaDeCadastros[indiceEncontrado]);
        exibirMenu();
      } catch (error) {
        console.error("Erro ao alterar cadastro:", error);
        exibirMenu();
      }
    } else {
      console.log("Cadastro não encontrado.");
      exibirMenu();
    }
  });
}
function totalDeCadastros(){ // função pergunta quantas pessoas vão ser cadastradas
    rl.question("Quantas pessoas deseja cadastrar? ", async (resposta) => {
                let qtdpessoas = parseInt(resposta);
                if (isNaN(qtdpessoas) || qtdpessoas <= 0) {
                    console.log("Por favor, insira um valor válido.");
                    rl.close();
                    return;
                } else{
                    await realizarcadastro(qtdpessoas);
                }
    });
};
function exibirMenu() {
    console.log("Escolha uma opção:");
    console.log("1 - Cadastrar Pessoa");
    console.log("2 - Buscar Pessoa");
    console.log("3 - Listar Pessoa");
    console.log("4 - Excluir Pessoa");
    console.log("5 - Alterar Pessoa");
    console.log("6 - Sair");
  
    rl.question("Escolha uma opção: ", (opcao) => {
      switch (opcao) {
        case "1":
          totalDeCadastros();
          break;
        case "2":
          buscarCadastro();
          break;
        case "3":
          listarCadastro();
          break;
        case "4":
          excluirCadastro();
          break;
        case "5":
          alterarCadastro();
          break;
        case "6":
          rl.close(); // Sai do programa
          break;
        default:
          console.log("Opção inválida. Tente novamente.");
          exibirMenu(); // Chama o menu novamente
      }
    });
};

exibirMenu();