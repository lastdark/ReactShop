import React from "react";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Typography, Badge, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Basket from "../Basket";
export default function Navigation({opned,dispatch}) {

    console.log(opned);
  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          sx={{ display: "flex", cursor: "pointer" }}
          onClick={() => console.log("test")}
        >
          <Typography
            variant='button'
            display='block'
            component='h6'
            color='primary'
            sx={{ mr: 1 }}
          >

              <Button onClick={() => dispatch({ type: "TOGGLE_BASKET" })}>
                  Basket
              </Button>\



          </Typography>
          <Badge badgeContent={0} color='primary'>
            <ShoppingCartTwoToneIcon color='action' />
          </Badge>
        </Grid>
      </Grid>
    </Container>
  );
}
