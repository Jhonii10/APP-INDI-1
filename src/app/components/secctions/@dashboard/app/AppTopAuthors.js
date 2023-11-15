import { Avatar, Card, CardHeader, Stack } from '@mui/material';
import React from 'react';

const AppTopAuthors = () => {
    return (
        <Card sx={{p:'24px'}}>
            <CardHeader title={'Autores Principales'}/>
            <Stack>
                <Avatar src='/assets/images/avatars/avatar_1.jpg' alt='avatar'/>
            </Stack>
        </Card>
    );
}

export default AppTopAuthors;
