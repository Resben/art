import React from "react";
import "../css/General.css";
import Container from '@mui/material/Container';

function Footer() {
  return (

    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', bgcolor: '#262626', color: '#ffffff' }}>
        <div className="simple-break">
            <a className="link" href="https://www.instagram.com/resbenart/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a className="link" href="https://twitter.com/ResbenArt" target="_blank">
                <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a className="link" href="https://www.tiktok.com/@resbenart" target="_blank">
                <i class="fa-brands fa-tiktok"></i>
            </a>
            <a className="link" href="https://resben.itch.io/" target="_blank">
                <i class="fa-brands fa-itch-io"></i>
            </a>
        </div>
    </Container>
  );
}

export default Footer;