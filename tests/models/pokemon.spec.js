const { Pokemon, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Pokemon.create({ name: "Pikachu" });
      });
    });
    describe("hp", () => {
      it("should not create a pokemon if hp is not a number", () => {
        Pokemon.create({
          name: "superpoke",
          hp: "alive",
          attack: 80,
          defense: 55,
          speed: 55,
          height: 45,
          weight: 250,
        })
          .then(() => done("Should not have been created"))
          .catch(() => done());
      });
    });
    describe("attack", () => {
      it("should not create a pokemon if its attack is not a number", () => {
        Pokemon.create({
          name: "superpoke",
          hp: 35,
          attack: "great attacker",
          defense: 55,
          speed: 55,
          height: 45,
          weight: 250,
        })
          .then(() => done("Should not have been created"))
          .catch(() => done());
      });
    });
  });
});
