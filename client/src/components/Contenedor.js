import React from "react";
import Pokemons from "./Pokemons";
import Order from "./Order";
import s from "./Contenedor.module.css";
import { useSelector } from "react-redux";

// import img from "../img/jane.jpg";

function Contenedor() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className={darkMode ? s.containerDark : s.container}>
      {/* <div className={s.back} style={{ backgroundImage: `url(${img})` }}> */}

      <Order />
      <Pokemons />
    </div>
  );
}

export default Contenedor;
