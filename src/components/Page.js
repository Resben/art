import "../css/General.css";
import pic1 from "../assets/Untitled-1.png"
import pic2 from "../assets/c2.png"
import pic3 from "../assets/demon.png"
import pic4 from "../assets/demongirl.png"
import pic5 from "../assets/fire and flame.png"
import pic6 from "../assets/inspired.png"
import pic7 from "../assets/solo leveling.png"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";
import Container from '@mui/material/Container';


function Page() {
    return (
        <Container sx={{ bgcolor: '#262626', width: '100%' }}>
            <div className="simple">
                <Stack spacing={2}>
                    <Paper className="image-container" elevation={3}>
                        <img className="image" src = {pic1}></img>
                        <img className="image" src = {pic2}></img>
                        <img className="image" src = {pic3}></img>
                        <img className="image" src = {pic4}></img>
                    </Paper>
                    <Paper elevation={3}>
                        <img className="image" src = {pic5}></img>
                        <img className="image" src = {pic6}></img>
                        <img className="image" src = {pic7}></img>
                    </Paper>
                </Stack>
            </div>
        </Container>
        
    );
  }
  
  export default Page;