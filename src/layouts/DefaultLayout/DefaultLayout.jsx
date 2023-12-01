import React, { memo } from "react";

import { Box } from "@mui/material";



import "./DefaultLayout.styles.scss";

const DefaultLayout = ({ children }) => {
    return (
        <Box>
            {children}
        </Box>
    );
};

export default memo(DefaultLayout);