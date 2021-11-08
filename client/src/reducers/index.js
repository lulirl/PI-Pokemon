import {
  GET_POKE,
  SEARCH_POKE,
  SORT_ATTACK,
  SORT_POKE,
  FILTER_TYPE,
  FILTER_CREATOR,
  GET_DETAILS,
  SEARCH_TYPES,
  POST_POKE,
  CLEAR_POKE,
  RESET_POKE,
} from "../actions";
const initialState = {
  pokemons: [],
  filteredPokemons: [],
  types: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_POKE) {
    return {
      ...state,
      pokemons: action.payload,
      filteredPokemons: action.payload,
    };
  }
  if (action.type === SEARCH_POKE) {
    return {
      ...state,
      filteredPokemons: action.payload,
    };
  }
  if (action.type === SORT_POKE) {
    let orderedPokemons = [...state.pokemons];
    if (state.filteredPokemons.length < 40) {
      let orderFilteredPoke = state.filteredPokemons.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return action.payload === "ascendente" ? -1 : 1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return action.payload === "ascendente" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredPokemons: [...orderFilteredPoke],
      };
    } else {
      orderedPokemons = orderedPokemons.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return action.payload === "ascendente" ? -1 : 1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return action.payload === "ascendente" ? 1 : -1;
        }
        return 0;
      });
      console.log(orderedPokemons);
      return {
        ...state,
        filteredPokemons: orderedPokemons,
      };
    }
  }

  if (action.type === SORT_ATTACK) {
    if (state.filteredPokemons.length < 40) {
      let filterOrderPokes = state.filteredPokemons;
      let filter = filterOrderPokes.sort((a, b) => {
        if (a.attack > b.attack) {
          return action.payload === "high" ? -1 : 1;
        }
        if (a.attack < b.attack) {
          return action.payload === "high" ? 1 : -1;
        }
        // a must be equal to b
        return 0;
      });
      return {
        ...state,
        filteredPokemons: [...filter],
      };
    } else {
      let orderedPokemons = [...state.pokemons];

      let filterPokes = orderedPokemons.sort((a, b) => {
        if (a.attack > b.attack) {
          return action.payload === "high" ? -1 : 1;
        }
        if (a.attack < b.attack) {
          return action.payload === "high" ? 1 : -1;
        }
        // a must be equal to b
        return 0;
      });

      return {
        ...state,
        filteredPokemons: filterPokes,
      };
    }
  }

  if (action.type === FILTER_TYPE) {
    const typeFiltered =
      action.payload === "All"
        ? state.pokemons
        : state.pokemons.filter(
            (p) =>
              p.types[0] === action.payload || p.types[1] === action.payload
          );

    return {
      ...state,
      filteredPokemons: typeFiltered,
    };
  }
  if (action.type === FILTER_CREATOR) {
    const createdFilter =
      action.payload === "new"
        ? state.pokemons.filter((e) => e.createdInDb)
        : state.pokemons.filter((e) => !e.createdInDb);
    return {
      ...state,
      filteredPokemons:
        action.payload === "all" ? state.pokemons : createdFilter,
    };
  }
  if (action.type === GET_DETAILS) {
    return {
      ...state,
      filteredPokemons: action.payload,
    };
  }
  if (action.type === SEARCH_TYPES) {
    return {
      ...state,
      types: action.payload,
    };
  }
  if (action.type === POST_POKE) {
    return {
      ...state,
    };
  }
  if (action.type === CLEAR_POKE) {
    return {
      ...state,
      filteredPokemons: [],
    };
  }
  if (action.type === RESET_POKE) {
    return {
      ...state,
      filteredPokemons: [...state.pokemons],
    };
  }
  return state;
}

export default rootReducer;
