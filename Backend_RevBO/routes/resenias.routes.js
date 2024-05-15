const router = require("express").Router();

const reseniaController = require("../controllers/resenias.controller");

router.get(
  "/",
  reseniaController.getResenias
);
router.get(
  "/:id",
  reseniaController.getResenia
);
router.post(
  "/",
  reseniaController.createResenia
);
router.put(
  "/:id",
  reseniaController.updateResenia
);
router.delete(
  "/:id",
  reseniaController.deleteResenia
);

module.exports = router;