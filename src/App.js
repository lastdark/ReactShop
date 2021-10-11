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
            return {state};

        default:
            return state;
    }
}
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Books />
      <Basket />
    </div>
  );
}

export default App;
