import React from 'react';
import { Box, Paper, Typography, Grid2 as Grid, Card, CardContent, TextField, Button } from '@mui/material';

const faqs = [
  { question: 'How do I reset my password?', answer: 'To reset your password, go to the settings page and click on "Reset Password".' },
  { question: 'How do I contact support?', answer: 'You can contact support by emailing support@example.com or by filling out the form below.' },
  // Add more FAQs as needed
];

const HelpSupport = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Help & Support
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Frequently Asked Questions
            </Typography>
            {faqs.map((faq, index) => (
              <Card key={index} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6">
                    {faq.question}
                  </Typography>
                  <Typography variant="body1">
                    {faq.answer}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Contact Support
            </Typography>
            <Typography variant="body1" gutterBottom>
              If you have any questions or need further assistance, please fill out the form below or email us at support@example.com.
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HelpSupport;