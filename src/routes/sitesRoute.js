const express = require('express')
const router = express.Router();
const { performSitesQuery } = require('../controllers/sitesControllers');

router.all('/', setSpecificQuery, performSitesQuery);

const setSpecificQuery = (req, res, next) => {
    if (req.method = 'GET') req.specificQuery = 'getAllSitesDb';
    else if (req.method = 'POST') req.specificQuery = 'addSiteDb';
    else if (req.method = 'PUT') req.specificQuery = 'editSiteDb';
    else if (req.method = 'DELETE') req.specificQuery = 'deleteSiteDb';
    next();
}

module.exports = router;