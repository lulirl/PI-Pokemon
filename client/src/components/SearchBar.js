import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPoke } from "../actions/index";
import { NavLink } from "react-router-dom";

import logo from "../img/pokelogo.svg";

import styles from "../components/Searchbar.module.css";

export default function SearchBar() {
  const darkMode = useSelector((state) => state.darkMode);
  const [search, setSearch] = useState(""); // creo un estado local search, que se modifica con setsearch
  let dispatch = useDispatch(); // uso dispatch para pasar una accion

  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchPoke(search.toLowerCase()));

    //disparo mi accion searchPoke con search
  }
  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value); // hago que search tenga el valor que se escribe en la barra
  }
  return (
    <div>
      <div className={styles.navbar}>
        <a href="/">
          <div className={styles.logo}>
            <img src={logo} alt="" />
            {/* <img src={pikachu} alt="" /> */}
          </div>
        </a>

        <div className={styles.searchBar}>
          <div className={styles.inputContainer}>
            <form onSubmit={onSubmit}>
              <input
                className={darkMode ? styles.searchDark : styles.searchInput}
                type="text"
                onChange={onInputChange}
                value={search}
                placeholder="Search pokemons..."
              />
              <input
                className={darkMode ? styles.goDark : styles.go}
                type="submit"
                value="GO!"
              />
            </form>
          </div>
        </div>
        <div className={styles.navbarRight}>
          <NavLink to="/pokemons/create/poke">
            <button className={darkMode ? styles.createDark : styles.create}>
              Create a new Pokemon
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
