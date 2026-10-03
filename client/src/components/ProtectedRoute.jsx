import { Children } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const token = localStorage.getItem("token");

    if(!token){
        return <Navigate to='/login' replace />
    }
    return Children;
};

export default ProtectedRoute;