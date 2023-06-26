const express = require('express');
const app = express();

// Define your API routes here

app.get('/pets', (req, res) => {
  // Read the JSON file containing the dogs' information
  const petsData = require('./pets.json');
  
  // Send the dogs' information as the API response
  res.json(petsData);
});

// Define other routes for cats, small pets, etc.

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
