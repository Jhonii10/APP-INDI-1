import { Avatar, Box, Card, CardHeader, Stack, Typography } from '@mui/material';
import React from 'react';
import Iconify from '../../../iconify/Iconify';

const AppTopAuthors = () => {
    return (
        <Card >
            <CardHeader 
                title={'Autores Principales'}
                sx={{
                    textAlign:'left',
                    '& span':{fontFamily:'"Quicksand", sans-serif ',
                    fontSize:'1.125rem',
                    fontWeight:600
                    }
                }}
            />
            <Stack sx={{p:'24px', gap:'24px'}}>
            {
                [
                    {
                        name:'John Doe',
                        likes:'9,91k',
                        color:'rgb(7, 141, 238)',
                        backgroundColor:'rgba(7, 141, 238, 0.08)'
                    },
                    {
                        name:'Jayvion Simon',
                        likes:'9,12k',
                        color:'rgb(0, 184, 217)',
                        backgroundColor:'rgba(7, 141, 238, 0.08)'
                    },
                    {
                        name:'Lusian Obrien',
                        likes:'1,95k',
                        color:'rgb(255, 86, 48)',
                        backgroundColor:'rgba(255, 86, 48, 0.08)'
                    },

                ].map((date,index)=>(
                    <Stack sx={{
                        display:'flex',
                        flexDirection:'row',
                        gap:'16px',
                        alignItems:'center'
                    }}>
                        <Avatar src={`/assets/images/avatars/avatar_${index + 1}.jpg`} alt='avatar'/>
                        <Box sx={{flexGrow:'1'}}>
                            <Typography 
                                component={'h6'} 
                                variant='subtitle2'
                                sx={{
                                    fontWeight:600,
                                    fontSize:'0.875rem',
                                    textAlign:'left',
                                    fontFamily:'"Quicksand", sans-serif '
                                }}
                                >
                                {date.name}
                            </Typography>
                            <Typography 
                                component={'span'} 
                                variant={'caption'}
                                sx={{
                                    margin:'4px 0px 0px',
                                    fontSize:'0.75rem',
                                    color:'rgb(99, 115, 129)',
                                    display:'flex',
                                    alignItems:'center',
                                    fontFamily:'"Quicksand", sans-serif '

                                }}
                                >
                            <Iconify icon={'icon-park-solid:like'} sx={{width:'14px',height:'14px',marginRight:'4px'}}/>
                                {date.likes}
                            </Typography>
                            

                        </Box>
                        <Iconify 
                            icon={'solar:cup-star-bold'} 
                            sx={{
                                width:'40px',
                                height:'40px',
                                p:'8px',
                                color:`${date.color}`,
                                borderRadius:'50%',
                                backgroundColor:`${date.backgroundColor}`
                                }}

                        />
                    </Stack>

                ))
            }
            
            </Stack>
        </Card>
    );
}

export default AppTopAuthors;
