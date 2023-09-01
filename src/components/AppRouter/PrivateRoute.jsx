import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Context } from '../../Contexts/AppContext';

const PrivateRoute = () => {
    const { login, logout } = useContext(Context);
    console.log(login)
    if(login ) { 
        return  <Outlet /> 
       }
      else {
       return <Navigate to='/login'/>
   }};

export default PrivateRoute;
