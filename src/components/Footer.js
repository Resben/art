import React from "react";
import "../css/General.css";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Footer() {
  return (

    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', bgcolor: '#EE9747', color: '#ffffff' }}>

        <Grid container className="header-grid" spacing={2}>
            <Grid item xs={4}>
                <h5 className="header-title">Resben Art</h5>
            </Grid>
            <Grid item xs={4}>
                <a className="link" href="https://www.instagram.com/resbenart/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a className="link" href="https://twitter.com/ResbenArt" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                <a className="link" href="https://www.tiktok.com/@resbenart" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
                <a className="link" href="https://resben.itch.io/" target="_blank"><i class="fa-brands fa-itch-io"></i></a>
            </Grid>
            <Grid item xs={4}>
                <h1 className="header-title"></h1>
            </Grid>
        </Grid>
    </Container>
  );
}

export default Footer;