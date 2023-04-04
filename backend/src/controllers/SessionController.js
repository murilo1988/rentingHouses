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
    const { email } = req.body;

    // verificando se usuário já existe
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
      // console.log(user);
      return res.json(user);
    } else {
      return res.status(400).json({ message: "Usuário já cadastrado" });
    }
  }
}

export default new SessionController();
