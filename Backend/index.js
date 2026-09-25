const express = require('express');
const cors = require('cors');

const indexRoutes = require('./routes/index.routes');
const multivitaminRoutes = require('./routes/multivitamin.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', indexRoutes);
app.use('/api/multivitamins', multivitaminRoutes);

module.exports = app;
