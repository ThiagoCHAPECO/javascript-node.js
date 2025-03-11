const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lista = [];

rl.question("Digite o tamanho da lista: ", (tamanho) => {
  let contador = 0;

  const fazerPergunta = () => {
    if (contador < tamanho) {
      rl.question("Digite o seu nome: ", (nome) => {
        lista.push(nome);
        contador++;
        fazerPergunta(); // Faz a próxima pergunta após a resposta
      });
    } else {
      console.log(lista); // Exibe a lista após todas as respostas
      rl.close(); // Fecha a interface após todas as perguntas
    }
  };

  fazerPergunta(); // Inicia as perguntas
});
