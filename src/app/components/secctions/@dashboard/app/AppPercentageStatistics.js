import { ListItemText, Stack, Typography } from '@mui/material';
import React from 'react';
import Iconify from '../../../iconify';
import ReactApexChart from 'react-apexcharts';

const AppPercentageStatistics = ({number , name , icon, colorB, porcentaje}) => {


    const series = [porcentaje];
    const options = {
        chart: {
                type: 'radialBar',
                width: 96,
                height: 96,
                sparkline:{
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
                        show: true,
                        name: {
                        show: false,
                        },
                        value: {
                        offsetY: 4,
                        color:'white',
                        fontWeight:'700',
                        fontFamily:'"Quicksand", sans-serif '
                        },
                    }
                }
             },

        stroke: {
            lineCap: 'round'
          },
    
    
    }
    
    

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
        
        <ReactApexChart dir="ltr" options={options} series={series} type="radialBar" height={96} width={96} />
                
        <ListItemText 
            sx={{
                margin:'0px 0px 0px 24px',
                textAlign:'left',
            }}
            primary={
                <Typography variant="body1" component={'span'} sx={{
                        fontSize:'1.5rem',
                        fontWeight:'700',
                        fontFamily:'"Quicksand", sans-serif '
                    }}>
                {number}
                </Typography>
            }
            secondary={
                <Typography variant="body2"  sx={{
                    fontFamily:'"Quicksand", sans-serif '
                }}>
                {name}
                </Typography>
            }
        />
        
        <Iconify icon={icon} sx={{width:'112px', height:'112px', right:'-32px', opacity:'0.08',position:'absolute'}}/>
            
        </Stack>
    );
}

export default AppPercentageStatistics;
