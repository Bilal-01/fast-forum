import React from 'react';
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

const RequireAuth = ({children}) => {
    const {user, isLoading} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        console.log("Hello", user, isLoading);
        if(!user && !isLoading)
            navigate("/authentication");
    }, [user, isLoading])

    return(
        <>
            { user ? children : null}
        </>
        
    )

}

export default RequireAuth;