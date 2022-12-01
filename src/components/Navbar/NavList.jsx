import React from 'react';
import { Button, Stack } from '@mui/material';
import UserContext from '../UserContext';
import { useContext } from 'react';

function NavList(){
    const auth = useContext(UserContext)
    return(
        <Stack direction='row' spacing={2}>
            <Button sx={{color: '#eeee'}}>
                Home
            </Button>
            <Button sx={{color: '#eeee'}}>
                Explore
            </Button>
            <Button sx={{color: '#eeee'}}>
                About Us
            </Button>
            <Button sx={{color: '#eeee'}}>
                Contact Us
            </Button>
            <Button sx={{color: '#eeee'}}>
                {auth.user ? `${auth.user.email}` : 'Login'}
            </Button>
        </Stack>
    );
}

export default NavList;