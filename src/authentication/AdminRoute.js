import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = () => {
    const location = useLocation();
    const admin = useAdmin();
    if(!admin){
        return <Navigate to='/login' state={{from:location}} replace />
    }
    return <Outlet></Outlet>;
};

export default AdminRoute;