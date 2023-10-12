import { AppBar, Grid, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import Account from './header/Account';
import Notifications from './header/Notifications';
import Contacts from './header/Contacts';
import Settings from './header/Settings';
import Search from './header/Search';
import SvgColor from './svg-colors/SvgColor';

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`}/>;

const Navbar = ({draweWidth = 240, onOpenNav }) => {


    return (
        <AppBar
            
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${draweWidth}px)` },
                ml:{sm:`${draweWidth}px`}, backgroundColor:'rgba(255, 255, 255, 0.8)', backdropFilter:'blur(6px)'
                }}
                
        >
        <Toolbar>
            <IconButton
                
                edge="start"
                sx={{ display: {md: 'none'}, color:'rgb(151 158 163)'}}
                onClick={onOpenNav}
            >
                { icon('ic_menu_item')}
               
            </IconButton>

            <Grid 
                container
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                 <Search/> 

                <Grid
                  sx={{display:'flex', alignItems:'center', gap:'8px'}}
                >
                <Notifications/>
                <Contacts/>
                <Settings/>
                <Account/>
                
                </Grid>
                
            </Grid>
        </Toolbar>
            
        </AppBar>
    );
}

export default Navbar;
