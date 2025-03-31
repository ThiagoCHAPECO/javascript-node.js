const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Carro {
    constructor(marca, cor, gastomedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastomedio = gastomedio;
        this.custo = 0;
    }

gastoDoCarro() {
    rl.question("Qual o preço do etanol: ", (etanol) => {
        etanol = parseFloat(etanol);
        rl.question("Qual o preço da gasolina: ", (gasolina) => {
            gasolina = parseFloat(gasolina);
            rl.question("Qual o tipo de combustível (etanol/gasolina)? ", (tipo) => {
                tipo = tipo.toLowerCase();
                rl.question("Qual a distância percorrida (km)? ", (distancia) => {
                distancia = parseFloat(distancia);
    
                    let tipoCombustivel;
                    
                    if (tipo === "etanol") {
                        tipoCombustivel = etanol;
                    } else if (tipo === "gasolina") {
                        tipoCombustivel = gasolina;
                    } else {
                        console.log("Tipo de combustível inválido! Digite 'etanol' ou 'gasolina'.");
                        rl.close();
                        return;
                    }
    
                        let consumo = distancia / this.gastomedio;
                        this.custo = consumo * tipoCombustivel;
                        this.informacoesCarro();
                });
            });
        });
    });
}
    
informacoesCarro() {
    return console.log(`Marca: ${this.marca}'\nCor: ${this.cor}\nGasto médio: ${this.gastomedio}\nCusto: ${this.custo}`);
}

static main() {
    rl.question("Digite a marca do carro: ", (marca) => {
        marca = marca.toLowerCase();
        rl.question("Digite a cor do carro: ", (cor) => {
            cor = cor.toLowerCase();
             rl.question("Digite o gasto do carro: ", (gastomedio) => {
                gastomedio = parseFloat(gastomedio);

                let meuCarro = new Carro(marca, cor, gastomedio);
    
                meuCarro.gastoDoCarro();
            });
        });
    });
}

        
}

Carro.main();