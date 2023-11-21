import { ListItemText, Stack, Typography } from '@mui/material';
import React from 'react';
import Iconify from '../../../iconify';

const AppPercentageStatistics = ({number , name , icon}) => {
    return (
        <Stack sx={{
            color:'rgb(255, 255, 255)',
            backgroundColor:'rgb(3, 81, 171)'
        }}>
          <ListItemText>
            <Typography>
                {number}
            </Typography>
            <Typography>
                {name}
            </Typography>
          </ListItemText>
          <Iconify icon={icon}/>
            
        </Stack>
    );
}

export default AppPercentageStatistics;
