import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';
import LoadingState from '../component/LoadingState';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // console.log(user);

    if(loading){
        return <LoadingState></LoadingState>
    }

    if(user && user?.email){
        return children
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;