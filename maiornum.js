const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main () {
    rl.question("Digite o primeiro número: ", (num1) => {
        num1 = parseFloat(num1);
        rl.question("Digite o segundo número: ", (num2) => {
            num2 = parseFloat(num2);
            rl.question("Digite o terceiro número: ", (num3) => {
                num3 = parseFloat(num3);
                rl.question("Digite o quarto número: ", (num4) => {
                    num4 = parseFloat(num4);
                    rl.question("Digite o quinto número: ", (num5) => {
                        num5 = parseFloat(num5);
                        
                        let maior = num1;
                        if (num2 > maior) {
                            maior = num2;
                        }
                        if (num3 > maior) {
                            maior = num3;
                        }
                        if (num4 > maior) {
                            maior = num4;
                        }
                        if (num5 > maior) {
                            maior = num5;
                        }
                        console.log("O maior número digitado foi: " + maior);
                        rl.close();
                    });
                });
            });
        });
    });

}

main();