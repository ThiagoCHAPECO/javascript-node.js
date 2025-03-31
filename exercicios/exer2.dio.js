const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return (`Abaixo do peso`);
    }
    else if (imc >= 18.5 && imc < 25) {
        return(`Peso normal`);
    }
    else if (imc >= 25 && imc < 30) {
        return (`Sobrepeso`);
    }
    else if (imc >= 30 && imc < 35) {
        return (`Obesidade grau 1`);
    }
    else if (imc >= 35 && imc < 40) {
        return (`Obesidade grau 2`);
    }
    else {
        return(`Obesidade grau 3`);
    }
};


function main() {
    rl.question("Digite sua altura: ", (altura) => {
        altura = parseFloat(altura);
    
        rl.question("Digite seu peso: ", (peso) => {
            peso = parseFloat(peso);

            if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
                console.log("Por favor, insira valores válidos.");
                rl.close();
                return;
        }

        let imc = calcularIMC(peso, altura);
        console.log(`Seu IMC é: ${imc.toFixed(2)}`);
        console.log(`Classificação: ${classificarIMC(imc)}`);

        rl.close();
    });
});
}

main();