const router = require("express").Router();

const v1 = "v1";

router.use(`/${v1}/usuarios`, require("./usuarios.routes"));
router.use(`/${v1}/resenias`, require("./resenias.routes"));
router.use(`/${v1}/empresas`, require("./empresa.routes"));
router.use(`/${v1}/categorias`, require("./categoria.routes"));

module.exports = router;
