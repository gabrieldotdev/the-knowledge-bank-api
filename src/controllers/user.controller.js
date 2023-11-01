const userServices = require('../services/user.service');

// GET: Get All Users (Controller)
const getAllUsers = async (req, res) => {
    try {
        const users = await userServices.getAllUsers();
        res.status(200).json({
            message: 'All users retrieved successfully',
            users,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// GET: Get an User by Id (Controller)
const getUserById = async (req, res) => {
    try {
        const Id = parseInt(req.params.Id);
        const user = await userServices.getUserById(Id);
        res.status(200).json({
            message: `User with Id ${Id} retrieved successfully`,
            user,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// POST: Create an User (Controller)
const createUser = async (req, res) => {
    try {
        const user = await userServices.createUser(req.body);
        res.status(201).json({
            message: 'User created successfully',
            user,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// PUT: Update an User (Controller)
const updateUser = async (req, res) => {
    try {
        const Id = parseInt(req.params.Id);
        const user = await userServices.updateUser(Id, req.body);
        res.status(200).json({
            message: `User with Id ${Id} updated successfully`,
            user,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// DELETE: Delete an User (Controller)
const deleteUser = async (req, res) => {
    try {
        const Id = parseInt(req.params.Id);
        const user = await userServices.deleteUser(Id);
        res.status(200).json({
            message: `User with Id ${Id} deleted successfully`,
            user,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
