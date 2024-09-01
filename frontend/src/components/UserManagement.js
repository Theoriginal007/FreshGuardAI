import React from 'react';
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Manager' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Chef' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Finance Manager' },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'Manager' },
  { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com', role: 'Chef' },
  { id: 6, name: 'Diana Evans', email: 'diana.evans@example.com', role: 'Finance Manager' },
  // Add more user data as needed
];

const UserManagement = () => {
  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          User Management
        </Typography>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">
            Users
          </Typography>
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>
            Add User
          </Button>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell align="right">
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default UserManagement;