import React from 'react';
import { AppBar, Toolbar, Typography, Container, IconButton, Menu, MenuItem, Avatar, Box, Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import profile from '../images/blue-circle-with-white-user.png';

const drawerWidth = 300;
const drawerWidthCollapsed = 60;

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header({ handleDrawerToggle, isSidebarCollapsed }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signin'); // Redirect to the sign-in page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  let marginLeft;
  if (isSmallScreen) {
    marginLeft = `${drawerWidthCollapsed}px`;
  } else if (isSidebarCollapsed) {
    marginLeft = `${drawerWidthCollapsed}px`;
  } else {
    marginLeft = `${drawerWidth}px`;
  }

  return (
    <AppBar position="fixed" sx={{ marginLeft, width: `calc(100% - ${marginLeft})` }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Food Spoilage Detection
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile Picture" src={profile} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;