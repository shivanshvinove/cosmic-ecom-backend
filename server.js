// server.js

require('dotenv').config();       // Load .env variables
const express = require('express');
const app = express();
const db = require('./models');   // Sequelize models

// Middlewares
app.use(express.json());          // Parse JSON bodies

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/dashboard', require('./routes/dashboard'));

// Start the server
const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
  });
});
// Server entry placeholder
