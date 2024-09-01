import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Grid2 as Grid, Paper, Box, Toolbar } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;
const drawerWidthCollapsed = 60;

function Dashboard() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { xs: `${drawerWidthCollapsed}px`, sm: `${drawerWidthCollapsed}px`, md: `${drawerWidthCollapsed}px`, lg: `${drawerWidth}px` },
          mt: '64px', // Adjust margin-top to match header height
        }}
      >
        <Toolbar />
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <Outlet />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;