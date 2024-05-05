import "../css/General.css";
import pic1 from "../assets/c2_v2.png"
import { Stack } from "@mui/material";
import Container from '@mui/material/Container';


function Page() {
    return (
        <Container sx={{ bgcolor: '#EE9747', width: '100%' }}>
            <div className="simple">
                <Stack spacing={2}>
                    <img className="image" src = {pic1}></img>
                </Stack>
            </div>
        </Container>
        
    );
  }
  
  export default Page;