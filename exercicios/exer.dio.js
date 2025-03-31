const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

rl.question("Digite a nota 1: ", (nota1) => {
    rl.question("Digite a nota 2: ", (nota2) => {
        rl.question("Digite a nota 3: ", (nota3) => {
            nota1 = parseFloat(nota1);
            nota2 = parseFloat(nota2);
            nota3 = parseFloat(nota3);

            let media = (nota1 + nota2 + nota3) / 3;

            if (media >= 7) {
                console.log(`Aprovado! Média: ${media.toFixed(2)}`);
            } else if (media < 7 && media >= 5) {
                console.log(`Recuperação! Média: ${media.toFixed(2)}`);
            } else {
                console.log(`Reprovado! Média: ${media.toFixed(2)}`);
            }

            rl.close();
        }
        );    
    }
    );
});