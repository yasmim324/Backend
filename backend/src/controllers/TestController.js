
module.exports = {
    index(req, res) {
      return res.json({
        nome: req.query.nome,
        email: req.query.email,
        senha: req.query.senha
          });
    },
    create(req, res) {
      console.log(req.body);
      return res.json({});
    },
    login(req, res) {
      return res.send("Bem-vindo a página de login");
    }
  };