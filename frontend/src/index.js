import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';

// Create root element
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
  </ThemeProvider>
 

);
