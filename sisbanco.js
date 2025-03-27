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
    for(let i = 0; i <= qtdpessoas; i++) {
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
                                 
    };
};
function buscarCadastro(){
    rl.question("Escreva o seu nome: ", (nome) => {
        for(nome in ListaDeCadastros)
            console.log("Esse foi o cadastro encontrado: " + ListaDeCadastros[nome])
    });
};
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
    console.log("1 - Cadastrar empresa");
    console.log("2 - Buscar empresa");
    console.log("3 - Listar empresas");
    console.log("4 - Excluir empresa");
    console.log("5 - Alterar empresa");
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
          listarEmpresas();
          break;
        case "4":
          excluirEmpresas();
          break;
        case "5":
          alterarEmpresas();
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