import React from "react";
import { Navigate, Outlet } from 'react-router-dom'
import { getRole } from "queries/auth";

const PrivateRoutes = ({isPrivate, requiredRole, ...rest}) => {
    const isAuth = localStorage.getItem('token')
    const role = getRole();

    if(isPrivate) {
        if(!isAuth) {
            return <Navigate to="/signin" />;
        }
        if (requiredRole && role !== requiredRole) {
            return <Navigate to="/unauthorized" />;
        }
    }
    return <Outlet/>
}

export default PrivateRoutes;