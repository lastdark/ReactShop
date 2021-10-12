import React from "react";
import { Input, InputLabel, InputAdornment, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({dispatch,category}) {


  return (
    <FormControl variant='standard' className='custom-input'>
      <InputLabel htmlFor='input-with-icon-adornment'>Search a book</InputLabel>
      <Input
        id='input-with-icon-adornment'
        name='name'
        onChange={(e)=> dispatch({type:"FILTER_TITLE",payload:e.target.value})} />
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
