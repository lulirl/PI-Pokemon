import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getPoke, goToPageOne } from "../actions/index";
import Pokemon from "./Pokemon";
import Paginado from "./Paginado";
import a from "../img/loading.gif";
import no from "../img/pikachu-triste.gif";
import s from "../components/Pokemons.module.css";

export function Pokemons() {
  var rawPoke = useSelector((state) => state.pokemons);
  var page = useSelector((state) => state.currentPage);
  // const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12); // personajes por pag
  const indexOfLastPokemon = page * pokemonsPerPage; // 12
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; //12-12 =0
  var pokemons = useSelector((state) => state.filteredPokemons);
  if (pokemons.length)
    var currentPokemons = pokemons.slice(
      indexOfFirstPokemon,
      indexOfLastPokemon
    ); //personajes en la pagina actual, divide el arreglo pokemons del 0 al 12
  // setea el estado de la pagina actual, me ayuda en el renderizado
  const paginado = (pageNumber) => {
    dispatch(goToPageOne(pageNumber));
  };
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPoke());
  }, [dispatch]);

  return (
    <div>
      {/* <div className={s.back} style={{ backgroundImage: `url(${img})` }}> */}
      <div>
        {rawPoke && rawPoke.length ? (
          currentPokemons && currentPokemons.length ? (
            <div>
              <div className={s.cards}>
                {currentPokemons.map((pokemon) => {
                  return (
                    <div key={pokemon.id}>
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
              <h1> Pokemon not found </h1>
              <img src={no} alt="" />
            </div>
          )
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
