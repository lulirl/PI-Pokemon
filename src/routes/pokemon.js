const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Tipo } = require("../db");
const { Op } = require("sequelize");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    let getDb = await Pokemon.findAll({
      include: [
        {
          model: Tipo,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
    getDb = getDb.map((e) => {
      return {
        name: e.name,
        types: e.tipos.map((e) => e.name),
        img: e.img,
        attack: e.attack,
        hp: e.hp,
        speed: e.speed,
        defense: e.defense,
        height: e.height,
        weight: e.weight,
        createdInDb: e.createdInDb,
        id: e.id,
      };
    });
    let pokemonPromiseApi = await axios.get(
      "https://pokeapi.co/api/v2/pokemon"
    );
    let nextPokes = await axios.get(pokemonPromiseApi.data.next);
    pokemonPromiseApi.data.results.push(...nextPokes.data.results);

    let url = pokemonPromiseApi.data.results.map((a) => a.url); // junto los url []

    // let responses = [];
    // url.forEach((u) => responses.push(axios.get(u)));
    // res.send(responses);
    // console.log(responses);

    let requestUrl = url.map((l) => axios.get(l));

    // let responses = await (
    //   await Promise.all(requestUrl.slice(0, 2))
    // ).map((pokemon) => {
    //   return {
    //     name: pokemon.data.name,
    //     types: pokemon.data.types.map((t) => t.type.name),
    //     img: pokemon.data.sprites.other["official-artwork"].front_default,
    //     attack: pokemon.data.stats[1].base_stat,
    //   };
    // });
    // console.log(responses);
    // res.json(responses);

    let getUrl = await axios
      .all(requestUrl) // hace el get de cada link
      .then(
        axios.spread(function (...responses) {
          //para prevenir errores y seprar los links
          let filteredUrl = responses.map((pokemon) => {
            // me quedo con los elementos q quiero q muestre

            return {
              name: pokemon.data.name,
              types: pokemon.data.types.map((t) => t.type.name),
              img: pokemon.data.sprites.other["official-artwork"].front_default,
              attack: pokemon.data.stats[1].base_stat,
              id: pokemon.data.id,
            };
          });

          res.status(200).send(filteredUrl.concat(getDb));
        })
      );
  } catch (error) {
    next(error);
  }
});

router.get("/query", async (req, res) => {
  try {
    let { name } = req.query;
    let findDb = await Pokemon.findAll({
      where: { name: { [Op.iLike]: name } },
      include: [
        {
          model: Tipo,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
    findDb = findDb.map((e) => {
      return {
        name: e.name,
        types: e.tipos.map((e) => e.name),
        img: e.img,
        attack: e.attack,
        hp: e.hp,
        speed: e.speed,
        defense: e.defense,
        height: e.height,
        weight: e.weight,
        createdInDb: e.createdInDb,
        id: e.id,
      };
    });

    let findApi = await axios.get("https://pokeapi.co/api/v2/pokemon");
    let nextPokes = await axios.get(findApi.data.next);
    findApi.data.results.push(...nextPokes.data.results);
    let found = findApi.data.results.filter((p) => p.name === name);
    if (found.length > 0) {
      let url = found.map((a) => a.url); // junto los url
      let requestUrl = url.map(async (l) => await axios.get(l)); //
      let getUrl = await axios
        .all(requestUrl) // hace el get de cada link
        .then(
          axios.spread(function (...responses) {
            let filteredUrl = responses.map((pokemon) => {
              // me quedo con los elementos q quiero q muestre
              return {
                name: pokemon.data.name,
                types: pokemon.data.types.map((t) => t.type.name),
                img: pokemon.data.sprites.other["official-artwork"]
                  .front_default,
                id: pokemon.data.id,
              };
            });
            return res.send(filteredUrl.concat(findDb));
          })
        );
      return;
    }
    if (found.length === 0 && findDb.length > 0) {
      return res.send(findDb);
    }

    return res.sendStatus(404);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (typeof id === "string" && id.length > 8) {
      let pokemonDb = await Pokemon.findByPk(id, {
        include: [
          {
            model: Tipo,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });
      res.send(pokemonDb);
    } else {
      let findApi = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (...responses) {
          let filteredId = responses.map((pokemon) => {
            return {
              name: pokemon.data.name,
              types: pokemon.data.types.map((t) => t.type),
              img: pokemon.data.sprites.other["official-artwork"].front_default,
              id: pokemon.data.id,
              height: pokemon.data.height,
              weight: pokemon.data.weight,
              hp: pokemon.data.stats[0].base_stat,
              attack: pokemon.data.stats[1].base_stat,
              defense: pokemon.data.stats[2].base_stat,
              speed: pokemon.data.stats[3].base_stat,
              // stats: pokemon.data.stats.map((s) => s.stat.name),
            };
          });

          res.send(filteredId);
        });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, hp, attack, defense, speed, height, weight, img, id, types } =
      req.body;

    const newPokemon = await Pokemon.create({
      name,
      id,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
    });
    if (types.length > 1) {
      let find = await Tipo.findAll({ where: { name: types } });
      console.log(find);
      await newPokemon.addTipos(find);
    } else if (types.length === 1) {
      let found = await Tipo.findOne({ where: { name: types[0] } });
      await newPokemon.addTipo(found);
    }
    res.send(newPokemon);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
