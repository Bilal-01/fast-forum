import React, {useState} from 'react';
import NavList from './NavList';
import {
  Box, 
  AppBar, 
  Toolbar,
  IconButton,
  Typography, 
  Button, 
  Link,
  Stack,
  Menu,
  MenuItem,
  Fade
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
  
  function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="a" sx={{ flexGrow: 1, cursor: 'pointer', display: 'inline' }}>
              Fast Forum
            </Typography>
            <NavList />
          </Toolbar>
        </AppBar>
      </Box>

    );
  }
  export default Navbar;
  