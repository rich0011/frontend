import React from "react";
import { useNavigate } from 'react-router-dom';
import { UserIcon, LogoutButton } from '../Home/styled'
import logout from '../../assets/logout.png';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();
    const handleLogout = () =>{
        onLogout();
        navigate('/login');
    };

    return (
        <UserIcon>
            <LogoutButton onClick={handleLogout}><img src={logout} alt="POLARCTIC"/></LogoutButton>
        </UserIcon>
    )
}

export default Logout;