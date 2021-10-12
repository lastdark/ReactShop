import React, {useContext} from "react";
import { Stack, Paper, Chip } from "@mui/material";
import SearchBar from "./SearchBar";

import {AppContext} from "../../App";

export default function Filters({ filters,category,dispatch }) {



  return (
    <>
      <Stack direction='row' spacing={2} sx={{ my: 5 }}>
        <SearchBar />
      </Stack>
      <Stack direction='row' spacing={2} sx={{ my: 5 }}>
        {filters?.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            color={filters === filter ? "secondary" : "primary"}
            color={ category === filter ? "secondary" : "primary"}
            onClick={() => dispatch({type:"FILTER_BOOK",payload:filter})}
            variant={category === filter ? "filled" : "outlined"}
          />
        ))}
      </Stack>
    </>
  );
}
