const { logger } = require('../utils/logger.utils');

const errorHandlerMiddleware = (err, req, res, next) => {
    // Log lỗi (Log error)
    logger.error(err.stack);
    // Trả về lỗi (Return error)
    res.status(500).json({
        message: err.message,
        stack: err.stack,

    });
};

module.exports = errorHandlerMiddleware;
