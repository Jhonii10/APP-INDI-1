import { Box } from '@mui/material';
import React from 'react';

const SvgColor = ({src, sx, ...other}) => {
    return (
        <Box
            component={'span'}
            className='svg-color'
            sx={{
                width: 24,
                height: 24,
                display: 'inline-block',
                bgcolor: 'currentColor',
                mask: `url(${src}) no-repeat center / contain`,
                WebkitMask: `url(${src}) no-repeat center / contain`,
                ...sx,
            }}
            {...other}
        />
    );
}

export default SvgColor;
