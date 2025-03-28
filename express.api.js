const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = new sqlite3.Database('cadastros.db');

db.run(`
  CREATE TABLE IF NOT EXISTS cadastros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    idade INTEGER,
    telefone INTEGER,
    email TEXT,
    rua TEXT,
    numero INTEGER,
    cidade TEXT,
    estado TEXT
  )
`);

class Cadastro {
  constructor(nome, idade, telefone, email, rua, numero, cidade, estado) {
    this.nome = nome;
    this.idade = idade;
    this.telefone = telefone;
    this.email = email;
    this.endereco = {
      rua: rua,
      numero: numero,
      cidade: cidade,
      estado: estado,
    };
  }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function perguntar(pergunta) {
    return new Promise((resolve) => {
      rl.question(pergunta, (resposta) => {
        resolve(resposta);
      });
    });
  }
  
  async function perguntarCadastro() {
    const nome = await perguntar('Digite o nome: ');
    const idade = parseInt(await perguntar('Digite a idade: '));
    const telefone = parseInt(await perguntar('Digite o telefone: '));
    const email = await perguntar('Digite o email: ');
    const rua = await perguntar('Digite a rua: ');
    const numero = parseInt(await perguntar('Digite o número: '));
    const cidade = await perguntar('Digite a cidade: ');
    const estado = await perguntar('Digite o estado: ');
  
    return new Cadastro(nome, idade, telefone, email, rua, numero, cidade, estado);
  }
  
  app.post('/cadastros', async (req, res) => {
    const cadastro = await perguntarCadastro();

    
  db.run(
    'INSERT INTO cadastros (nome, idade, telefone, email, rua, numero, cidade, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [cadastro.nome, cadastro.idade, cadastro.telefone, cadastro.email, cadastro.endereco.rua, cadastro.endereco.numero, cadastro.endereco.cidade, cadastro.endereco.estado],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Cadastro realizado com sucesso!', cadastro });
      }
    }
  );
});

// Rota para buscar um cadastro por nome
app.get('/cadastros/:nome', (req, res) => {
  const nome = req.params.nome;
  db.all('SELECT * FROM cadastros WHERE nome = ?', nome, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      if (rows.length > 0) {
        res.json(rows[0]);
      } else {
        res.status(404).json({ message: 'Cadastro não encontrado.' });
      }
    }
  });
});

// Rota para listar todos os cadastros
app.get('/cadastros', (req, res) => {
  db.all('SELECT * FROM cadastros', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Rota para excluir um cadastro por nome
app.delete('/cadastros/:nome', (req, res) => {
  const nome = req.params.nome;
  db.run('DELETE FROM cadastros WHERE nome = ?', nome, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Cadastro excluído com sucesso!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});