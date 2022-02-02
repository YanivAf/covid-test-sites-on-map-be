const express = require('express')
const router = express.Router();
const { setSpecificQuery, performSitesQuery } = require('../controllers/sitesControllers');

router.all('/', setSpecificQuery, performSitesQuery);
router.put('/archive', setSpecificQuery, performSitesQuery);

module.exports = router;