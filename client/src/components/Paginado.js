import React from "react";
import s from "./Paginado.module.css";

export default function Paginado({ pokemonPerPage, pokemons, paginado }) {
  let pageNumber = [];
  for (let i = 0; i < Math.ceil(pokemons / pokemonPerPage); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <div className={s.container}>
      <div>
        <div className={s.center}>
          {pageNumber &&
            pageNumber.map((number) => {
              return (
                <a className={s.number} onClick={() => paginado(number)}>
                  {number}
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
}
