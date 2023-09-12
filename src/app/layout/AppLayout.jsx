import { Box, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const draweWidth = 240;
const AppLayout = ({children}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
    return (
        <Box display={'flex'} >
           <Navbar draweWidth={draweWidth}/>
           <Sidebar draweWidth={draweWidth} isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
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
