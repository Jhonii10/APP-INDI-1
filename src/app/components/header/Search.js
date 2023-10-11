import { Box, Dialog, IconButton, InputAdornment, InputBase, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';

const Search = () => {

    const [open, setOpen] = useState(null);

        const handleOpen = (event) => {
            setOpen(event.currentTarget);
        };
        
        const handleClose = () => {
            setOpen(null);
        };

    return (
        <>
            <IconButton onClick={handleOpen}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--eva"
            width="1em" 
            height="1em"
            viewBox="0 0 24 24"
            >
            <g id="iconifyReact1712">
                <g id="iconifyReact1713">
                <path
                    id="iconifyReact1714"
                    fill="currentColor"
                    d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6Z"
                />
                </g>
            </g>
            </svg>
            </IconButton>

            <Dialog 
                open={Boolean(open)}
                onClose={handleClose}
                PaperProps={{
                    sx:{
                        width:'calc(100% - 64px)',
                        boxShadow:'rgba(0, 0, 0, 0.24) -40px 40px 80px -8px',
                        borderRadius:'16px',
                        maxWidth:'600px',
                    }
                }}
            >
                <Box component='div' sx={{
                    padding:'24px',
                    borderBottom:'1px solid rgba(145, 158, 171, 0.2)'
                }}>
                
                <InputBase
                autoFocus
                placeholder='Search...' 
                fullWidth
                startAdornment={(
                <InputAdornment position="start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--eva"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                    >
                        <g id="iconifyReact1712">
                            <g id="iconifyReact1713">
                                <path
                                    id="iconifyReact1714"
                                    fill="currentColor"
                                    d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6Z"
                                />
                            </g>
                        </g>
                    </svg>
                </InputAdornment>
            )}
            endAdornment={
                (
                    <Box component={'span'}
                    sx={{
                        backgroundColor:'rgba(145, 158, 171, 0.16)',
                        color:'rgb(99, 115, 129)',
                        padding:'0px 6px',
                        borderRadius:'6px'
                    }}
                    >
                    Esc
                    </Box>

                )
            }
        />

                </Box>

            

                <Box 
                component={'div'}
                sx={{
                    overflow:'auto',
                    height:'400px',
                    padding:'16px 24px 24px'
                }}
                >
                    <List >
                    {
                        listaDeElementos.map((list)=>(
                          
                             <SearchListItem item={list}/>
                             
                        ))
                    }
                      
                    </List>
                   
                    

                </Box>

            </Dialog>

            
        </>
    );
}

export default Search;




const listaDeElementos = [
    {
      label: "Dashboard",
      url: "/dashboard/app",
    },
    {
      label: "User",
      url: "/dashboard/user",
    },
    {
      label: "Product",
      url: "/dashboard/products",
    },
    {
        label: "Order",
        url: "/dashboard/order",
      },
      {
        label: "Invoice",
        url: "/dashboard/invoice",
      },
      {
        label: "Blog",
        url: "/dashboard/post",
      },
      {
        label: "Job",
        url: "/dashboard/job",
      },
      {
        label: "Tour",
        url: "/dashboard/tour",
      },
      {
        label: "File Manager",
        url: "/dashboard/file-manager",
      },
      {
        label: "Mail",
        url: "/dashboard/mail",
      },
      {
        label: "Chat",
        url: "/dashboard/post/new",
      },
      {
        label: "Calendar",
        url: "/dashboard/calendar",
      },{
        label: "Profile",
        url: "/dashboard/user",
      },
      {
        label: "Edit",
        url: "/dashboard/user/",
      },
      {
        label: "Account",
        url: "/dashboard/user/account",
      }
  ];
  



const SearchListItem = ({item})=>{
    
    return (
    <ListItemButton
    sx={{
        borderColor:'transparent transparent rgba(145, 158, 171, 0.2)',
        borderStyle:'dashed',
        borderWidth:'1px'

    }}
    
    >
        <ListItemText sx={{

        }}>
            <Typography component={'span'}> 
            <Typography component={'span'} sx={{
                fontWeight:'600'
            }}>{item.label}</Typography>
                
            </Typography>
            <Typography component={'p'}>
                {item.url}
            </Typography>
        </ListItemText>
    </ListItemButton>
)}

