const bcrypt = require('bcryptjs');
const saltRounds = 10; // Tạo ra chuỗi ngẫu nhiên mã hóa password.

const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
};

module.exports = {
    hashPassword,
    comparePassword,
};
