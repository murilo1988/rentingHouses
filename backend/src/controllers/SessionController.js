// metodos dentro de controller: index,show, update, store, destroy
/*
index: listagem de sessões
store: criar uma sessão
show: listar uam única sessão
update: alterar alguma sessão
destroy: deletar alguma sessão

*/

import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { email } = req.body.email;

    // verificando se usuário já existe
    let user = await User.findOne({ email: email });

    if (!user) {
      user = await User.create({ email: email });
    } else {
      res.json({ message: "Usuário já cadastrado" });
    }

    return res.json(user);
  }
}

export default new SessionController();
