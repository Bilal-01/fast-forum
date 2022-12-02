import React from 'react';
import { Button, Stack } from '@mui/material';
import UserContext from '../UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function NavList(){
    const auth = useContext(UserContext)
    const navigate = useNavigate();
    return(
        <Stack direction='row' spacing={2}>
            <Button onClick={() => (navigate('/'))} sx={{color: '#eeee'}}>
                Home
            </Button>
            <Button onClick={() => (navigate('/blog'))} sx={{color: '#eeee'}}>
                Explore
            </Button>
            <Button onClick={() => (navigate('/about'))} sx={{color: '#eeee'}}>
                About Us
            </Button>
            <Button onClick={() => (navigate('/contact'))} sx={{color: '#eeee'}}>
                Contact Us
            </Button>
            <Button onClick={() => {
                return auth.user ? navigate('/profile') : navigate('/authentication')
            }} sx={{color: '#eeee'}}>
                {auth.user ? `${auth.user.email}` : 'Login'}
            </Button>
        </Stack>
    );
}

export default NavList;