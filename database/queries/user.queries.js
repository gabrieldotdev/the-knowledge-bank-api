const getAllUsers = 'SELECT * FROM auth.users ORDER BY Id ASC';
const getUserById = 'SELECT * FROM auth.users WHERE Id = $1';

const createUser = 'INSERT INTO auth.users (Username, Password, Email) VALUES ($1, $2, $3) RETURNING *';
const updateUser = 'UPDATE auth.users SET Username = $2, Password = $3, Email = $4 WHERE Id = $1 RETURNING *';
const deleteUser =
    'WITH deleted AS (DELETE FROM auth.users WHERE Id = $1 RETURNING *) DELETE FROM auth.user_roles WHERE userId = (SELECT Id FROM deleted) RETURNING *';

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
