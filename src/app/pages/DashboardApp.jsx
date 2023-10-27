import { Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import AppWelcome from '../components/secctions/@dashboard/app/AppWelcome';
import AppSlider from '../components/secctions/@dashboard/app/AppSlider';
import AppWebVisitis from '../components/secctions/@dashboard/app/AppWebVisitis';
import AppCurrentVisits from '../components/secctions/@dashboard/app/AppCurrentVisits';
import { useTheme } from '@mui/material/styles';

const DashboardApp = () => {
    const theme = useTheme();


    return (
        <>
            <Container maxWidth='xl' >
             <Grid2 container spacing={2} >

                <Grid2 item xs={12} md={8} >
                 <AppWelcome/>            
                </Grid2>

                <Grid2 item xs={12}  md={4} >
                <AppSlider />             
                </Grid2>

                <Grid2 item xs={12} md={4}>
                <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />              
                </Grid2>


                <Grid2 item xs={12} md={8} >
                <AppWebVisitis title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
                '12/01/2023',
              ]}
              chartData={[
                
                {
                  name: 'Asia',
                  type: 'line',
                  fill: 'solid',
                  data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51,49],
                },
                {
                  name: 'America',
                  type: 'line',
                  fill: 'solid',
                  data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56,77],
                },
                
              ]}/>             
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
