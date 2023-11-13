const userRepository = require('../repository/user.repo');

const getAllUsers = async () => {
    const result = await userRepository.getAllUsers();
    return result;
};

const getUserById = async (Id) => {
    const result = await userRepository.getUserById(Id);
    return result;
};

const createUser = async (user) => {
    const result = await userRepository.createUser(user);
    return result;
};

const updateUser = async (Id, user) => {
    const result = await userRepository.updateUser(Id, user);
    return result;
};

const deleteUser = async (Id) => {
    const result = await userRepository.deleteUser(Id);
    return result;
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};

// const { getPool } = require('../../database/connection.db');
// const User = require('../models/user.model');
// const queries = require('../../database/queries/user.queries');
// const { hashPassword } = require('../utils/auth.utils');
// const { validateUser } = require('../validators/user.validator');

// // GET: Get All Users (Service)
// const getAllUsers = async () => {
//     const pool = await getPool();
//     const query = queries.getAllUsers;
//     const result = await pool.query(query);
//     return result.rows;
// };

// // GET: Get an User by Id (Id)
// const getUserById = async (Id) => {
//     const pool = await getPool();
//     const query = queries.getUserById;
//     const result = await pool.query(query, [Id]);
//     return result.rows[0];
// };

// // POST: Create an User (Service)
// const createUser = async (user) => {
//     const pool = await getPool();
//     const users = new User(user);
//     const query = queries.createUser;
//     const hashedPassword = await hashPassword(users.Password);
//     const result = await pool.query(query, [users.Username, hashedPassword, users.Email]);
//     return result.rows[0];
// };

// // PUT: Update an User (Service)
// const updateUser = async (Id, user) => {
//     const pool = await getPool();
//     const users = new User(user);
//     const query = queries.updateUser;
//     const hashedPassword = await hashPassword(users.Password);
//     const result = await pool.query(query, [Id, users.Username, hashedPassword, users.Email]);
//     return result.rows[0];
// };

// // DELETE: Delete an User (Service)
// const deleteUser = async (Id) => {
//     const pool = await getPool();
//     const query = queries.deleteUser;
//     const result = await pool.query(query, [Id]);
//     return result.rows[0];
// };
