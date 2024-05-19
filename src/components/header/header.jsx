import React from 'react';
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
import Button from '@mui/material/Button';
import GrizzlyLogo from '../../assets/images/logo.png';
import styled from 'styled-components';

const drawerWidth = 240;
const navItems = ['Find Workers', 'Find Jobs', 'About Us', 'Resources', 'Contact'];

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <img src={GrizzlyLogo} alt='grizzly-force' />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', textTransform: 'capitalize' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <StyledAppBar component="nav">
        <Toolbar>
          <NavBox>
            <Box>
              <img src={GrizzlyLogo} alt='grizzly-force' />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#212A34", textTransform: 'capitalize' }} disableRipple>
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button disableRipple sx={{ color: "#212A34", textTransform: 'capitalize', '&:hover': { background: "none" } }}>Login</Button>
              <AccountBtn disableRipple variant='outlined'>Open an Account</AccountBtn>
            </Box>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </NavBox>
        </Toolbar>
      </StyledAppBar>
      <nav>
        <Drawer
          container={container}
          anchor='right'
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </React.Fragment>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

const StyledAppBar = styled(AppBar)`
&&{
  background-color: #fff; 
  box-shadow: none;
  border-bottom: 1px solid #BDBDBD; 
  padding: 10px 0px;
  @media (max-width: 600px){
    border-bottom: none;
  }
}
`;

const NavBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const AccountBtn = styled(Button)`
&&{
  color: #212A34;
  text-transform: capitalize;
  border: 2px solid #212A34;
  border-radius: 12px;
  &:hover {
    color: #212A34;
    border: 2px solid #212A34;
    background: none;
  }
}
`;