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
  GO_BACK,
  TOGGLE_MODE,
} from "../actions";
const initialState = {
  pokemons: [],
  filteredPokemons: [],
  types: [],
  currentPage: 1,
  nameOrder: "default",
  attackOrder: "deafult",
  typeOrder: "default",
  newOrCreated: "default",
  darkMode: false,
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
        nameOrder: action.payload,
        attackOrder: "default",
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
        nameOrder: action.payload,
        attackOrder: "default",
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
        nameOrder: "default",
        attackOrder: action.payload,
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
        nameOrder: "default",
        attackOrder: action.payload,
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
    // const orderType = action.payload.substring(0);

    return {
      ...state,
      filteredPokemons: typeFiltered,
      attackOrder: "default",
      nameOrder: "default",
      typeOrder: action.payload,
      newOrCreated: "default",
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
      attackOrder: "default",
      nameOrder: "default",
      typeOrder: "default",
      newOrCreated: action.payload,
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
      nameOrder: "default",
      attackOrder: "deafult",
      typeOrder: "default",
      newOrCreated: "default",
    };
  }
  if (action.type === GO_BACK) {
    return {
      ...state,
      currentPage: action.payload,
    };
  }
  if (action.type === TOGGLE_MODE) {
    const newDarkMode = !state.darkMode;
    return {
      ...state,
      darkMode: newDarkMode,
    };
  }
  return state;
}

export default rootReducer;
