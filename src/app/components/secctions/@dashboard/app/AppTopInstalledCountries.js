import { Card, CardHeader, Stack } from '@mui/material';
import React from 'react';
import ScrollBar from '../../../scrollbar/ScrollBar';
import Iconify from '../../../iconify/Iconify';

const AppTopInstalledCountries = ({title}) => {
    return (
        <>
            <Card>
                <CardHeader title={title} sx={{textAlign:'left'}}/>
                <ScrollBar>
                    <Stack sx={{p:'24px',display:'flex', gap:'24px'}}>
                        {
                            [
                                {countri:'Alemania', flags: 'emojione-v1:flag-for-germany'},
                                {countri:'Argentina', flags: 'emojione-v1:flag-for-argentina'},
                                {countri:'Francia', flags: 'emojione-v1:flag-for-france'},
                                {countri:'Colombia', flags: 'emojione-v1:flag-for-colombia'},
                                {countri:'EE.UU', flags: 'emojione-v1:flag-for-united-states'},
                            
                            
                            ].map((date)=>(
                                <Stack sx={{ display:'flex', flexDirection:'row', gap:'16px', alignItems:'center', fontWeight:700}} >
                                <Iconify icon={date.flags}/>
                                {date.countri}
                                </Stack>
                            ))
                        }
                    </Stack>
                </ScrollBar>
            </Card>
             
        </>
    );
}

export default AppTopInstalledCountries;
