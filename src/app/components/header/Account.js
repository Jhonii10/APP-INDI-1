import { Avatar, Box, Divider, IconButton, MenuItem, Popover, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../../store/auth/thunks';

const Account = () => {

    const [open, setOpen] = useState(null);

    const {displayName , email } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const onLogout = ()=>{
        dispatch(startLogout())
    }
    
    const handleOpen = (event) => {
        setOpen(event.currentTarget);
      };
    
      const handleClose = () => {
        setOpen(null);
      };



    return (
        <>
           <IconButton
           onClick={handleOpen}
            >
                <Avatar 
                    sx={{ height:30, width:30}} 
                    alt="Cindy Baker" 
                    src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
                />
            </IconButton> 

            <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
            sx: {
                p: 0,
                mt: 1.5,
                ml: 0.75,
                width: 180,
                '& .MuiMenuItem-root': {
                typography: 'body2',
                borderRadius: 0.75,
                },
            },
            }}
            >
            <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {email }
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>{
          ['home','profile','setting'].map((item, index)=>(
            <MenuItem key={item} onClick={handleClose}>
                {item}
            </MenuItem>
          ))
          }
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={onLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
            </Popover>
        </>
    );
}

export default Account;
