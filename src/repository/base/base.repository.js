const { getPool } = require('../../../database/connection.db');

// Get All
const getAll = async (Q) => {
    const pool = await getPool();
    const result = await pool.query(Q);
    return result.rows;
};

// Get One By Id
const getOneById = async (Q, id) => {
    const pool = await getPool();
    const values = Object.values(id);
    const result = await pool.query(Q, values);
    return result.rows[0];
};

// Get all By Id
const getAllById = async (Q, id) => {
    const pool = await getPool();
    const values = Object.values(id);
    const result = await pool.query(Q, values);
    return result.rows;
};

// Post Create(Q, model)
const create = async (Q, model) => {
    const pool = await getPool();
    const values = Object.values(model);
    const result = await pool.query(Q, values);
    return result.rows[0];
};

// Put Update
const update = async (Q, id, model) => {
    const pool = await getPool();
    const values = [id, ...Object.values(model)];
    const result = await pool.query(Q, values);
    return result.rows[0];
};

// Delete
const remove = async (Q, id) => {
    const pool = await getPool();
    const values = Object.values(id);
    const result = await pool.query(Q, values);
    return result.rows[0];
};

module.exports = {
    getAll,
    getOneById,
    getAllById,
    create,
    update,
    remove,
};
