import { combineReducers, createStore } from "redux";

const INITIAL_STATE = {
  superheroes: {},
};

const allSuperheroes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_SUPERHEROES":
      return { ...state, superheroes: action.payload };

    default:
      return state;
  }
};


const store = createStore(allSuperheroes);

export default store;