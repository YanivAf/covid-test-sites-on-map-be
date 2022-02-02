const express = require('express')
const cors = require('cors');
require('dotenv').config();
const app = express();

const corsOptions = {
  credentials: true,
  origin: process.env.ORIGIN || 'http://localhost:3000',
};
console.log(process.env.ORIGIN, corsOptions.origin);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sitesRoutes = require('./src/routes/sitesRoute');

app.use('/', sitesRoutes);

module.exports = app;