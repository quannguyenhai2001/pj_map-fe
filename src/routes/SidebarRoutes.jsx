import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";


export const sidebarMenuItems = [

    {
        icon: <AccountCircleIcon />,
        title: "Quản lý người dùng",
        to: "/dashboard",
    },

    {
        icon: <Diversity3Icon />,
        title: "Quản lý bài viết",
        to: "/dashboard/posts",
    },
    {
        icon: <ExitToAppIcon />,
        title: "Thoát",
    },
];