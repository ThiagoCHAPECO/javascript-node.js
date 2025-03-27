const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const livro = {
    titulo: "O Senhor dos Aneis",
    autor: "J. R. R. Tolkien",
    anoPublicacao: 1954,
    tempoLancado: " ",
    avaliacaoDoLivro: " ",
    generodolivro: "Fantasia"
}
// new Date() obtém a data e hora atuais.
// getFullYear() extrai e retorna apenas o ano dessa data.
let anoatual = new Date().getFullYear(); 

livro.tempoLancado = anoatual - livro.anoPublicacao;

rl.question("Digite a avaliação do livro (1-5): ", (avaliacao) => {
    livro.avaliacaoDoLivro = avaliacao;

    console.log(livro.titulo);
    console.log(livro.autor);
    console.log(livro.anoPublicacao);
    console.log(livro.tempoLancado);
    console.log(livro.avaliacaoDoLivro);
    console.log(livro.generodolivro);
    console.log(livro);

rl.close();
});

