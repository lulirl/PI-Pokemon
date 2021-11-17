import "./App.css";
import React from "react";

import { Route } from "react-router-dom";
import Home from "./components/Home";

import Bar from "./components/Bar";
import CreatePok from "./components/CreatePok";
import Contenedor from "./components/Contenedor";
import PokeDetail from "./components/Pokedetail";
import ToggleMode from "./components/ToggleMode";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pokemons">
        <Bar />
        <Contenedor />
      </Route>
      <Route exact path="/pokemons/:id" component={PokeDetail} />
      <Route exact path="/pokemons/create/poke" component={CreatePok} />
    </div>
  );
}

export default App;
