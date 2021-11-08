import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { searchTypes } from "../actions";
import { NavLink } from "react-router-dom";
import { postPoke } from "../actions";
import { useHistory } from "react-router";
import lab from "../img/lab.jpeg";
import gif from "../img/pokemon.gif";

import s from "./CreatePoke.module.css";
function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "You have to name your Pokemon";
  } else if (!input.types.length === 0) {
    errors.types = "You have to select up to two types";
  } else if (!input.img) {
    errors.img = "You have to add an image";
  } else if (!input.hp) {
    errors.hp = "Your pokemon's HP must be a number";
  } else if (!input.attack) {
    errors.attack = "Your pokemon's attack must be a number";
  } else if (!input.defense) {
    errors.defense = "Your pokemon's defense must de a number";
  } else if (!input.speed) {
    errors.speed = "Your pokemon's speed must be a number";
  } else if (!input.height) {
    errors.height = "Your pokemon's height must be a number";
  } else if (!input.weight) {
    errors.weight = "Your pokemon's weight must be a number";
  }
  return errors;
}
export function CreatePok() {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);
  useEffect(() => {
    dispatch(searchTypes());
  }, [dispatch]);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    types: [],
    img: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.name !== "" &&
      input.types.length > 0 &&
      input.img !== "" &&
      input.hp !== "" &&
      input.attack !== "" &&
      input.defense !== "" &&
      input.height !== "" &&
      input.speed !== "" &&
      input.weight !== ""
    ) {
      dispatch(postPoke(input));
      alert("There is a new Pokemon in this world!");
      setInput({
        name: "",
        types: [],
        img: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
      });
      history.push("/pokemons");
    } else {
      alert("You must complete all fields");
    }
  }
  function handleDelete(type) {
    setInput({
      ...input,
      types: input.types.filter((t) => t !== type),
    });
  }
  function handleSelect(e) {
    setInput({
      ...input,
      types: [...input.types, e.target.value]
        .filter((t) => t !== "Types")
        .reduce((acc, item) => {
          if (!acc.includes(item)) {
            acc.push(item);
          }
          return acc;
        }, []),
    });
  }

  return (
    <div>
      <div className={s.back} style={{ backgroundImage: `url(${lab})` }}>
        {/* <div className={s.back} style={{ backgroundImage: `url(${gif})` }}> */}

        <div className={s.center}>
          <div className={s.formbox}>
            <NavLink
              style={{ textDecoration: "none" }}
              className={s.submitBtn}
              to="/pokemons"
            >
              Go Back
            </NavLink>
            <form onSubmit={handleSubmit}>
              <button className={s.submitBtn} type="submit">
                Create
              </button>
              <div className={s.field1}>
                <label className={s.label}>Name</label>
                <input
                  className={s.input}
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={handleChange}
                  required
                />

                {errors.name && <p>{errors.name}</p>}
              </div>

              <div>
                <label className={s.label}>Image</label>
                <input
                  className={s.input}
                  type="text"
                  value={input.img}
                  name="img"
                  onChange={handleChange}
                  required
                />
                {errors.img && <p>{errors.img}</p>}
              </div>
              <br></br>
              <div>
                <label className={s.label}>Types</label>
                <select
                  className={s.input}
                  name="select"
                  onChange={handleSelect}
                  required
                >
                  <option hidden disabled selected value>
                    Types
                  </option>
                  {types && types.map((t) => <option value={t}>{t}</option>)}
                </select>
                {errors.types && <p>{errors.types}</p>}
              </div>
              <br></br>
              <div>
                <label className={s.label}>Hp</label>
                <input
                  className={s.input}
                  type="number"
                  value={input.hp}
                  name="hp"
                  min="10"
                  max="1000"
                  onChange={handleChange}
                  required
                />
                {errors.hp && <p>{errors.hp}</p>}
              </div>

              <div>
                <label className={s.label}>Attack</label>
                <input
                  className={s.input}
                  type="number"
                  value={input.attack}
                  name="attack"
                  onChange={handleChange}
                  required
                />
                {errors.attack && <p>{errors.attack}</p>}
              </div>

              <div>
                <label className={s.label}>Defense</label>
                <input
                  className={s.input}
                  type="number"
                  value={input.defense}
                  name="defense"
                  onChange={handleChange}
                  required
                />
                {errors.defense && <p>{errors.defense}</p>}
              </div>

              <div>
                <label className={s.label}>Speed</label>
                <input
                  className={s.input}
                  type="text"
                  value={input.speed}
                  name="speed"
                  onChange={handleChange}
                  required
                />
                {errors.speed && <p>{errors.speed}</p>}
              </div>

              <div>
                <label className={s.label}>Height</label>
                <input
                  className={s.input}
                  type="text"
                  value={input.height}
                  name="height"
                  onChange={handleChange}
                  required
                />
                {errors.height && <p>{errors.height}</p>}
              </div>

              <div>
                <label className={s.label}>Weight</label>
                <input
                  className={s.input}
                  type="text"
                  value={input.weight}
                  name="weight"
                  onChange={handleChange}
                  required
                />
                {errors.weight && <p>{errors.weight}</p>}
              </div>

              {/* <button className={s.submitBtn} type="submit">
          Create your Pokemon!
        </button> */}
            </form>
            {input.types.map((t) => (
              <div>
                <p>{t}</p>
                <button onClick={() => handleDelete(t)}>x</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePok;
