const router = require("express").Router();

const empresaController = require("../controllers/empresa.controller");

router.get(
  "/",
  empresaController.getEmpresas
);
router.get(
  "/:id",
  empresaController.getEmpresa
);
router.post(
  "/",
  empresaController.createEmpresa
);
router.put(
  "/:id",
  empresaController.updateEmpresa
);
router.delete(
  "/:id",
  empresaController.deleteEmpresa
);

module.exports = router;