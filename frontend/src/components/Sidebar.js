import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import SpoilageIcon from '@mui/icons-material/Warning';
import AlertsIcon from '@mui/icons-material/Notifications';
import RecommendationsIcon from '@mui/icons-material/ThumbUp';
import AnalyticsIcon from '@mui/icons-material/BarChart';
import UserManagementIcon from '@mui/icons-material/People';
import MLIcon from '@mui/icons-material/Science';
import DevicesIcon from '@mui/icons-material/Devices';
import HelpIcon from '@mui/icons-material/Help';

const drawerWidth = 240;
const drawerWidthCollapsed = 60; // Width when only icons are shown

function Sidebar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? theme.palette.primary.main : "inherit",
    textDecoration: "none",
  });


  return (
    <Drawer
    variant="permanent"
    sx={{
      display: { xs: "block", sm: "block", md: "block" },
      "& .MuiDrawer-paper": {
        width: isSmallScreen ? drawerWidthCollapsed : drawerWidth,
        boxSizing: "border-box",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      },
    }}
    open
    >
      <Toolbar />
      <List>
        <ListItem button component={NavLink} to="/overview" style={getActiveStyle}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Overview" />}
        </ListItem>
        <ListItem button component={NavLink} to="/inventory" style={getActiveStyle}>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Inventory Management" />}
        </ListItem>
        <ListItem button component={NavLink} to="/spoilage" style={getActiveStyle}>
          <ListItemIcon>
            <SpoilageIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Spoilage Prediction" />}
        </ListItem>
        <ListItem button component={NavLink} to="/alerts" style={getActiveStyle}>
          <ListItemIcon>
            <AlertsIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Alerts & Notifications" />}
        </ListItem>
        <ListItem button component={NavLink} to="/recommendations" style={getActiveStyle}>
          <ListItemIcon>
            <RecommendationsIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Recommendations & Actions" />}
        </ListItem>
        <ListItem button component={NavLink} to="/analytics" style={getActiveStyle}>
          <ListItemIcon>
            <AnalyticsIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Data Analytics" />}
        </ListItem>
        <ListItem button component={NavLink} to="/users" style={getActiveStyle}>
          <ListItemIcon>
            <UserManagementIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="User Management" />}
        </ListItem>
        <ListItem button component={NavLink} to="/ml-insights" style={getActiveStyle}>
          <ListItemIcon>
            <MLIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Machine Learning Insights" />}
        </ListItem>
        <ListItem button component={NavLink} to="/devices" style={getActiveStyle}>
          <ListItemIcon>
            <DevicesIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Smart Devices" />}
        </ListItem>
        <ListItem button component={NavLink} to="/help" style={getActiveStyle}>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Help & Support" />}
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;