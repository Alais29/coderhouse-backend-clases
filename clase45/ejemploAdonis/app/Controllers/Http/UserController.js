"use strict";
// es como import User from '../Models/User
// tambien funciona
const User = use("App/Models/User");

class UserController {
  async store({ request, response }) {
    //en general se usa de esta forma para obtener el req.body
    //const { username, email, password } = request.all();
    const body = request.all();
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return response.status(400).json({ msg: "Invalid body params" });
    }

    const user = await User.create({
      username,
      password,
      email,
    });

    response.status(201).json({ msg: "Guardando un usuario", user });
  }

  async login({ request, response, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);

    response.status(200).json({
      msg: "Login OK",
      token,
    });
  }
}

module.exports = UserController;
