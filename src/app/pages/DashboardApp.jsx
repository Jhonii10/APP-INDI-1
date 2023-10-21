import { Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import AppWelcome from '../components/secctions/@dashboard/app/AppWelcome';
import AppSlider from '../components/secctions/@dashboard/app/AppSlider';

const DashboardApp = () => {
    return (
        <>
            <Container maxWidth='xl' >
             <Grid2 container spacing={2} >

                <Grid2 item xs={12} md={8} >
                 <AppWelcome/>            
                </Grid2>

                <Grid2 item xs={12}  md={4} >
                <AppSlider/>             
                </Grid2>


                <Grid2 item xs={12} sm={6} md={4} >
                <div>Item 1</div>              
                </Grid2>
                <Grid2 item xs={12} sm={6} md={4}>
                <div>Item 2</div>              
                </Grid2>
                
                <Grid2 item xs={12} sm={6} md={4}>
                <div>Item 3</div>              
                </Grid2>


                <Grid2 item xs={12} sm={6} md={4} sx={{padding:1}}>
                <div>Item 1</div>            
                </Grid2>

                <Grid2 item xs={12} sm={6} md={8}>
                <div>Item 1</div>              
                </Grid2>

                <Grid2 item xs={12} sm={6} md={4} sx={{padding:1}}>
                <div>Item 1</div>            
                </Grid2>

                <Grid2 item xs={12} sm={6} md={8}>
                <div>Item 1</div>              
                </Grid2>
    
    
             </Grid2>

            </Container>
        </>
    );
}

export default DashboardApp;
