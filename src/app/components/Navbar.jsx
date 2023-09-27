import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Account from './header/Account';
import Notifications from './header/Notifications';


const Navbar = ({draweWidth = 240, toggleSidebar }) => {


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
                sx={{mr:2 , display: {md: 'none'}, color:'rgb(151 158 163)'}}
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
                <Typography variant="h6" noWrap component={'div'}  color='#7f7f7f'>Cubika App</Typography>

                <Grid
                  sx={{display:'flex', alignItems:'center', gap:'8px'}}
                >
                <Notifications/>
                 <IconButton
                sx={{color:'rgb(151 158 163)'}}
                >
                 <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  aria-hidden="true"
  role="img"
  className="component-iconify MuiBox-root css-9uy14h iconify iconify--solar"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
>
  <g fill="currentColor">
    <circle cx={15} cy={6} r={3} opacity=".4" />
    <ellipse cx={16} cy={17} opacity=".4" rx={5} ry={3} />
    <circle cx="9.001" cy={6} r={4} />
    <ellipse cx="9.001" cy="17.001" rx={7} ry={4} />
  </g>
</svg>
                </IconButton>
              <IconButton
              sx={{color:'rgb(151 158 163)'}}
                
               >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="component-iconify MuiBox-root css-9uy14h iconify iconify--solar"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                >
                <g fill="currentColor">
                    <path
                    fillRule="evenodd"
                    d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.409 0-1.779.152a2.008 2.008 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361c0 .558-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a1.99 1.99 0 0 0-.399 1.479c.053.394.287.798.757 1.605c.47.807.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a1.99 1.99 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361c0-.558.306-1.064.782-1.36c.324-.203.533-.364.682-.556a1.99 1.99 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605c-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.615 1.615 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 0 0-1.09-1.083Z"
                    clipRule="evenodd"
                    opacity=".5"
                    />
                    <path d="M15.523 12c0 1.657-1.354 3-3.023 3c-1.67 0-3.023-1.343-3.023-3S10.83 9 12.5 9c1.67 0 3.023 1.343 3.023 3Z" />
                </g>
                </svg>

              </IconButton>
                

               <Account/>
                
                </Grid>
                
            </Grid>
        </Toolbar>
            
        </AppBar>
    );
}

export default Navbar;
