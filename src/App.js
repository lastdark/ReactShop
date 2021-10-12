
import Basket from "./Basket";
import Books from "./Books";
import {useReducer,createContext} from "react";
import Navigation from "./Navigation";
import booksMock from "./mocks/books";
import books from "./mocks/books";



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
        title:'',
        filterdBooks:booksMock
    },
    books: {

        categories: ["All", "Design", "Mobile", "Ux", "DevOps", "Essentials"],
    },
};

export const AppContext = createContext();
function reducer(state, action) {

    switch (action.type) {
        case "TOGGLE_BASKET":
            return {...state , basket: {...state.basket, opened: !state.basket.opened}};

        case "FILTER_BOOK":
        return {...state,
            filters:{...state.filters,
                category:action.payload,
                filterdBooks: (action.payload==='All')?booksMock: booksMock.filter((book) => book.category ===action.payload)},


        };

        case "FILTER_TITLE":
            return {...state,
                filters:{...state.filters,
                    title:action.payload,
                    filterdBooks: (action.payload.length)? booksMock.filter((book) => book.category ===action.payload):booksMock},


            };



        default:
            return state;
    }
}


function App() {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    console.log(state);
  return (
    <div className='App'>
        <AppContext.Provider value={[state, dispatch]}>
        <Navigation />
         <Books />
       <Basket dispatch={dispatch} opened={state.basket.opened} />

        </AppContext.Provider>
    </div>
  );
}

export default App;
