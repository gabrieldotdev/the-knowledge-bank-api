const corsOptionsMiddleware = require('./cors.middleware');
const apiKeyMiddleware = require('./api.middleware');
const errorHandlerMiddleware = require('./error-handler.middleware');

module.exports = {
    corsOptionsMiddleware,
    apiKeyMiddleware,
    errorHandlerMiddleware,
};
