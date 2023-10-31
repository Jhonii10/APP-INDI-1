/* eslint-disable react/prop-types */
import { Avatar, Box, Divider, Drawer, IconButton, Link, Toolbar, Typography, alpha, styled } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import useResponsive from "../hooks/useResponsive";
import SvgColor from "./svg-colors/SvgColor";
import ScrollBar from "./scrollbar/ScrollBar";
import NavSetion from "./sidebar-setions/NavSetion";
import navConfig from "./sidebar-setions/config";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


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

const Sidebar = ({draweWidth, openNav, onCloseNav}) => {

    const {displayName} = useSelector(state => state.auth)
    const isDesktop = useResponsive('up','lg');
    const { pathname } = useLocation();

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
            aria-label="Cerrar"
            onClick={onCloseNav}
            sx={{
            position: 'absolute',
            top: 12,
            right: 0,
            display: {md: 'none'}
            }}
             >
            <CloseOutlined />
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
                width: { lg: draweWidth },
            }}
        >
        {
            isDesktop ? (
                <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: draweWidth,
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

