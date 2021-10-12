import React, {useContext } from "react";
import { Container, Grid } from "@mui/material";
import Book from "./Book";
import Filters from "./Filters";
import {AppContext} from "../App";
export default function Books() {

    const [state, dispatch] = useContext(AppContext);

  return (
    <Container fixed sx={{ mt: 4 }}>
        <Filters  category={state.filters.category} filters={state.books.categories}  dispatch={dispatch} />
      <Grid container spacing={2}>
        {state.filters.filterdBooks?.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </Grid>
    </Container>
  );
}
