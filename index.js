const express = require('express');
const app = express();
app.listen(3000, () => console.log('servidor rodando na porta 3000'));
app.get('/', (req, res) => res.send('Servidor rodando, tudo ok'));
app.get('/atendimento', (req, res) => res.send('Você esta na rota de atendimento'));