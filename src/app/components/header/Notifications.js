import { Avatar, Badge, Box, Button, Divider, IconButton, List, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';
import ScrollBar from '../scrollbar/ScrollBar';
import { faker } from '@faker-js/faker';
import { set, sub } from 'date-fns';
import { fToNow } from '../../utils/formatTime';
import Iconify from '../iconify';
import { noCase } from 'change-case';


const NOTIFICATIONS = [
    {
      id: faker.datatype.uuid(),
      title: 'Tu pedido esta realizado',
      description: 'Esperando el envio',
      avatar: null,
      type: 'order_placed',
      createdAt: set(new Date(), { hours: 10, minutes: 30 }),
      isUnRead: true,
    },
    {
      id: faker.datatype.uuid(),
      title: faker.name.fullName(),
      description: 'respondio a tu comentario',
      avatar: '/assets/images/avatars/avatar_2.jpg',
      type: 'friend_interactive',
      createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
      isUnRead: true,
    },
    {
      id: faker.datatype.uuid(),
      title: 'Tienes mensajes nuevos ',
      description: '5 mensajes no leidos',
      avatar: null,
      type: 'chat_message',
      createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
      isUnRead: false,
    },
    {
      id: faker.datatype.uuid(),
      title: 'Tienes un nuevo correo',
      description: 'enviado por ana de armas',
      avatar: null,
      type: 'mail',
      createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
      isUnRead: false,
    },
    {
      id: faker.datatype.uuid(),
      title: 'Procesando entrega',
      description: 'Tu pedidio esta siendo enviado a tu direccion',
      avatar: null,
      type: 'order_shipped',
      createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
      isUnRead: false,
    },
  ];


const Notifications = () => {

    const [notifications, setNotifications] = useState(NOTIFICATIONS);

    const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

    
    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
      setOpen(event.currentTarget);
    };
  
    const handleClose = () => {
      setOpen(null);
    };

    const handleMarkAllAsRead = () => {
        setNotifications(
          notifications.map((notification) => ({
            ...notification,
            isUnRead: false,
          }))
        );
      };

    return (
        <>
            <IconButton 
               sx={{color:'rgb(151 158 163)'}}
               onClick={handleOpen}
               >
              <Badge badgeContent={totalUnRead} color="error">
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
            width: 400,
            
            position:'fixed',
            top:'0px !important',
            left:'unset !important',
            right:'0px',
            maxHeight:'100%'
          },
        }}
        
        
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notificaciones</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Tienes {totalUnRead} mensajes sin leer
            </Typography>
          </Box>

          <IconButton
          sx={{color:'#2065D1'}}
          onClick={handleMarkAllAsRead}
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

          <IconButton
          onClick={handleClose}
          >
          <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  aria-hidden="true"
  role="img"
  className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--mingcute"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
>
  <g fill="none" fillRule="evenodd">
    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
    <path
      fill="currentColor"
      d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414L12 13.414Z"
    />
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
                Nuevo
              </ListSubheader>
            }
          >
             {notifications.slice(0, 2).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Anteriores
              </ListSubheader>
            }
          >
             {notifications.slice(2, 5).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>

           
        </ScrollBar>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple onClick={handleClose}>
            Ver Todo
          </Button>
        </Box>
      </Popover>

            
        </>
    );
}

export default Notifications;


// ----------------------------------------------------------------------


  
  function NotificationItem({ notification }) {
    const { avatar, title } = renderContent(notification);
  
    return (
      <ListItemButton
        sx={{
          py: 1.5,
          px: 2.5,
          mt: '1px',
          ...(notification.isUnRead && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <Typography
              variant="caption"
              sx={{
                mt: 0.5,
                display: 'flex',
                alignItems: 'center',
                color: 'text.disabled',
              }}
            >
              <Iconify icon="eva:clock-outline" sx={{ mr: 0.5, width: 16, height: 16 }} />
              {fToNow(notification.createdAt)}
            </Typography>
          }
        />
      </ListItemButton>
    );
  }
  
  // ----------------------------------------------------------------------
  
  function renderContent(notification) {
    const title = (
      <Typography variant="subtitle2" sx={{display:'flex', flexDirection:'column'}}>
        {notification.title}
        <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        {noCase(notification.description)}
        </Typography>
      </Typography>
    );
  
    if (notification.type === 'order_placed') {
      return {
        avatar: <img alt={notification.title} src="/assets/icons/ic_notification_package.svg" />,
        title,
      };
    }
    if (notification.type === 'order_shipped') {
      return {
        avatar: <img alt={notification.title} src="/assets/icons/ic_notification_shipping.svg" />,
        title,
      };
    }
    if (notification.type === 'mail') {
      return {
        avatar: <img alt={notification.title} src="/assets/icons/ic_notification_mail.svg" />,
        title,
      };
    }
    if (notification.type === 'chat_message') {
      return {
        avatar: <img alt={notification.title} src="/assets/icons/ic_notification_chat.svg" />,
        title,
      };
    }
    return {
      avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar} /> : null,
      title,
    };
  }
  