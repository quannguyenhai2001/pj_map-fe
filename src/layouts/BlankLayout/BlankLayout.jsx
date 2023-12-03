import { Box } from '@mui/material';
import React from 'react';

const BlankLayout = ({ children }) => {
    return (
        <Box sx={{height: "100vh", backgroundColor: "#f8eaed",  zIndex: "-1"}}>
            {children}
        </Box>
    );
};

export default BlankLayout;