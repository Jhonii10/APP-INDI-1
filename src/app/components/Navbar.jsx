import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({draweWidth = 240, toggleSidebar }) => {

    const navigate = useNavigate()
    const onLogout = ()=>{
        navigate(-1)
    }

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${draweWidth}px)` },
                ml:{sm:`${draweWidth}px`}
                }}
        >
        <Toolbar>
            <IconButton
                color="inherit"
                edge="start"
                sx={{mr:2 , display: {md: 'none'}}}
                onClick={toggleSidebar}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid 
                container
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Typography variant="h6" noWrap component={'div'}>Cubika App</Typography>

                <IconButton
                    color="error"
                    onClick={onLogout}
                >
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>
            
        </AppBar>
    );
}

export default Navbar;
