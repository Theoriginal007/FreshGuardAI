import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Import global styles
import { BrowserRouter as Router } from 'react-router-dom';  // For routing
import * as serviceWorkerRegistration from './serviceWorkerRegistration';  // For service worker registration

// Create root element
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Register the service worker for offline capabilities and faster load times
serviceWorkerRegistration.register();
