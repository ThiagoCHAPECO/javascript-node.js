fetch('https://api.exemplo.com/dados', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ chave: 'valor' })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Dados da API:', data);
      // Processamento dos dados, se necessário
  
      // Inicia a interação com o usuário no console
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
      }
  
      class Cadastro {
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
  
      async function realizarCadastro(qtdpessoas) {
        let ListaDeCadastros = [];
        for (let i = 1; i <= qtdpessoas; i++) {
          let nome = await perguntar('Digite seu nome: ');
          let idade = await perguntar('Digite sua idade: ');
          let telefone = await perguntar('Digite seu telefone: ');
          let email = await perguntar('Digite seu email: ');
          let rua = await perguntar('Digite sua rua: ');
          let numero = await perguntar('Digite o numero da casa (ou prédio): ');
          let cidade = await perguntar('Digite sua cidade: ');
          let estado = await perguntar('Digite seu estado: ');
  
          let cadastro = new Cadastro(
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
          console.log('Cadastro realizado:', cadastro);
        }
        return ListaDeCadastros;
      }
  
      async function totalDeCadastros() {
        rl.question('Quantas pessoas deseja cadastrar? ', async (resposta) => {
          let qtdpessoas = parseInt(resposta);
          if (isNaN(qtdpessoas) || qtdpessoas <= 0) {
            console.log('Por favor, insira um valor válido.');
            rl.close();
            return;
          } else {
            await realizarCadastro(qtdpessoas);
            exibirMenu(); // Chama o menu após o cadastro
          }
        });
      }
  
      function exibirMenu() {
        console.log('Escolha uma opção:');
        console.log('1 - Cadastrar');
        console.log('2 - Sair');
  
        rl.question('Escolha uma opção: ', (opcao) => {
          switch (opcao) {
            case '1':
              totalDeCadastros();
              break;
            case '2':
              rl.close();
              break;
            default:
              console.log('Opção inválida.');
              exibirMenu();
          }
        });
      }
  
      exibirMenu();
    })
    .catch(error => {
      console.error('Erro:', error);
    });