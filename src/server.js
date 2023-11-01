// Src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const config = require('../config');
const app = express();

const allowedOrigins = config.ALLOWED_ORIGINS ? config.ALLOWED_ORIGINS.split(',') : [];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

// Tùy chỉnh dựa trên NODE_ENV
if (config.NODE_ENV === 'development') {
    app.use(cors());
} else if (config.NODE_ENV === 'production') {
    app.use(cors(corsOptions));
}

// Cấu hình các middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
