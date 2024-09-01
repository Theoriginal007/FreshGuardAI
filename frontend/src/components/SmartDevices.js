import React from 'react';
import { Box, Paper, Typography, Grid2 as Grid, Card, CardContent, Toolbar, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const devices = [
  { id: 1, name: 'Edge Impulse Sensor 1', status: 'Online', location: 'Refrigerator', purpose: 'Food Spoilage Detection' },
  { id: 2, name: 'Edge Impulse Sensor 2', status: 'Offline', location: 'Pantry', purpose: 'Food Spoilage Detection' },
  { id: 3, name: 'Edge Impulse Sensor 3', status: 'Online', location: 'Warehouse', purpose: 'Food Spoilage Detection' },
  // Add more devices as needed
];

const SmartDevices = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Smart Devices for Food Spoilage Detection
        </Typography>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">
            Devices
          </Typography>
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>
            Add Device
          </Button>
        </Toolbar>
        <Grid container spacing={3}>
          {devices.map((device) => (
            <Grid item xs={12} md={4} key={device.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {device.name}
                  </Typography>
                  <Typography variant="body1">
                    Status: {device.status}
                  </Typography>
                  <Typography variant="body1">
                    Location: {device.location}
                  </Typography>
                  <Typography variant="body1">
                    Purpose: {device.purpose}
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default SmartDevices;