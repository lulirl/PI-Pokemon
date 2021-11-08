const { Router } = require("express");
const pokemonRouter = require("./pokemon");
const tiposRouter = require("./tipos");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/pokemon", pokemonRouter);
router.use("/types", tiposRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
