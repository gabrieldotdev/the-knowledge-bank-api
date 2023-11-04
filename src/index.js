const config = require('../config');
const server = require('./server');
const path = require('path');
const PORT = config.PORT || 1337;
const { checkConnection } = require('../database/connection.db');
const { logger } = require('./utils/logger.utils');
const { pageRoutes, userRoutes, articleRoutes } = require('./routes');
const { apiKeyMiddleware } = require('./middleware');
const app = server;

// Cấu hình view engine và thư mục views (Configure view engine and views directory)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Sử dụng middleware API Key cho tất cả các route (Use API Key middleware for all routes)
// app.use(apiKeyMiddleware);

// Sử dụng các route (Use routes)
app.use(pageRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/articles', articleRoutes);

// Bắt đầu server (Start the server)
const startServer = async () => {
    try {
        app.listen(PORT, () => {
            logger.info(`Server is running in http://localhost:${PORT} on [${config.NODE_ENV}] environment`);
            checkConnection(); // Kiểm tra kết nối tới database (Check connection to database)
        });
    } catch (error) {
        logger.error(error);
    }
};

startServer();
