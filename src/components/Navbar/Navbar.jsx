import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NavList from './NavList';
import UserContext from '../UserContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const auth = useContext(UserContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom:'64px' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={auth.user && auth.user.role === 0 ? { background: '#16213E'}: null} open={open}>
        <Toolbar>
          {
            auth.user?
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            :null
          }
          <Typography variant="h6" component="a" sx={{ flexGrow: 1, cursor: 'pointer', display: 'inline' }}>
            Fast Directory
          </Typography>
          <NavList/>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background:'#16213E',
            color:"white",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{background:'#16213E', color:"white"}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{color:"white"}}/> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{background:'#16213E'}}>
          <ListItem disablePadding>
            <Link style={{color:"white", textDecorationLine:"none"}} to="/resources">
              <ListItemButton >
                <ListItemText primary="Resources" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link style={{color:"white", textDecorationLine:"none"}} to="/carpool">
              <ListItemButton>
                <ListItemText primary="Carpool" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link style={{color:"white", textDecorationLine:"none"}} to="/societies">
              <ListItemButton>
                <ListItemText primary="Societies" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link style={{color:"white", textDecorationLine:"none"}} to="/project">
              <ListItemButton>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link style={{color:"white", textDecorationLine:"none"}} to="/timetable">
              <ListItemButton>
                <ListItemText primary="Time Table" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link style={{color:"white", textDecorationLine:"none"}} to="/teachers">
              <ListItemButton>
                <ListItemText primary="Teachers" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}