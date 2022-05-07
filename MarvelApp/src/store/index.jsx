
   
import { configureStore } from "redux";

const INITIAL_STATE = {
  superhero: {},
};

const superheroes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_SUPERHERO":
      return { ...state, superhero: action.superhero };

    default:
      return state;
  }
};

const store = configureStore(superheroes);

export default store;