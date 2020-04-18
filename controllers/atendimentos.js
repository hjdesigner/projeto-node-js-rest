module.exports = app => {
  app.get('/atendimento', (req, res) => res.send('Você esta na rota de atendimento'));
  app.post('/atendimento', (req, res) => {
    console.log(req.body);
    res.send('Você esta na rota de atendimentos e esta realizando um post')
  });
}