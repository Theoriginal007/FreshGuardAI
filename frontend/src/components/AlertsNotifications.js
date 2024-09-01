import React, { useEffect } from 'react';
import { Box, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const alerts = [
  { message: 'High temperature detected in storage room.', severity: 'High' },
  { message: 'Medium risk of spoilage for tomatoes.', severity: 'Medium' },
  { message: 'Low stock of milk.', severity: 'Low' },
];

const getSeverityIcon = (severity) => {
  switch (severity) {
    case 'High':
      return <ErrorIcon color="error" />;
    case 'Medium':
      return <WarningIcon color="warning" />;
    case 'Low':
      return <InfoIcon color="info" />;
    default:
      return null;
  }
};

const AlertsNotifications = () => {
  useEffect(() => {
    alerts.forEach(alert => {
      switch (alert.severity) {
        case 'High':
          toast.error(alert.message);
          break;
        case 'Medium':
          toast.warn(alert.message);
          break;
        case 'Low':
          toast.info(alert.message);
          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Alerts & Notifications
        </Typography>
        <List>
          {alerts.map((alert, index) => (
            <ListItem key={`alert-${alert.message}`} sx={{ mb: 2 }}>
              <ListItemIcon>
                <Avatar>
                  {getSeverityIcon(alert.severity)}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={alert.message}
                secondary={`Severity: ${alert.severity}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <ToastContainer />
    </Box>
  );
};

export default AlertsNotifications;