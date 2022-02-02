const { query } = require('../../config/sitesDb');

const getAllSitesDb = async (body) => {
    try {
        const allSites = await query(`
            SELECT *
            FROM sites
        `);
        return allSites;
    } catch (error) {
        return error;
    }
}

const addSiteDb = async (site) => {
    try {
        const addSite = await query(`
            INSERT
            INTO sites
            SET ?`,
            site
        );
        return addSite;
    } catch (error) {
        return error;
    }
}

const editSiteDb = async (site) => {
    try {
        const editSite = await query(`
            UPDATE sites
            SET ?
            WHERE sId = ?`,
            [site, site.sId]
        );
        return editSite;
    } catch (error) {
        return error;
    }
}

const deleteSiteDb = async (site) => {
    try {
        const deleteSite = await query(`
            DELETE
            FROM sites
            WHERE sId = ?`,
            site.sId
        );
        return deleteSite;
    } catch (error) {
        return error;
    }
}

module.exports = { getAllSitesDb, addSiteDb, editSiteDb, deleteSiteDb }