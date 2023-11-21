import { ListItemText, Stack, Typography } from '@mui/material';
import React from 'react';
import Iconify from '../../../iconify';
import ReactApexChart from 'react-apexcharts';

const AppPercentageStatistics = ({number , name , icon, colorB}) => {


    const series = [48];
    const options = {
        chart: {
          type: 'radialBar',
          width: 86,
          height: 86,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
            name: {
                show: false,
                color: '#fff'
              },
              value: {
                show: true,
                color: '#ffffff',
                offsetY: 70,
                fontSize: '22px',

              }
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '70%'
            },
            track: {
              margin: 0
            },
            dataLabels: {
                show: true, // Cambiado a true para mostrar las etiquetas de datos
                name: {
                  show: false,
                },
                value: {
                  offsetY: 4,
                  color:'white',
                  fontWeight:'700',
                  fontFamily:'"Quicksand", sans-serif '// Ajusta la posición vertical según sea necesario
                },
            }
        }},

        stroke: {
            lineCap: 'round'
          },
    
    
    }
    
    console.log(colorB);
    

    return (
        <Stack sx={{
            display:'flex',
            alignItems:'center',
            flexDirection:'row',
            borderRadius:'16px',
            p:'24px',
            overflow:'hidden',
            position:'relative',
            color:'rgb(255, 255, 255)',
            backgroundColor:`${colorB}`
        }}
        
        
        >
        
        
            <ReactApexChart dir="ltr" options={options} series={series} type="radialBar" height={86} width={86} />
                
          <ListItemText>
            <Typography>
                {number}
            </Typography>
            <Typography>
                {name}
            </Typography>
          </ListItemText>
          <Iconify icon={icon} sx={{width:'112px', height:'112px', right:'-32px', opacity:'0.08',position:'absolute'}}/>
            
        </Stack>
    );
}

export default AppPercentageStatistics;
