import { useState, useEffect } from "react";
import Basket from "./Basket";
import Books from "./Books";
import {useReducer} from "react";
import Navigation from "./Navigation";
const INITIAL_STATE = {opned:false};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "TOGGLE_BASKET":
            return {...state ,opned: !state.opned};

        default:
            return state;
    }
}
function App() {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    console.log(state.opned);

  return (
    <div className='App'>
      <Navigation   dispatch={dispatch} />
      <Books />
      <Basket dispatch={dispatch} opened={state.opned} />
    </div>
  );
}

export default App;
