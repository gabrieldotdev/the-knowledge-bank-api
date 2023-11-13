const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: '.env.development' });
} else if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env' });
}

module.exports = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,

    JWT_SECRET: process.env.JWT_SECRET,
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS,
    API_KEY: process.env.API_KEY,
};
