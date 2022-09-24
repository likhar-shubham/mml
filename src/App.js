import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Header/Navbar';
import HomePage from './components/Home/HomePage';
import Contacts from './components/Contacts/Contacts';
import LostLeads from './components/LostLeads/LostLeads';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Bebas Neue', 'cursive'
    ].join(','),
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/lostleads" element={<LostLeads/>} />
          </Routes>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
