const sitesQueries = require('../queries/sitesQueries');

const handleError = (res, error) => {
    console.error(error.message);
    res.status(500).send(error.message);
}

const setSpecificQuery = (req, res, next) => {
    if (req.method = 'GET') req.specificQuery = 'getAllSitesDb';
    else if (req.method = 'POST') req.specificQuery = 'addSiteDb';
    else if (req.method = 'PUT') req.specificQuery = 'editSiteDb';
    else if (req.method = 'DELETE') req.specificQuery = 'deleteSiteDb';
    next();
}

const performSitesQuery = (req, res) => {
    try {
        const specificQueryFunction = setSpecificQuery(req.specificQuery)
        const queryResult = sitesQueries[specificQueryFunction](req.body.site);
        res.send(queryResult);
    } catch (error) {
        handleError(res, error);
    }
}

module.exports = { performSitesQuery }