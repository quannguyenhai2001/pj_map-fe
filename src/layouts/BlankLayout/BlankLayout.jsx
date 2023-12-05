import { Box } from '@mui/material';
import React from 'react';

const BlankLayout = ({ children }) => {
    return (
        <Box sx={{ backgroundColor: "#f8eaed",  zIndex: "-1"}}>
            {children}
        </Box>
    );
};

export default BlankLayout;