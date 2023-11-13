const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const config = require('../config');
const corsOptionsMiddleware = require('./middleware/cors.middleware');

// Tạo một Express app (Create an Express app)
const app = express();

// Middleware CORS dựa trên môi trường
if (config.NODE_ENV === 'development') {
    // CORS cho môi trường development (CORS for development environment)
    app.use(cors());
} else if (config.NODE_ENV === 'production') {
    // CORS cho môi trường production (CORS for production environment)
    app.use(cors(corsOptionsMiddleware));
}

// Cấu hình các middleware cho Express app (Configure middlewares for the Express app)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
