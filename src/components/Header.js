import React from "react";
import "../css/General.css";
import pic1 from "../assets/resben.png"
import pic2 from "../assets/dev.png"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Header() {
  return (

    <Container className="header-container">
    <Grid container className="header-grid" spacing={2}>
      <Grid item xs={4}>
        <img className="image" src={pic1}></img>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
        <img className="image" src={pic2}></img>
      </Grid>
    </Grid>
    </Container>
  );
}

export default Header;