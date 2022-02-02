const { query } = require('../../config/sitesDb');

const getAllSitesDb = async (body) => {
    try {
        const allSites = await query(`
            SELECT *
            FROM sites
            ORDER BY updatedAt DESC
        `);
        return allSites;
    } catch (error) {
        console.error(error.message);
    }
}

const addSiteDb = async (site) => {
    try {
        const addSite = await query(`
            INSERT
            INTO sites
            SET
                sTitle = '${site.sTitle}',
                sDetails = '${site.sDetails}',
                sTestType = '${site.sTestType}',
                sType = '${site.sType}',
                sId = '${site.sId}',
                lat = ${site.lat},
                lng = ${site.lng},
                createdAt = LOCALTIMESTAMP(),
                updatedAt = LOCALTIMESTAMP(),
                archived = ${site.archived}`
        );
        console.log(addSite);
        return addSite;
    } catch (error) {
        console.error(error.message);
    }
}

const editSiteDb = async (site) => {
    try {
        const editSite = await query(`
            UPDATE sites
            SET
                sTitle = '${site.sTitle}',
                sDetails = '${site.sDetails}',
                sTestType = '${site.sTestType}',
                sType = '${site.sType}',
                updatedAt = LOCALTIMESTAMP()
            WHERE sId = '${site.sId}'`
        );
        return editSite;
    } catch (error) {
        console.error(error.message);
    }
}

const archiveSiteDb = async (site) => {
    try {
        const deleteSite = await query(`
            UPDATE sites
            SET
                archived = ${site.archived},
                updatedAt = LOCALTIMESTAMP()
            WHERE sId = '${site.sId}'`
        );
        return deleteSite;
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = { getAllSitesDb, addSiteDb, editSiteDb, archiveSiteDb }