const express = require('express')
const router = express.Router();
const { performSitesQuery } = require('../controllers/sitesControllers');

router.all('/', performSitesQuery);

module.exports = router;