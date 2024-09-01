import React from 'react';
import { Box, Paper, Typography, Grid2 as Grid, Card, CardContent, ThemeProvider } from '@mui/material';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { barData, doughnutData, lineData, options } from '../chartConfig';
import theme from '../theme';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const DataAnalytics = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            Data Analytics
          </Typography>
          <Grid container spacing={3} direction="row" justifyContent="center">
            <Grid item xs={12} md={2}>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Monthly Sales and Engagement
                  </Typography>
                  <Box sx={{ height: 200, width: '100%', maxWidth: 800 }}>
                    <Line data={lineData} options={options} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Monthly Sales
                  </Typography>
                  <Box sx={{ height: 200, width: '100%', maxWidth: 800 }}>
                    <Bar data={barData} options={options} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    User Engagement
                  </Typography>
                  <Box sx={{ height: 300, width: '100%', maxWidth: 800 }}>
                    <Doughnut data={doughnutData} options={options} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default DataAnalytics;
