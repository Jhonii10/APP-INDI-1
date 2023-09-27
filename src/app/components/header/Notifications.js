import { Badge, Box, Button, Divider, IconButton, List, ListItemButton, ListSubheader, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';
import ScrollBar from '../scrollbar/ScrollBar';


const Notifications = () => {


    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
      setOpen(event.currentTarget);
    };
  
    const handleClose = () => {
      setOpen(null);
    };

    return (
        <>
            <IconButton 
               sx={{color:'rgb(151 158 163)'}}
               onClick={handleOpen}
               >
              <Badge badgeContent={4} color="error">
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
                    d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.393 4.393 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7Z"
                    opacity=".5"
                    />
                    <path d="M12.75 6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0V6ZM7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0Z" />
                </g>
                </svg>
              </Badge>
              </IconButton>
              
              <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            width: 360,
            position:'fixed',
            top:'0px !important',
            left:'unset !important',
            right:0,
          },
        }}
        
        
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              You have {4} unread messages
            </Typography>
          </Box>

          <IconButton
          sx={{color:'#2065D1'}}
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="MuiBox-root css-1t9pz9x iconify iconify--eva"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            >
            <g id="iconifyReact42">
                <g id="iconifyReact43">
                <g id="iconifyReact44" fill="currentColor">
                    <path d="M16.62 6.21a1 1 0 0 0-1.41.17l-7 9l-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37a1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41Zm5 0a1 1 0 0 0-1.41.17l-7 9l-.61-.75l-1.26 1.62l1.1 1.37a1 1 0 0 0 .78.37a1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4Z" />
                    <path d="M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2a1 1 0 0 0-.15 1.41Z" />
                </g>
                </g>
            </g>
            </svg>
          </IconButton>

          
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />
         

        <ScrollBar sx={{ height: 'auto'}}>
        <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                New
              </ListSubheader>
            }
          >
            {
                ['Notificacion 1','Notificacion 2','Notificacion 3'].map((option)=>(
                    <ListItemButton onClick={handleClose} >
                        {option}
                    </ListItemButton>
                ))
            }
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Before that
              </ListSubheader>
            }
          >
            {
                ['Notificacion 1','Notificacion 2','Notificacion 3'].map((option)=>(
                    <ListItemButton onClick={handleClose}>
                        {option}
                    </ListItemButton>
                ))
            }
          </List>

           
        </ScrollBar>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple onClick={handleClose}>
            View All
          </Button>
        </Box>
      </Popover>

            
        </>
    );
}

export default Notifications;
