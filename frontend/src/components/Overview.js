import React from 'react';
import { Typography, Paper, Box, Grid2 as Grid } from '@mui/material';

function Overview() {
  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Spoilage Risk Summary
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2, backgroundColor: '#e0f7fa' }}>Low Risk: 10 items</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2, backgroundColor: '#fff3e0' }}>Medium Risk: 5 items</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2, backgroundColor: '#ffebee' }}>High Risk: 2 items</Paper>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Alerts Summary
        </Typography>
        <Paper sx={{ p: 2, backgroundColor: '#f3e5f5' }}>Recent Alerts: 3</Paper>
      </Paper>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Waste Reduction Metrics
        </Typography>
        <Paper sx={{ p: 2, backgroundColor: '#e8f5e9' }}>Reduction: 20%</Paper>
      </Paper>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Inventory Overview
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2, backgroundColor: '#e1bee7' }}>Total Items: 100</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2, backgroundColor: '#c5cae9' }}>Items in Stock: 80</Paper>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Expiration Summary
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2, backgroundColor: '#ffccbc' }}>Expiring Soon: 5 items</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2, backgroundColor: '#dcedc8' }}>Expired: 2 items</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2, backgroundColor: '#f0f4c3' }}>Fresh: 93 items</Paper>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Sales Metrics
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2, backgroundColor: '#ffe0b2' }}>Total Sales: $5000</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2, backgroundColor: '#b2dfdb' }}>Sales This Month: $1200</Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Overview;