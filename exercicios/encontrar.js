const clientes = require('../clientes.json');


function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor)); // includes serve para verificar se uma string ou um array contém um determinado valor ou substring
}
const encontrado = encontrar(clientes, "nome", "Kirby"); // lista = clientes, chave = "nome", valor = "Kirby"

console.log(encontrado); // { nome: 'André', idade: 36, email: '
