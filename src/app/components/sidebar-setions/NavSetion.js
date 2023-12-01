import { Box, List, ListItemText } from '@mui/material';
import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { StyledNavItem, StyledNavItemIcon } from './Styles';

const NavSetion = ({data=[], ...other}) => {
    return (
        <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} draweWidth={other.draweWidth} />
        ))}
      </List>
    </Box>
    );
}

export default NavSetion;


function NavItem({ item, draweWidth}) {
    const { title, path, icon, info } = item;
    return (
      <StyledNavItem
        component={RouterLink}
        to={path}
        sx={{ 
          '&.active': {
            color: 'rgb(7, 141, 238)',
            bgcolor: 'action.selected',
            fontWeight: 'fontWeightBold',
          },
          ...(draweWidth === 88 && {
              display:'flex',
              flexDirection:'column',
              fontSize:'10px',
              mb:1
          })
          
          ,
        }}
      >
        <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
  
        <ListItemText disableTypography primary={title} />
  
        {info && info}
      </StyledNavItem>
    );
  }