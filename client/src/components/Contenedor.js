import React from "react";
import Pokemons from "./Pokemons";
import Order from "./Order";
import s from "./Contenedor.module.css";
// import img from "../img/jane.jpg";

function Contenedor() {
  return (
    <div className={s.container}>
      {/* <div className={s.back} style={{ backgroundImage: `url(${img})` }}> */}
      <Order />
      <Pokemons />
    </div>
  );
}

export default Contenedor;
