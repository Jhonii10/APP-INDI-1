import { Box, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const draweWidth = 240;
const AppLayout = ({children}) => {

    const [open, setOpen] = useState(false); 
    return (
        <Box display={'flex'} >
           <Navbar draweWidth={draweWidth} onOpenNav={() => setOpen(true)} /> 
           <Sidebar draweWidth={draweWidth} openNav={open} onCloseNav={() => setOpen(false)} />
           <Box 
                component={'main'}
                sx={{flexGrow:1, p:3}}
            >

            <Toolbar/>
            {children}

            </Box>
            
        </Box>
    );
}

export default AppLayout;
