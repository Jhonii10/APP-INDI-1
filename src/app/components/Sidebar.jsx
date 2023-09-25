/* eslint-disable react/prop-types */
import { Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";


const Sidebar = ({draweWidth , isOpen, toggleSidebar}) => {

    const {displayName} = useSelector(state => state.auth)
   
    return (
        <Box
            component={'nav'}
            sx={{
                    width: { sm: draweWidth },
                    flexShrink: { sm: 0 },
                    display: { xs: isOpen ? 'block' : 'none', md: 'block' },
                    
                }}
        >

            <Drawer
                variant="permanent"
                open
                sx={{
                    display: {xs:'block'},
                    '& .MuiDrawer-paper':{ boxSizing:'border-box',width:draweWidth}
                }}
            >

            <Toolbar >
                <Typography variant="h6" noWrap component={'div'}>
                    {displayName}
                </Typography>
            </Toolbar>

            <IconButton
        aria-label="Cerrar"
        onClick={toggleSidebar}
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

            {/* aqui va la lista de opciones */}

            </Drawer>
         
            
        </Box>
    );
}

export default Sidebar;