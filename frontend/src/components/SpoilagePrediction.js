import React from 'react';
import { Typography, Paper, Box, Grid2 as Grid, Avatar } from '@mui/material';
import HighRiskIcon from '@mui/icons-material/Error';
import MediumRiskIcon from '@mui/icons-material/Warning';
import LowRiskIcon from '@mui/icons-material/CheckCircle';

function SpoilagePrediction() {
  const predictions = [
    { name: 'Milk', risk: 'High' },
    { name: 'Tomatoes', risk: 'Medium' },
    { name: 'Lettuce', risk: 'Low' },
    { name: 'Chicken', risk: 'High' },
    { name: 'Cheese', risk: 'Medium' },
    { name: 'Apples', risk: 'Low' },
    { name: 'Bananas', risk: 'Medium' },
    { name: 'Carrots', risk: 'Low' },
    { name: 'Yogurt', risk: 'High' },
    { name: 'Bread', risk: 'Medium' },
    { name: 'Spinach', risk: 'Low' },
    { name: 'Fish', risk: 'High' },
    { name: 'Beef', risk: 'Medium' },
    { name: 'Oranges', risk: 'Low' },
    { name: 'Grapes', risk: 'Medium' },
    { name: 'Potatoes', risk: 'Low' },
    { name: 'Butter', risk: 'High' },
    { name: 'Eggs', risk: 'Medium' },
    { name: 'Cabbage', risk: 'Low' },
    { name: 'Pork', risk: 'High' },
  ];

  const getRiskIcon = (risk) => {
    switch (risk) {
      case 'High':
        return <HighRiskIcon color="error" />;
      case 'Medium':
        return <MediumRiskIcon color="warning" />;
      case 'Low':
        return <LowRiskIcon color="success" />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Spoilage Prediction
        </Typography>
        <Grid container spacing={3}>
          {predictions.map((item, index) => (
            <Grid item xs={12} sm={4} key={`${item.name}-${index}`}>
              <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', backgroundColor: item.risk === 'High' ? '#ffebee' : item.risk === 'Medium' ? '#fff3e0' : '#e8f5e9' }}>
                <Avatar sx={{ mr: 2 }}>
                  {getRiskIcon(item.risk)}
                </Avatar>
                <Typography variant="body1">
                  {item.name}: {item.risk} Risk
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default SpoilagePrediction;