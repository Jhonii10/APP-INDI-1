    import {  Badge, Box, ButtonBase, Divider, Drawer, IconButton, Stack, Typography,  } from '@mui/material';
    import React, { useState } from 'react';
    import ScrollBar from '../scrollbar/ScrollBar';
    import SvgColor from '../svg-colors/SvgColor';


    const Settings = () => {
        const [open, setOpen] = useState(null);
        const [fullSecreen, setFullSecreen] = useState(true);

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
                sx={{color:'rgb(151 158 163)',
                '& svg': {
                    animation: 'spin 6s linear infinite', 
                    },
                }}
                    
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

                <Drawer
                open={Boolean(open)}
                onClose={handleClose}
                anchor='right'
                BackdropProps={{
                    sx: {
                    backgroundColor: 'transparent',
                    },
                }}

                PaperProps={{
                    sx:{
                        width:280,
                        backdropFilter:'blur(20px)',
                        backgroundColor:'rgba(255, 255, 255, 0.9)',
                        boxShadow:'rgba(145, 158, 171, 0.24) -40px 40px 80px -8px',

                    }
                }}
                >
                <Stack
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                        padding:'16px 8px 16px 20px;'
                    }}
                >
                <Typography variant='h6' flexGrow={1}>
                        Ajustes
                </Typography>
                <IconButton>
                    <Badge>
                    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--solar"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
    >
        <path
        fill="currentColor"
        d="M18.258 3.508a.75.75 0 0 1 .463.693v4.243a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1-.53-1.28L14.8 6.31a7.25 7.25 0 1 0 4.393 5.783a.75.75 0 0 1 1.488-.187A8.75 8.75 0 1 1 15.93 5.18l1.51-1.51a.75.75 0 0 1 .817-.162Z"
        />
    </svg>
                    </Badge>
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

                </Stack>

                <Divider/>

                <ScrollBar>
                    <Stack sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        gap:'24px',
                        padding:'24px',
                    }}>

                    {
                        DATA.map((dat)=>(
                            <Options title={dat.title} icons={dat.icons} />
                        ))
                    }


                    </Stack>

                </ScrollBar>

                <Box
                sx={{
                    padding:2,
                }}
                >
                    <ButtonBase sx={
                        {
                            width:'100%',
                            height:'48px',
                            justifyContent:'center',
                            borderRadius:'8px',
                            color:'rgb(145, 158, 171)',
                            border:'1px solid rgba(145, 158, 171, 0.08)'
                        }}
                        onClick={()=>{setFullSecreen(!fullSecreen)}}
                    >
                    <SvgColor src={ fullSecreen ?'/assets/icons/settings/ic_exit_full_screen.svg':'/assets/icons/settings/ic_full_screen.svg'} sx={{ width: '14px', height: '14px', marginRight:'8px', ...(fullSecreen && {background:'linear-gradient(135deg, rgb(91, 228, 155) 0%, rgb(0, 167, 111) 100%)'})}}/>
                    
                        <Typography component={'font'}>
                            <Typography component={'font'}>
                            Pantalla completa
                            </Typography>
                        
                        </Typography>
                    </ButtonBase>
                </Box>
                    
                </Drawer>

                
            </>
        );
    }

    export default Settings;





    const Options = ({title , icons })=>{
        return (
            <div>
                <Typography component='div'>
                    <Typography component='font'>
                    <Typography component='font'>
                        {title}
                    </Typography>
                    </Typography>
                    
                </Typography>

                <Stack sx={{
                    display:'flex',
                    flexDirection:'row',
                    gap:'16px',
                    ...(icons.length > 3 && {
                        display:'grid',
                        gridTemplateColumns:'repeat(3, 1fr)',
                        gap:'12px 16px'
                    })
                }
                
                }>
                {
                    icons.map((icon,index)=>(
                        <ButtonBase 
                        key={index}
                        sx={{
                            width:'100%',
                            height:'80px',
                            borderRadius:'8px',
                            border:'1px solid rgba(145, 158, 171, 0.08)',
                            backgroundColor:'rgba(255, 255, 255, 0.3)',
                            boxShadow:'rgba(145, 158, 171, 0.08) -24px 8px 24px -4px',
                            '& .svg-color': {
                                background:
                                index === 0
                                    ? 'linear-gradient(135deg, rgb(91, 228, 155) 0%, rgb(0, 167, 111) 100%)'
                                    : 'linear-gradient(135deg, rgb(145, 158, 171) 0%, rgb(99, 115, 129) 100%)',
                            },
                            
                        }}
                        > 
                        {icon}
                        </ButtonBase>
                    ))

                
                        
                        
                } 
                    </Stack>
            

            </div>
        )
    }


    const icon = (name) => <SvgColor src={`/assets/icons/settings/${name}.svg`}/>;
    const coloricon = (color) => <Box sx={{
        width:'12px',
        height:'12px',
        borderRadius:'50%',
        backgroundColor:`${color}`,        

    }}/>

    const strech = ()=><Stack  sx={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'24%',
        '& .svg-color':{
            width:'20px',
            height:'20px',
            background:'linear-gradient(135deg, rgb(145, 158, 171) 0%, rgb(99, 115, 129) 100%)'
        }

    }}>
    { icon('ic_strech_right')}
        <Box component={'div'} sx={{
            WebkitBoxFlex:'1',
            flexGrow:'1',
            borderBottom:'1.5px dashed currentcolor'
        }}/>
    {icon('ic_strech_left')}
    </Stack>

    const DATA = [
        {
          title: 'Modo',
          icons: [
            icon('ic_sun'),
            icon('ic_moon'),
          ],
        },
        {
          title: 'Contraste',
          icons: [
            icon('ic_contrast'),
            icon('ic_contrast_bold'),
          ],
        },
        {
          title: 'Direccion',
          icons: [
            icon('ic_align_left'),
            icon('ic_align_right'),
          ],
        },
        {
          title: 'Disposicion',
          icons: [
            icon('ic_align_left'),
            icon('ic_align_right'),
            icon('ic_align_right'),
          ],
        },
        {
          title: 'Estirar',
          icons: [strech()],
        },
        {
          title: 'Preajustes',
          icons: [
            coloricon('rgb(0, 167, 111)'),
            coloricon('rgb(7, 141, 238)'),
            coloricon('rgb(118, 53, 220)'),
            coloricon('rgb(32, 101, 209)'),
            coloricon('rgb(228, 184, 57)'),
            coloricon('rgb(255, 48, 48)'),
            
          ],
        },
      ];


    