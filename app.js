const express = require('express')
const cors = require('cors');
const app = express();

const corsOptions = {
  credentials: true,
  origin: process.env.ORIGIN || 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sitesRoutes = require('./src/routes/sitesRoute');

app.use('/', sitesRoutes);

module.exports = app;