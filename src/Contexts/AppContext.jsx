import React, { useState, createContext} from 'react'

export const Context = createContext()

const AppContext = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [email, setEmail] = useState('');
    const [full_name, setFullName] = useState('');

    const login = (email) =>{
        setIsLoggedIn(true);
        setEmail(email);
    };
    const logout = () =>{
        setIsLoggedIn(false);
        setEmail('');
    };
    return (
        <Context.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            email,
            login,
            logout,
            setEmail,
            full_name,
            setFullName
        }} >
            {children}
        </Context.Provider>
    )
}

export default AppContext