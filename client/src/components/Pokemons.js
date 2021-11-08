import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getPoke } from "../actions/index";
import Pokemon from "./Pokemon";
import Paginado from "./Paginado";
import a from "../img/loading.gif";

import s from "../components/Pokemons.module.css";

export function Pokemons() {
  var pokemons = useSelector((state) => state.filteredPokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  if (pokemons)
    var currentPokemons = pokemons.slice(
      indexOfFirstPokemon,
      indexOfLastPokemon
    );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPoke());
  }, [dispatch]);

  return (
    <div>
      {/* <div className={s.back} style={{ backgroundImage: `url(${img})` }}> */}
      <div>
        {currentPokemons && currentPokemons.length ? (
          <div>
            <div className={s.cards}>
              {currentPokemons.map((pokemon) => {
                console.log(currentPokemons);
                return (
                  <div>
                    <Pokemon
                      id={pokemon.id}
                      name={pokemon.name}
                      img={pokemon.img}
                      types={
                        !pokemon.types?.[1]
                          ? pokemon.types?.[0]
                          : pokemon.types?.[1] + " " + pokemon.types?.[0]
                      }
                      attack={pokemon.attack}
                    />
                  </div>
                );
              })}
            </div>
            <Paginado
              pokemonPerPage={pokemonsPerPage}
              pokemons={pokemons.length}
              paginado={paginado}
            />
          </div>
        ) : (
          <div>
            <h1>Loading ... </h1>
            <img src={a} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Pokemons;
