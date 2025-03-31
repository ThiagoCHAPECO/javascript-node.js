const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual o tipo de combustível no seu carro (etanol/gasolina)? ", (tipo) => {
  tipo = tipo.toLowerCase().trim(); // Normaliza a entrada para evitar erros de digitação

  rl.question("Digite o preço do etanol: ", (etanol) => {
    etanol = parseFloat(etanol);

    rl.question("Digite o preço da gasolina: ", (gasolina) => {
      gasolina = parseFloat(gasolina);

      rl.question("Qual o gasto médio do veículo (km/L)? ", (gasto) => {
        gasto = parseFloat(gasto);

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

          let consumo = distancia / gasto;
          let custo = consumo * tipoCombustivel;

          console.log(`O custo total da viagem foi de R$ ${custo.toFixed(2)}`);
          rl.close();
        });
      });
    });
  });
});
