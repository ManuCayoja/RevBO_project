const ReseniaService = require("../services/resenias.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getResenias = asyncHandler(async (req, res) => {
  const params = req.query;
  const resenias = await ReseniaService.getResenias(params);
  return http.response200(res, resenias);
});

const getResenia = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const resenia = await ReseniaService.getResenia(id);
  return http.response200(res, resenia);
});

const createResenia = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const resenia = await ReseniaService.createResenia(payload);
  return http.response201(res, resenia);
});

const updateResenia = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const resenia = await ReseniaService.updateResenia(payload);
  return http.response200(res, resenia);
});

const deleteResenia = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await ReseniaService.deleteResenia(id);
  return http.response200(res);
});

module.exports = {
  getResenias,
  getResenia,
  createResenia,
  updateResenia,
  deleteResenia,
};