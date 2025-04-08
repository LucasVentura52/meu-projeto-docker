const express = require('express');
const app = express();
const PORT = 3000;

const pessoas = [
  { id: 1, nome: 'João', idade: 30 },
  { id: 2, nome: 'Maria', idade: 25 },
  { id: 3, nome: 'Carlos', idade: 40 }
];

app.get('/pessoas', (req, res) => {
  res.json(pessoas);
});

app.get('/pessoas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pessoa = pessoas.find(p => p.id === id);

  if (!pessoa) {
    return res.status(404).json({ erro: 'Pessoa não encontrada' });
  }

  res.json(pessoa);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
