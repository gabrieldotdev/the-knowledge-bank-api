const config = require('../../config');

// Middleware kiểm tra cors (Cross-Origin Resource Sharing)
const corsOptionsMiddleware = (req, res, next) => {
    // Lấy danh sách các origin được phép truy cập (Get list of allowed origins)
    const allowedOrigins = config.ALLOWED_ORIGINS ? config.ALLOWED_ORIGINS.split(',') : [];

    // Lấy origin từ header (Get origin from header)
    const origin = req.headers.origin;

    // Kiểm tra xem origin có nằm trong danh sách các origin được phép hay không (Check if origin is in the list of allowed origins)
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }

    // Cấu hình các method và header được phép sử dụng (Configure allowed methods and headers)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, X-Api-Key');

    next();
};

module.exports = corsOptionsMiddleware;


// const allowedOrigins = config.ALLOWED_ORIGINS ? config.ALLOWED_ORIGINS.split(',') : [];

// const corsOptions = {
//     origin: function (origin, callback) {
//         if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
// };