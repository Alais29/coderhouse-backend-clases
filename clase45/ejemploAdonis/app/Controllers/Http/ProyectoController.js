"use strict";

const Proyecto = require("../../Models/Proyecto");

class ProyectoController {
  async find({ request, response, auth }) {
    // try {
    //   await auth.check();
    // } catch (e) {
    //   return response.status(401).json({ msg: "Anda a la cancha" });
    // }

    const user = await auth.getUser();

    const proyectos = await user.proyectos().fetch();
    response.json(proyectos);
  }

  async create({ request, response, auth }) {
    const user = await auth.getUser();

    const { nombre } = request.all();

    const nuevoProyecto = new Proyecto();

    nuevoProyecto.fill({
      nombre,
    });

    await user.proyectos().save(nuevoProyecto);

    response.json(nuevoProyecto);
  }
}

module.exports = ProyectoController;
