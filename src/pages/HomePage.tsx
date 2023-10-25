import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CRUDPage from './CRUDPage';

export default function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg' sx={{bgcolor:'red'}}>
        <Box sx={{ bgcolor: '#cfe8fc', 
                   height: '100vh',
                   alignItems:'center' ,
                   justifyContent:'center', 
                   display:'flex' }} >
                    <CRUDPage />
          
        </Box>
      </Container>
    </React.Fragment>
  );
}