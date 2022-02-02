const mysql = require('mysql');
const Postgrator = require('postgrator')
const path = require('path');
require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit:    100,
    host:               process.env.DB_HOST,
    port:               process.env.DB_PORT,
    user:               process.env.DB_USER,
    password:           process.env.DB_PASSWORD,
    database:           process.env.DB_DATABASE,
});

const query = async (queryString) => {
    return new Promise((resolve, reject) => {
        pool.query(queryString, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

const postgrator = new Postgrator({
    migrationDirectory: path.resolve(__dirname, '../migrations'),
    driver:         'mysql',
    host:           process.env.DB_HOST,
    port:           process.env.DB_PORT,
    username:       process.env.DB_USER,
    password:       process.env.DB_PASSWORD,
    database:       process.env.DB_DATABASE,
    schemaTable:    'migrations',
});
module.exports = { query, postgrator }