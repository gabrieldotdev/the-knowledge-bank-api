const config = require('../../config');

// Middleware kiểm tra API Key
const apiKeyMiddleware = (req, res, next) => {
    // Lấy API Key được cung cấp trong header (Get API Key from header)
    const providedApiKey = req.header('X-Api-Key');
    console.log(providedApiKey);

    // Kiểm tra xem API Key có được cung cấp hay không (Check if API Key is provided)
    if (!providedApiKey) {
        return res.status(401).json({ message: 'API Key is required to access this endpoint.', status: 401 });
    }

    // Kiểm tra xem API Key có hợp lệ hay không (Check if API Key is valid)
    if (config.API_KEY.includes(providedApiKey)) {
        next();
    } else {
        res.status(403).json({ message: 'Invalid API Key', status: 403 }); // 403 Forbidden
    }
};

module.exports = apiKeyMiddleware;

// server.get('/api/v1/users', apiKeyMiddleware, (req, res) => {
//     // Thực hiện logic để liệt kê dữ liệu ở đây
//     res.json({ message: 'Listing data here.' });
// });
