import React from "react";
import { NavLink } from "react-router-dom";
import s from "../components/Pokemon.module.css";

export function Pokemon({ name, img, types, attack, id }) {
  return (
    <div className={s.card}>
      <NavLink to={`pokemons/${id}`} style={{ textDecoration: "none" }}>
        <h1 className={s.name}>{name}</h1>
        <img className="img" src={img} alt="img" />
        <p className={s.type}>{"Types: " + types}</p>
        {console.log(types)}
      </NavLink>
    </div>
  );
}
export default Pokemon;
