import '../css/App.css';
import Header from '../components/Header';
import Page from '../components/Page';
import Footer from '../components/Footer';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="background">
      <Container className="main-container">
        <Header />
        <Page />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
