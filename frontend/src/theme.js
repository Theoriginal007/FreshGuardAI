// theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6FCF97', // Fresh Lime Green
    },
    secondary: {
      main: '#F2C94C', // Lemon Yellow
    },
    background: {
      default: '#F7F7F5', // Light Sage
      paper: '#FFFFFF',   // Off-White
    },
    text: {
      primary: '#333333',  // Charcoal Gray
      secondary: '#828282', // Olive Green
    },
    error: {
      main: '#E57373', // Tomato Red
    },
    success: {
      main: '#81C784', // Light Green
    },
    warning: {
      main: '#FFA726', // Amber
    },
    info: {
      main: '#29B6F6', // Light Blue
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    body1: {
      color: '#333333',
    },
    body2: {
      color: '#828282',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded button edges for a modern look
          textTransform: 'none', // Keep button text capitalization consistent
        },
        containedPrimary: {
          backgroundColor: '#6FCF97',
          '&:hover': {
            backgroundColor: '#57AD76', // Slightly darker green for hover state
          },
        },
        containedSecondary: {
          backgroundColor: '#F2C94C',
          '&:hover': {
            backgroundColor: '#E1B32E', // Slightly darker yellow for hover state
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#6FCF97', // Primary color for AppBar
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F0F0F0', // Light Gray for Sidebar
          color: '#333333', // Text color in Sidebar
        },
      },
    },
  },
});

export default theme;
