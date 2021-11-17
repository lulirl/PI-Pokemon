import React from "react";
import { useSelector } from "react-redux";
import s from "./Paginado.module.css";

export default function Paginado({ pokemonPerPage, pokemons, paginado }) {
  const darkMode = useSelector((state) => state.darkMode);
  let pageNumber = [];
  for (let i = 0; i < Math.ceil(pokemons / pokemonPerPage); i++) {
    //40/12
    pageNumber.push(i + 1);
  }
  //para renderizar los numeritos
  return (
    <div className={s.container}>
      <div>
        <div className={darkMode ? s.centerDark : s.center}>
          {pageNumber.length > 1 &&
            pageNumber.map((number, i) => {
              return (
                <button
                  key={i}
                  className={darkMode ? s.numberDark : s.number}
                  onClick={() => paginado(number)}
                >
                  {number}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
