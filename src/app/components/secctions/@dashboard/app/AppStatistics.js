import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';

const AppStatistics = ({porcentaje, title , valores}) => {
    return (
        <>
            <Card sx={{'& *':{ fontFamily:'"Quicksand", sans-serif'}}} >
                <Box>
                    <Typography component={'h6'} variant='subtitle2'>
                    {title}
                    </Typography>
                    <Stack>
                    {/* SVG */}
                    <Typography component={'div'} variant='subtitle2'>
                    {porcentaje}
                    </Typography>
                        
                    </Stack>

                    <Typography component={'h3'} variant='h3'>
                    {valores}
                    </Typography>

                </Box>

            </Card>
        </>
    );
}

export default AppStatistics;
