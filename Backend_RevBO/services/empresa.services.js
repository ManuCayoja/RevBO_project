const Empresa = require("../models").empresa;

class EmpresaService {
  static async getEmpresas(params) {
    return await Empresa.findAll(params);
  }

  static async getEmpresa(id) {
    return await Empresa.findOne({ where: { id } });
  }

  static async createEmpresa(empresa) {
    return await Empresa.create({
      nombre: empresa.nombre,
      direccion: empresa.direccion,
      descripcion: empresa.descripcion,
      latitud: empresa.latitud,
      longitud: empresa.longitud,
      fk_categoria: empresa.fk_categoria,
    });
  }

  static async updateEmpresa(empresa) {
    const instance = await this.getEmpresa(empresa.id);

    if (!instance) return null;

    return instance.update({
      nombre: empresa.nombre,
      direccion: empresa.direccion,
      latitud: empresa.latitud,
      longitud: empresa.longitud,
      fk_categoria: empresa.fk_categoria,
    });
  }

  static async deleteEmpresa(id) {
    const instance = await this.getEmpresa(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = EmpresaService;