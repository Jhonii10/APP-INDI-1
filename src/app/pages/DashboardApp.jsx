import { Container, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import AppWelcome from '../components/secctions/@dashboard/app/AppWelcome';
import AppSlider from '../components/secctions/@dashboard/app/AppSlider';
import AppWebVisitis from '../components/secctions/@dashboard/app/AppWebVisitis';
import AppCurrentVisits from '../components/secctions/@dashboard/app/AppCurrentVisits';
import { useTheme } from '@mui/material/styles';
import AppStatistics from '../components/secctions/@dashboard/app/AppStatistics';
import AppTableNewFact from '../components/secctions/@dashboard/app/AppTableNewFact';
import AppTopInstalledCountries from '../components/secctions/@dashboard/app/AppTopInstalledCountries';
import AppTopAuthors from '../components/secctions/@dashboard/app/AppTopAuthors';
import AppPercentageStatistics from '../components/secctions/@dashboard/app/AppPercentageStatistics';

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

                <Grid2 item xs={12} md={4} >
                  <AppStatistics 
                     title={'Total usuarios activos'}
                     porcentaje={'+2.6%'}
                     valores={'18765'}
                     charDate={[5,18,12,51,68,11,39,37,27,20]}
                     colorColumn={'rgb(66, 153, 225)'}
                   />
                </Grid2>
                <Grid2 item xs={12} md={4} >
                  <AppStatistics 
                     title={'Total instalado'}
                     porcentaje={'+0.2%'}
                     valores={'4876'}
                     charDate={[20,41,63,33,28,35,50,46,11,26]}
                     colorColumn={'#39bad5'}
                   />
                </Grid2>
                <Grid2 item xs={12} md={4} >
                  <AppStatistics 
                     title={'Descargas totales'}
                     porcentaje={'-0.1%'}
                     valores={'678'}
                     charDate={[8,9,31,8,16,37,8,33,46,31]}
                     colorColumn={'#efb333'}
                   />
                </Grid2>

                <Grid2 item xs={12} md={4}>
                <AppCurrentVisits
              title="Descargas actuales"
              chartData={[
                { label: 'Mac', value: 4344 },
                { label: 'Windows', value: 5435 },
                { label: 'Ios', value: 1443 },
                { label: 'Android', value: 4443 },
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
                <AppWebVisitis title="Área instalada"
              subheader="(+43%) que el año pasado"
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
              
                
                <Grid2 item xs={12} md={8} >
                  <AppTableNewFact/>
                </Grid2>

                <Grid2 item xs={12} md={4}>
                <AppTopAuthors/>
                </Grid2>

                <Grid2 item xs={12} md={6}>
                  
                  <AppTopInstalledCountries title={'Principales paises instalados'}/>
                </Grid2>
                <Grid2 item xs={12} md={6}>
                 <Stack 
                    sx={{
                      display:'flex',
                      flexDirection:'column',
                      gap:'24px'

                    }}
                 >
                <AppPercentageStatistics number={'38,566'} name={'Conversion'} icon={'solar:user-bold'} colorB={'rgb(3 81 171)'} porcentaje={48}/>
                  <AppPercentageStatistics number={'55,556'} name={'Aplicaciones'} icon={'mdi:email'} colorB={'rgb(0, 108, 156)'}  porcentaje={75}/>
                 </Stack>
                  
                  
                </Grid2>



              
    
    
             </Grid2>

            </Container>
        </>
    );
}

export default DashboardApp;
