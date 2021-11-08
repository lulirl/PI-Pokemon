// /* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "Pikachu",
};

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );
  // describe("GET /api/pokemon", () => {
  //   it("responds with 200", () => agent.get("/api/pokemon").expect(200));
  //   // it("should get 40 pokemons from the PokeApi", () => {
  //   //   agent.get("/api/pokemon").expect((res) => {
  //   //     expect(res.body).to.have.lengthOf(40);
  //   //   });
  describe("POST /api/pokemon", () => {
    it("should respond with 200", () => {
      agent
        .post("/api/pokemon")
        .send({
          name: "superpoke",
          hp: 100,
          attack: 80,
          defense: 55,
          speed: 55,
          height: 45,
          weight: 250,
          types: ["flying"],
          image:
            "https://e7.pngegg.com/pngimages/519/973/png-clipart-spider-pig-costume-t-shirt-spider-man-spider-pig-fictional-character-cartoon-thumbnail.png",
        })
        .expect(200);
    });
  });
});
// });
// });
it("creates a pokemon in database", () => {
  agent
    .post("pokemon")
    .send({
      name: "superpoke",
      hp: 100,
      attack: 80,
      defense: 55,
      speed: 55,
      height: 45,
      weight: 250,
      types: ["flying"],
      image:
        "https://e7.pngegg.com/pngimages/519/973/png-clipart-spider-pig-costume-t-shirt-spider-man-spider-pig-fictional-character-cartoon-thumbnail.png",
    })
    .then(() => {
      Pokemon.findOne({
        where: {
          name: "superpoke",
        },
      });
    })
    .then((activity) => {
      expect(activity).to.exist;
    });
});
// it('correctly sets pokemon/types in database', () => {
//   agent.post('/api/pokemon')
//   .send({
//     name: "superpoke",
//     hp: 100,
//     attack: 80,
//     defense: 55,
//     speed: 55,
//     height: 45,
//     weight: 250,
//     types: ["flying"],
//     image:
//       "https://e7.pngegg.com/pngimages/519/973/png-clipart-spider-pig-costume-t-shirt-spider-man-spider-pig-fictional-character-cartoon-thumbnail.png"
//   })
//   .then(() => {
//     Pokemon.findOne({
//       where: {
//         name: "superpoke"
//       },
//       include: {
//         model: Tipo
//       }
//     });
//   })
//   .then((activity) => {
//     expect().to.equal('');
//
//   })
// })
