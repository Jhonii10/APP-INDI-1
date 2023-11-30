/* eslint-disable react/prop-types */
import { Avatar, Box, Divider, Drawer, IconButton, Link, Toolbar, Typography, alpha, styled } from "@mui/material";
import { useSelector } from "react-redux";
import useResponsive from "../hooks/useResponsive";
import SvgColor from "./svg-colors/SvgColor";
import ScrollBar from "./scrollbar/ScrollBar";
import NavSetion from "./sidebar-setions/NavSetion";
import navConfig from "./sidebar-setions/config";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Iconify from "./iconify/Iconify";


const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{width:'30px', height:'30px', backgroundColor:'rgb(7, 141, 238)'}}/>;

const StyledAccount = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: alpha(theme.palette.grey[500], 0.12),
  }));

  const account = {
    displayName: 'Jaydon Frankie',
    email: 'demo@minimals.cc',
    photoURL: '/assets/images/avatars/avatar_default.jpg',
  };

const Sidebar = ({draweWidth, openNav, onCloseNav, onToggleDrawerWidth}) => {

    const {displayName} = useSelector(state => state.auth)
    const isDesktop = useResponsive('up','lg');
    const { pathname } = useLocation();

    const [collapsed, setCollapsed] = useState(false);

  const toggleSidebarWidth = () => {
    setCollapsed(!collapsed);
    onToggleDrawerWidth(!collapsed)
    
  };

    useEffect(() => {
        if (openNav) {
          onCloseNav();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [pathname]);

    const content = (
            <>
            <Toolbar >
                <Typography variant="a" noWrap component={'div'}>
                    {icon('ic_logo_jhoni')}
                </Typography>
            </Toolbar>

            <IconButton
            onClick={toggleSidebarWidth}
             sx={{
                display:{xs:'none', md:'inline-flex'},
                position:'fixed',   
                padding:'4px',
                top:'50px',
                left: collapsed ?'74px':'266px',
                borderRadius:'50%',
                border:'1px dashed rgba(145, 158, 171, 0.2)',
                backdropFilter:'blur(6px)',
                backgroundColor:'rgba(255, 255, 255, 0.48)'
                

             }}
             >
               <Iconify icon={ collapsed ?'iconamoon:arrow-right-2-light':'iconamoon:arrow-left-2-light'} sx={{width:'16px', height:'16px'}}/>
            </IconButton>

            <Divider/>

            <Box sx={{ mb: 5, mx: 2.5, mt:2 }}>
                <Link underline="none">
                <StyledAccount>
                    <Avatar src={account.photoURL} alt="photoURL" />

                    <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle2" sx={{ color: 'text.primary', fontFamily:'"Quicksand", sans-serif' , fontWeight:'700'}}>
                        {displayName}
                    </Typography>
                    </Box>
                </StyledAccount>
                </Link>
            </Box>

            <ScrollBar>
                <NavSetion data={navConfig}/>
            </ScrollBar>

            </>
        )
    
   
    return (
        <Box
            component={'nav'}
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: collapsed ? '88px' : draweWidth },
            }}
        >
        {
            isDesktop ? (
                <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: collapsed ? '88px' : draweWidth,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {content}
        </Drawer>

            ):(
                <Drawer
          
              
                open={openNav}
                onClose={onCloseNav}

                ModalProps={{
                    keepMounted: true,
                }}

                PaperProps={{
                    sx:{
                        width: draweWidth,
                        bgcolor: 'background.default',
                        borderRightStyle: 'dashed',
                    }
                }}
            >

            {content}
            </Drawer>

            )
        } 
            
        </Box>
    );
}

export default Sidebar;

