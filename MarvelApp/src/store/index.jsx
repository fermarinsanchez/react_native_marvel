import { createStore } from "redux";

const INITIAL_STATE = {
  superheroes: {},
  mySuperheroes: {},
};

const allSuperheroes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_SUPERHEROES":
      return { ...state, superheroes: action.payload };

    default:
      return state;
  }
};

const addMySuperheroes = (state = INITIAL_STATE, action) => {
    console.log('actionType', action.type)

    switch (action.type) {
      case "ADD_MY_SUPERHEROES":
        return { ...state, payload: action.superhero };
  
      default:
        return state;
    }
  };

const store = createStore(allSuperheroes);

export default store;