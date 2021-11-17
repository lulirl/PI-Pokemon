const { default: axios } = require("axios");
const { Router } = require("express");
const { conn } = require("../db");
const { Tipo } = require("../db");
const Pokemon = require("../models/Pokemon");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// [ ] GET /types:
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get("/", async (req, res) => {
  let tiposApi = await axios.get("https://pokeapi.co/api/v2/type");
  let name = await tiposApi.data.results.map((t) => t);

  let tipos = await Tipo.bulkCreate(name);
  tipos = tipos.map((t) => t.name);
  res.send(tipos);
});

router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log(name);
    let newType = await Tipo.create({ name });
    console.log(newType);
    res.status(201).send(newType);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
