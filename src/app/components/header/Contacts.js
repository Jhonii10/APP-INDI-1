import React, { useState } from 'react';
import { Avatar, Badge, IconButton, ListItemText, MenuItem, Popover, Stack, Typography } from '@mui/material';
import ScrollBar from '../scrollbar/ScrollBar';
import { faker } from '@faker-js/faker';


const CONTACTOS = [
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_1.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_2.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_3.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_4.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_5.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_6.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_7.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_8.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_9.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_10.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_11.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_12.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_13.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_14.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_15.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_16.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_17.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_18.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_19.jpg',
        
    },
    {
        id: faker.string.uuid(),
        title: faker.person.fullName(),
        description: 'respondio a tu comentario',
        avatar: '/assets/images/avatars/avatar_20.jpg',
        
    },
]

const Contacts = () => {

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
                width: 320,
            
            },
            }}
            >
            
            
          <Typography variant="h6" sx={{padding:'12px'}}>
            {'Contactos '}
            <Typography 
              variant="span" 
              sx={{fontWeight:'400', fontSize:'1rem', fontFamily:'Quicksand'}}
              >
            ({CONTACTOS.length})
          </Typography>
          </Typography>
          

        <ScrollBar sx={{height:'320px'}}>
       
        <Stack sx={{p:1}}>
        {
          CONTACTOS.map((item)=>(
            <ListContact key={item.id} opcion={item}/>
          ))
          }
          </Stack>

        </ScrollBar>

       
            </Popover>
        
        </>
    );
}

export default Contacts;

//---------------------------------------------------

const ListContact = ({opcion}) => {
    return (
        <>
            <MenuItem sx={{padding:'8px', borderRadius:'6px', fontFamily:'Quicksand'}}>
                <Badge sx={{marginRight:'16px'}}>
                    <Avatar src={opcion.avatar}/>
                </Badge>
                <ListItemText sx={{fontFamily:'Quicksand', '& span':{fontFamily:'Quicksand', fontSize:'0.875rem', fontWeight:600}}}>
                    {opcion.title}
                </ListItemText>
            </MenuItem>
        </>
    );
}




