const mysql = require('mysql');
const Postgrator = require('postgrator')
const path = require('path');
require('dotenv').config();

const pool = mysql.createPool({
    host:               process.env.DB_HOST,
    port:               process.env.DB_PORT,
    database:           process.env.DB_DATABASE,
    user:               process.env.DB_USER,
    password:           process.env.DB_PASS,
    connectionLimit:    10,
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
    database:       process.env.DB_DATABASE,
    username:       process.env.DB_USER,
    password:       process.env.DB_PASSWORD,
    schemaTable:    'migrations',
});

module.exports = { query, postgrator }