import {React, useEffect} from 'react';
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import { Button, Container} from '@mui/material';


function App() {
//use the useEffect hook
  useEffect(() => {
    document.title = "Home"
    return () => { 
    };
  }, []);
  
  return (
    <Container

    // add some styling using the M-UI library

    maxWidth="xl"
    sx={{background: "#fff"}}
    >
      
    <Button variant="outlined" 
    onClick={() => {
    alert('clicked')}}
    size="large"
    startIcon={<HomeIcon />}> HOME </Button>
    </Container>
  );
}

export default App;
