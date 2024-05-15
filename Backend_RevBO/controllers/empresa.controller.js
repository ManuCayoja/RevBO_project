const EmpresaService = require("../services/empresa.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getEmpresas = asyncHandler(async (req, res) => {
  const params = req.query;
  const empresas = await EmpresaService.getEmpresas(params);
  return http.response200(res, empresas);
});

const getEmpresa = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const empresa = await EmpresaService.getEmpresa(id);
  return http.response200(res, empresa);
});

const createEmpresa = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const empresa = await EmpresaService.createEmpresa(payload);
  return http.response201(res, empresa);
});

const updateEmpresa = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const empresa = await EmpresaService.updateEmpresa(payload);
  return http.response200(res, empresa);
});

const deleteEmpresa = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await EmpresaService.deleteEmpresa(id);
  return http.response200(res);
});

module.exports = {
  getEmpresas,
  getEmpresa,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa,
};
