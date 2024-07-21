const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dbConnect = require('./config/myDb');
require('dotenv').config(); // Ensure .env is loaded before dbConnect

// Connect to the database
dbConnect();

// Middleware to parse JSON bodies
app.use(express.json());

// Import and use routes
const toDoRoutes = require('./routes/todos');
app.use('/api/v1', toDoRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('<h1>HOMEPAGE</h1>'); // Use res.send to send the response body
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at port no - ${PORT}`);
});
