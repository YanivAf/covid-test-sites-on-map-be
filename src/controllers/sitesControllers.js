const sitesQueries = require('../queries/sitesQueries');

const handleError = (res, error) => {
    console.error(error.message);
    res.status(500).send(error.message);
}

const setSpecificQuery = (req, res, next) => {
    if (req.method === 'GET') req.specificQuery = 'getAllSitesDb';
    else if (req.method === 'POST') req.specificQuery = 'addSiteDb';
    else if (req.method === 'PUT') {
        req.path === '/' ?
        req.specificQuery = 'editSiteDb' :
        req.specificQuery = 'archiveSiteDb';
    } else res.status(500).send('Unrecognized API request!');
    next();
}

const performSitesQuery = async (req, res) => {
    try {
        const queryResult = await sitesQueries[req.specificQuery](req.body);
        res.send(queryResult);
    } catch (error) {
        handleError(res, error);
    }
}

module.exports = { setSpecificQuery, performSitesQuery }