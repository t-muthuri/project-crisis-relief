import './App.css';
import { Button, Container} from '@mui/material';
import {React, useEffect} from 'react';

function App() {
//use the useEffect hook
  useEffect(() => {
    document.title = "Home"
    return () => { 
    };
  }, []);
  
  return (
    <Container maxWidth="xl">
      
    <Button>Hello!</Button>
    </Container>
  );
}

export default App;
