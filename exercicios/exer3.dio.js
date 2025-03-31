const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function main() {
    rl.question("Digite o valor do produto: ", (valor) => {
        valor = parseFloat(valor);      
        rl.question("Qual vai ser a forma de pagamento?: (dinheiro/debito/credito/parcelado): ", (pagamento) => {
            pagamento = pagamento.toLowerCase();

            console.log(desconto(valor, pagamento));
            rl.close();
    
});
});

function desconto(valor, pagamento) {
    let precofinal;
        switch (pagamento) {
            case "dinheiro":
                precofinal = valor - (valor * 0.15);
                return (`Valor final: R$ ${precofinal.toFixed(2)}`);
            case "debito":
                precofinal = valor - (valor * 0.10);
                return(`Valor final: R$ ${precofinal.toFixed(2)} `);
            case "credito":
                precofinal = valor;
                return(`Valor final: R$ ${precofinal.toFixed(2)}`);
                
            case "parcelado":
                precofinal = valor + (valor * 0.10);
                return(`Valor final: R$ ${precofinal.toFixed(2)}`);
            default:
                return("Forma de pagamento inválida!");
        }                                                                    
    };
};
main();