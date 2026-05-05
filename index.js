const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('<h1>Página Inicial</h1><p>Bem-vindo ao meu projeto Node.js!</p>');
});


app.get('/sobre', (req, res) => {
    res.send('<h1>Sobre o Desenvolvedor</h1><p>Estudante de ADS na Unifor.</p>');
});


app.get('/contato', (req, res) => {
    res.send('<h1>Contato</h1><p>Email: contato@exemplo.com</p>');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});