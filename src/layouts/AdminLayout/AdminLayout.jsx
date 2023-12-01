import React, { memo } from "react";

import { Box } from "@mui/material";

import AppSidebar from "components/AppSidebar/AppSidebar";

import "./AdminLayout.styles.scss";

const AdminLayout = ({ children }) => {
    return (
        <Box>
            <Box
                display="flex"
                flexDirection="column"
                minHeight="100vh"
                sx={{ backgroundColor: "rgb(252 252 252)" }}
            >
                <Box
                    component="main"
                    sx={{ flex: 1 }}
                    display="flex"
                    className="wrapper-main"
                >
                    <AppSidebar />
                    <Box
                        component="section"
                        sx={{ flexGrow: 1 }}
                        width="100%"
                    >
                        <Box p={20} height="100%">
                            {children}
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default memo(AdminLayout);