import { Box } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import ThemeProvider from '../themes';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 90;


const Main = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP + 24,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

 
const AppLayout = () => {
  const [drawerWidth, setDrawerWidth] = useState(280); 
  

  const toggleDrawerWidth = () => {
    setDrawerWidth((prevWidth) => (prevWidth === 280 ? 88 : 280)); 
  };

    const [open, setOpen] = useState(false); 
    return (
      <ThemeProvider>
        <Box display={'flex'} >
           <Navbar draweWidth={drawerWidth} onOpenNav={() => setOpen(true)} /> 
           <Sidebar draweWidth={drawerWidth} openNav={open} onCloseNav={() => setOpen(false)}  onToggleDrawerWidth={toggleDrawerWidth}/>
           <Main>
            <Outlet/>
            </Main>
            
        </Box>
        </ThemeProvider>
    );
}

export default AppLayout;
