import React from 'react';
import { Box, Paper, Typography, Grid2 as Grid, Card, CardContent, Toolbar, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

const insights = [
  { id: 1, title: 'Prediction Accuracy', value: '95%' },
  { id: 2, title: 'Model Performance', value: 'High' },
  { id: 3, title: 'Data Quality', value: 'Excellent' },
  // Add more insights as needed
];

const MachineLearningInsights = () => {
  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Machine Learning Insights
        </Typography>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">
            Insights
          </Typography>
          <Button variant="contained" color="primary" startIcon={<RefreshIcon />}>
            Refresh
          </Button>
        </Toolbar>
        <Grid container spacing={3}>
          {insights.map((insight) => (
            <Grid item xs={12} md={4} key={insight.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {insight.title}
                  </Typography>
                  <Typography variant="h4" color="primary">
                    {insight.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default MachineLearningInsights;