const jwt = require('jsonwebtoken');
const { logger } = require('../utils/logger.utils');
const config = require('../../config');

// JWT: Generate a JWT Token
const generateToken = (payload) => {
    const token = jwt.sign(payload, config.JWT_SECRET, {
        expiresIn: '1d',
    });
    return token;
};

// JWT: Verify a JWT Token
const verifyToken = (token) => {
    const payload = jwt.verify(token, config.JWT_SECRET);
    return payload;
};

// JWT: Decode a JWT Token
const decodeToken = (token) => {
    const payload = jwt.decode(token);
    return payload;
};

// JWT: Get a JWT Token from the Authorization Header
const getTokenFromHeader = (req) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        logger.error('No Authorization Header');
        return null;
    }
    const token = authorization.split(' ')[1];
    return token;
};

module.exports = {
    generateToken,
    verifyToken,
    decodeToken,
    getTokenFromHeader,
};