
import Basket from "./Basket";
import Books from "./Books";
import {useReducer} from "react";
import Navigation from "./Navigation";
import booksMock from "./mocks/books";
const INITIAL_STATE = {
    basket: {
        items: [],
        totalPrice: 0,
        quantity: 0,
        opened: false,
    },
    filters: {
        word: "",
        category: "All",
    },
    books: {
        booksMock,
        categories: ["All", "Design", "Mobile", "Ux", "DevOps", "Essentials"],
    },
};


function reducer(state, action) {

    switch (action.type) {
        case "TOGGLE_BASKET":
            return {...state , basket: {...state.basket, opened: !state.basket.opened}};

        default:
            return state;
    }
}


function App() {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    console.log(state.basket);

  return (
    <div className='App'>
      <Navigation   dispatch={dispatch} />
      <Books />
      <Basket dispatch={dispatch} opened={state.basket.opened} />
    </div>
  );
}

export default App;
