import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import SvgColor from '../../../svg-colors/SvgColor';

const AppStatistics = ({porcentaje, title , valores, charDate, colorColumn}) => {
 
    const chartOptions = {
        chart: {
          type: 'bar',
          width: 100,
          height: 36,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '80%',
            borderRadius: 2,
            colors: {
              ranges: [
                {
                  from: 0,
                  to: 100,
                  color: colorColumn,
                },
              ],
            },
          },
        },
        labels: Array.from({ length: charDate.length }, (_, i) => i + 1),
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: () => '',
            },
          },
          marker: {
            show: false,
          },
        },
      };
    
      const icon = (name) => <SvgColor src={`/assets/icons/accesories/${name}.svg`} sx={{ width: '24px', height: '24px', marginRight:'8px',...(parseFloat(porcentaje) > 0.0 ?{color:'rgb(34, 197, 94)'}:{color:'rgb(255, 86, 48)'}) }}/>;
    

    return (
        <>
            <Card sx={{
                        '& *':{ fontFamily:'"Quicksand", sans-serif'},
                        padding:'24px',
                        display:'flex',
                        alignItems:'center',
                        textAlign:'left'
                        }} >
                <Box sx={{
                    flexGrow:'1'
                }}>
                    <Typography component={'h6'} variant='subtitle2' 
                        sx={{
                            fontWeight:'600',
                            fontFamily:'"Quicksand", sans-serif',

                        }}
                    >
                    {title}
                    </Typography>
                    <Stack sx={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems: 'center',
                        marginTop:'16px',
                        marginBottom:'8px',
                    }}>
                    { parseFloat(porcentaje) > 0.0 ? icon('ic_portcent_positive') : icon('ic_portcent_negative')}

                    <Typography component={'div'} variant='subtitle2' sx={{
                        fontWeight:'600',
                        fontFamily:'"Quicksand", sans-serif',
                    }}>
                    {porcentaje}
                    </Typography>
                        
                    </Stack>

                    <Typography component={'h3'} variant='h3' sx={{
                        fontWeight:'700',
                        fontFamily:'"Quicksand", sans-serif',
                        fontSize:'1.5rem'
                    }}>
                    {valores}
                    </Typography>

                </Box>

                <Box dir="ltr">
                    <ReactApexChart options={chartOptions} series={[{ data: charDate }]} type="bar" height={36} width={60} />
                </Box>

            </Card>
        </>
    );
}

export default AppStatistics;




