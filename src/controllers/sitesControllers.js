const sitesQueries = require('../queries/sitesQueries');

const handleError = (res, error) => {
    console.error(error.message);
    res.status(500).send(error.message);
}

const performSitesQuery = (req, res) => {
    try {
        const queryResult = sitesQueries[req.specificQuery](req.body.site);
        res.send(queryResult);
    } catch (error) {
        handleError(res, error);
    }
}

module.exports = { performSitesQuery }