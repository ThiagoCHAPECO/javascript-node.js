const cliente = {
    nome: "André",
    idade: 36,
    email: "andre@firma.com",
    telefone: ["11 99999-9999", "11 98888-8888"]

};

cliente.endereco = {
    rua: "Rua 1",
    numero: 123,
    bairro: "Centro",
    cidade: "São Paulo"
};

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log("Ligando para o cliente no número: " + telefoneComercial);
    console.log("Ligando para o cliente no número: " + telefoneResidencial);
}
ligaParaCliente(...cliente.telefone); // ... acessa os valores de telefone

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco
}; // destinatario acessa a chave cliente com valor nome 
   // ... acessa os valores de endereco

console.log(encomenda)