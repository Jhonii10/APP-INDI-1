import { Card, CardHeader, Stack, Typography } from '@mui/material';
import React from 'react';
import ScrollBar from '../../../scrollbar/ScrollBar';
import Iconify from '../../../iconify/Iconify';

const AppTopInstalledCountries = ({title}) => {
    return (
        <>
            <Card>
                <CardHeader title={title} sx={{textAlign:'left', padding:'24px 24px 12px', '& span':{fontFamily:'"Quicksand", sans-serif', fontWeight:700, fontSize:'1.125rem'}}}/>
                <ScrollBar>
                    <Stack sx={{p:'24px',display:'flex', gap:'24px'}}>
                        {
                            [
                                {countri:'Alemania', flags: 'emojione-v1:flag-for-germany'},
                                {countri:'Argentina', flags: 'emojione-v1:flag-for-argentina'},
                                {countri:'Colombia', flags: 'emojione-v1:flag-for-colombia'},
                                {countri:'EE.UU', flags: 'emojione-v1:flag-for-united-states'},
                                {countri:'Mexico', flags: 'emojione-v1:flag-for-mexico'},
                            
                            
                            ].map((date)=>(
                                <>
                                <Stack 
                                    sx={{ 
                                        display:'flex', 
                                        flexDirection:'row', 
                                        gap:'16px', alignItems:'center',
                                        fontWeight:700,

                                        }} >
                                     <Stack
                                        sx={{
                                            display:'flex',
                                            flexDirection:'row',
                                            alignItems:'center',
                                            flexGrow:1,
                                            minWidth:'120px',
                                        }}
                                     >
                                        <Iconify icon={date.flags} sx={{width:'24px', height:'24px',  marginRight:'8px'}}/>
                                        <Typography component={'h6'} sx={{fontFamily:'"Quicksand", sans-serif', fontWeight:700}}>{date.countri}</Typography>
                                        </Stack>
                                        {
                                            [
                                             {icon:'uil:android', usuarios:'9.91k',},
                                             {icon:'mingcute:windows-fill' , usuarios:'1.95k' },
                                             {icon:'uil:apple', usuarios:'2.03k'},
                                            
                                            ].map(({icon , usuarios})=>(
                                                <Stack sx={{ 
                                                     minWidth:'80px',
                                                     flexDirection:'row',
                                                     alignItems:'center'

                                                }}>
                                                <Iconify icon={icon} sx={{width:'14px', height:'14px',  marginRight:'4px', color:'rgb(145, 158, 171)'}}/>
                                                <Typography variant='body2' sx={{fontFamily:'"Quicksand", sans-serif'}} >{usuarios}</Typography>
                                                </Stack>
                                                
                                            ))
                                        }
                                        
                                        
                                </Stack>

                                

                                </>
                            ))
                        }
                    </Stack>
                </ScrollBar>
            </Card>
             
        </>
    );
}

export default AppTopInstalledCountries;
