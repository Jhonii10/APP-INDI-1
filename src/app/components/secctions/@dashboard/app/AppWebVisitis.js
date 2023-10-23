import { Box, ButtonBase, Card, CardHeader } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useChart } from '../../../chart';

const AppWebVisitis = ({ title, subheader, chartLabels, chartData, ...other }) => {

    const chartOptions = useChart({
        plotOptions: { bar: { columnWidth: '16%' } },
        fill: { type: chartData.map((i) => i.fill) },
        labels: chartLabels,
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec']},
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: (y) => {
              if (typeof y !== 'undefined') {
                return `${y.toFixed(0)} visitas`;
              }
              return y;
            },
          },
        },
      });

    const year = (año)=>
        (   <>
            <ButtonBase type='button' sx={{background:'rgb(244, 246, 248)', display:'inline-flex', alignItems:'center',p:'4px'}}>{año}</ButtonBase>
            </>
        )

    return (
        <Card {...other}>
        <CardHeader title={title} subheader={subheader} sx={{textAlign:'left'}} action={[year('2019')]}/>
  
        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
          <ReactApexChart  type="line" series={chartData} options={chartOptions} height={364} />
        </Box>
      </Card>
    );
}

export default AppWebVisitis;
