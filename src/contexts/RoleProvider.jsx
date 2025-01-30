import React, { createContext, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
    const [role, setRole] = useState(null);

    const setRoleAndRedirect = (newRole) => {
        setRole(newRole);
    };

    return (
        <RoleContext.Provider value={{ role, setRoleAndRedirect }}>
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = () => {
    return useContext(RoleContext);
};

export const RoleBasedRedirect = ({ children }) => {
    const { role } = useRole();

    if (role === 'paciente') {
        return <Redirect to="/dashboard" />;
    } else if (role === 'admin') {
        return <Redirect to="/controller" />;
    } else {
        return children;
    }
};