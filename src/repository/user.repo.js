const baseRepository = require('./base/base.repository');
const { hashPassword } = require('../utils/auth.utils');
const queries = require('../../database/queries/user.queries');
const User = require('../models/user.model');

const getAllUsers = async () => {
    const Q = queries.getAllUsers;
    const result = await baseRepository.getAll(Q);
    return result;
};

const getUserById = async (Id) => {
    const Q = queries.getUserById;
    const user = new User({ id: Id });
    const filter = user.getCommonMethod().getUserById();
    const result = await baseRepository.getOneById(Q, filter);
    return result;
};

const createUser = async (user) => {
    const Q = queries.createUser;
    const users = new User(user);
    const urs = users.getCommonMethod().getUser();
    const hashedPassword = await hashPassword(urs.password);
    urs.password = hashedPassword;
    const result = await baseRepository.create(Q, urs);
    return result;
};

const updateUser = async (Id, user) => {
    const Q = queries.updateUser;
    const users = new User(user);
    const urs = users.getCommonMethod().getUser();
    const hashedPassword = await hashPassword(urs.password);
    urs.password = hashedPassword;
    const result = await baseRepository.update(Q, Id, urs);
    return result;
};

const deleteUser = async (Id) => {
    const Q = queries.deleteUser;
    const user = new User({ id: Id });
    const filter = user.getCommonMethod().getUserById();
    const result = await baseRepository.remove(Q, filter);
    return result;
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
