// server.js
const express = require('express');
const app = express();
const port = 3001; // Choose a different port than your React app

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public folder
app.use(express.static('public'));

// Serve the index file when the user accesses the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Import the router
const dataRouter = require('./routes/data');

// Use the router for /api/data routes
app.use('/api/data', dataRouter);

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});