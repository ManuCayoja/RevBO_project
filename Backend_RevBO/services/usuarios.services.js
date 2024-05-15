const Usuario = require("../models").usuarios;

class UsuarioService {
  static async getUsuarios(params) {
    return await Usuario.findAll(params);
  }

  static async getUsuario(id) {
    return await Usuario.findOne({ where: { id } });
  }

  static async createUsuario(usuario) {
    return await Usuario.create({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      password: usuario.password,
    });
  }

  static async updateUsuario(usuario) {
    const instance = await this.getUsuario(usuario.id);

    if (!instance) return null;

    return instance.update({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      password: usuario.password,
    });
  }

  static async deleteUsuario(id) {
    const instance = await this.getUsuario(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = UsuarioService;