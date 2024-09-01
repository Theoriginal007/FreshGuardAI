import React from 'react';
import { Typography, Paper, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Grid2 as Grid } from '@mui/material';


const inventory = [
  { name: 'Apples', category: 'Fruit', quantity: 50, location: 'Aisle 1', expiration: '2023-12-01', supplier: 'Supplier A', price: '$1.00' },
  { name: 'Bananas', category: 'Fruit', quantity: 30, location: 'Aisle 1', expiration: '2023-11-25', supplier: 'Supplier B', price: '$0.50' },
  { name: 'Carrots', category: 'Vegetable', quantity: 20, location: 'Aisle 2', expiration: '2023-12-05', supplier: 'Supplier C', price: '$0.80' },
  { name: 'Tomatoes', category: 'Vegetable', quantity: 40, location: 'Aisle 2', expiration: '2023-11-30', supplier: 'Supplier D', price: '$1.20' },
  { name: 'Milk', category: 'Dairy', quantity: 10, location: 'Aisle 3', expiration: '2023-11-20', supplier: 'Supplier E', price: '$2.00' },
  { name: 'Bread', category: 'Bakery', quantity: 25, location: 'Aisle 4', expiration: '2023-11-18', supplier: 'Supplier F', price: '$1.50' },
  { name: 'Eggs', category: 'Dairy', quantity: 15, location: 'Aisle 3', expiration: '2023-11-22', supplier: 'Supplier G', price: '$3.00' },
  { name: 'Cheese', category: 'Dairy', quantity: 8, location: 'Aisle 3', expiration: '2023-12-10', supplier: 'Supplier H', price: '$4.00' },
  { name: 'Chicken', category: 'Meat', quantity: 12, location: 'Aisle 5', expiration: '2023-11-25', supplier: 'Supplier I', price: '$5.00' },
  { name: 'Beef', category: 'Meat', quantity: 7, location: 'Aisle 5', expiration: '2023-11-28', supplier: 'Supplier J', price: '$6.00' },
];

function InventoryManagement() {
  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Inventory Management
        </Typography>
        <TableContainer component={Paper} sx={{ mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Expiration Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.expiration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary">Add Item</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">Remove Item</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default InventoryManagement;