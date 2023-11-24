import ReactApexChart from 'react-apexcharts';
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
import { fNumber } from '../../../../utils/formatNumber';
import { useChart } from '../../../chart';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const StyledChartWrapper = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));



export default function AppCurrentVisits({ title, subheader, chartColors, chartData, ...other }) {
  const theme = useTheme();

  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = useChart({
    colors: chartColors,
    labels: chartLabels,
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: { enabled: false, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '90%', 
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              color: 'black', 
              formatter: function (w) {
                return fNumber(chartSeries.reduce((a, b) => a + b, 0));
              },
              
              
            },
            value: {
              fontSize: '24px',
              fontFamily:'"Quicksand", sans-serif'
            },
          },
        },
      },}
  
  });

  return (
    <Card 
        {...other} 
      >
      <CardHeader 
        title={title} 
        subheader={subheader} 
        sx={{'& span ':{textAlign:'left', fontWeight:'700' ,fontSize:'1.2rem ', fontFamily:'"Quicksand", sans-serif',}}}

      />

        <StyledChartWrapper dir="ltr">
           <ReactApexChart type="donut" series={chartSeries} options={chartOptions} height={280} />
        </StyledChartWrapper>
    </Card>
  );
}