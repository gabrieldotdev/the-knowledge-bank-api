// Used to connect to the database and check the connection. (PostgreSQL)
const { Pool } = require('pg');
const config = require('../config');
const { logger } = require('../src/utils/logger.utils');

const connectionString = `postgresql://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`;

let pool;

async function initializePool() {
    try {
        pool = new Pool({ connectionString });
        await pool.connect();
    } catch (error) {
        logger.error(`Could not connect to the database. Exiting now... ${error}`);
        process.exit();
    }
}

async function getPool() {
    if (!pool) await initializePool();
    return pool;
}

async function checkConnection() {
    if (!pool) await initializePool();
    try {
        await pool.query('SELECT NOW()');
        logger.info('Successfully connected to the database.');
    } catch (error) {
        logger.error(`Could not connect to the database. Exiting now... ${error} + ${connectionString}`);
        process.exit();
    }
}

module.exports = { getPool, checkConnection };
