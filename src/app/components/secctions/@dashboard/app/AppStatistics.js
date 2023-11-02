import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';

const AppStatistics = ({porcentaje, title , valores}) => {
    return (
        <>
            <Card sx={{
                        '& *':{ fontFamily:'"Quicksand", sans-serif'},
                        padding:'24px',
                        display:'flex'
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
                        '& svg':{ width:'24px', height:'24px', marginRight:'8px',color:'rgb(34, 197, 94)'}
                    }}>
                    {/* SVG */}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="component-iconify MuiBox-root css-v0h3dx iconify iconify--solar"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    >
                    <g fill="currentColor">
                        <path
                        d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75H5Z"
                        opacity=".5"
                        />
                        <path
                        fillRule="evenodd"
                        d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057Z"
                        clipRule="evenodd"
                        />
                    </g>
                    </svg>

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

            </Card>
        </>
    );
}

export default AppStatistics;
