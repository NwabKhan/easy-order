import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import icon from './resources/icon.PNG'
import { NavLink } from 'react-router-dom';

const drawerWidth = 440;
const navItems = ['Home', 'About', 'Contact', 'Services'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (

     //small screen
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img style={{margin: '1.5vw', width: '40%', height: '6rem', cursor: 'pointer'}} src = {icon} alt = "LOGO"/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink key={item} to = {item} style = {{textDecoration: 'none', color: 'black'}}>
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{bgcolor: 'grey'}} component="nav">
        <Toolbar>
          <IconButton
            color="dark"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >

           <img style={{margin: '1.5vw', width: '10rem', height: '4rem', borderRadius: "15%", cursor: 'pointer'}} src = {icon} alt = "LOGO"/>

          </Typography>
          {/* link */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'white', fontSize: '1rem', margin: '0 1rem'}}>
                <NavLink style={{color: "white", fontWeight: '600'}} to = {item}>{item}</NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 4 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;