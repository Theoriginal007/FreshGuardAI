import React from 'react';
import { Box, Paper, Typography, Button, Grid2 as Grid } from '@mui/material';

const recommendations = [
  { id: 1, title: 'Reduce temperature in storage room', description: 'Lower the temperature to 4°C to prevent spoilage.' },
  { id: 2, title: 'Check humidity levels', description: 'Ensure humidity is between 60-70% for optimal storage.' },
  { id: 3, title: 'Rotate stock', description: 'Move older stock to the front to ensure it is used first.' },
];

const RecommendationsActions = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Recommendations & Actions
        </Typography>
        <Grid container spacing={3}>
          {recommendations.map((recommendation) => (
            <Grid item xs={12} sm={6} md={4} key={recommendation.id}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {recommendation.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {recommendation.description}
                </Typography>
                <Button variant="contained" color="primary">
                  Take Action
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default RecommendationsActions;