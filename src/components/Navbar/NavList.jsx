import React, {useState} from 'react';
import { Button, IconButton, Stack } from '@mui/material';
import UserContext from '../UserContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './navbar.css';

function NavList(){
    const auth = useContext(UserContext)
    const navigate = useNavigate();


    const [isOpen, setIsOpen] = useState(false);

    const hoverEffect = {
        position: 'absolute',
        right: '-50%',
        top: '95%',
        width: '150px',
        height: '200px',
        background: 'white',
        padding: '10px',
        display: !isOpen ? 'none' : 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: '10px',
        transition: '0.3s all',
    }

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        auth.setUser(null);
        auth.setIsLoggedIn(false);
        navigate('/');
    }

    return(
        <Stack direction='row' spacing={2}>
            <Button onClick={() => (navigate('/'))} sx={{color: '#eeee'}}>
                Home
            </Button>
            <Button onClick={() => (navigate('/blog'))} sx={{color: '#eeee'}}>
                Blogs
            </Button>
            <Button onClick={() => (navigate('/about'))} sx={{color: '#eeee'}}>
                About Us
            </Button>
            <Button onClick={() => (navigate('/contact'))} sx={{color: '#eeee'}}>
                Contact Us
            </Button>
            <Button onClick={() => {
                return auth.user ? setIsOpen(!isOpen) : navigate('/authentication')
            }} sx={{color: '#eeee'}}>
        
                {   
                    auth.user
                    ? 
                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                        <AccountCircleIcon sx={{color: 'white', borderRadius: '100%',fontSize: '2.5rem', padding: '0px'}} />
                        {
                        <div style={hoverEffect} >
                            <div className='account-dropdown-link account-name'>{auth.user.uname}</div>
                            <div onClick={() => navigate('/profile/'+auth.user.id)} className='account-dropdown-link'>Visit Profile</div>
                            <div onClick={() => navigate('/blog')} className='account-dropdown-link'>Your Blog</div>
                            <div onClick={() => navigate('/timetable')} className='account-dropdown-link'>Your Timetable</div>
                            <div onClick={handleLogout} className='account-dropdown-link'>Logout</div>
                        </div>}
                    </IconButton>
                    :
                    'Login'
                }
            </Button>
        </Stack>
    );
}

export default NavList;