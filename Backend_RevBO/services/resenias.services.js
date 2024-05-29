//const resenias = require("../models/resenias");

const Resenia = require("../models").resenia;

class ReseniaService {
  static async getResenias(params) {
    return await Resenia.findAll(params);
  }

  static async getResenia(id) {
    return await Resenia.findOne({ where: { id } });
  }

  static async createResenia(resenia) {
    return await Resenia.create({
      puntuacion: resenia.puntuacion,
      comentario: resenia.comentario,
      fecha: resenia.fecha,
      fk_usuario: resenia.fk_usuario,
      fk_empresa: resenia.fk_empresa,
    });
  }

  static async updateResenia(resenia) {
    const instance = await this.getResenia(resenia.id);

    if (!instance) return null;

    return instance.update({
      puntuacion: resenias.puntuacion,
      comentario: resenias.comentario,
      fecha: resenias.fecha,
      fk_usuario: resenias.fk_usuario,
      fk_empresa: resenias.fk_empresa,
    });
  }

  static async deleteResenia(id) {
    const instance = await this.getResenia(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = ReseniaService;