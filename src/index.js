// Src/index.js
const config = require('../config');
const server = require('./server');
const path = require('path');
const PORT = config.PORT || 1337;
const { checkConnection } = require('../database/connection.db');
const { logger } = require('./utils/logger.utils');
const { pageRoutes, userRoutes, articleRoutes } = require('./routes');

// Configure view engine and views directory
server.set('view engine', 'hbs');
server.set('views', path.join(__dirname, 'views'));

// Configure routes
server.use(pageRoutes);
server.use('/api/v1/users', userRoutes);
server.use('/api/v1/articles', articleRoutes);

//Check connection to database
checkConnection();

const startServer = async () => {
    try {
        server.listen(PORT, () => {
            logger.info(`Server is running on post ${PORT} in ${config.NODE_ENV} mode`);
        });
    } catch (error) {
        logger.error(error);
    }
};

startServer();
