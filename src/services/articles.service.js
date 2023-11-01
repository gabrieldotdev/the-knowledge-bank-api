//Path: server/src/services/articles.service.js
const { getPool } = require('../../database/connection.db');
const Article = require('../models/article.model');
const queries = require('../../database/queries/article.queries');

// GET: Get All Articles (Service)
const getAllArticles = async () => {
    const pool = await getPool();
    const query = queries.getAllArticles;
    const result = await pool.query(query);
    return result.rows;
};

// GET: Get an Article by Id (Id)
const getArticleById = async (Id) => {
    const pool = await getPool();
    const query = queries.getArticleById;
    const result = await pool.query(query, [Id]);
    return result.rows[0];
};

// GET: Get an Article by Id (Category)
const getArticleByCategory = async (CategoryId) => {
    const pool = await getPool();
    const query = queries.getArticleByCategory;
    const result = await pool.query(query, [CategoryId]);
    return result.rows;
};

// Get: Get an Article by Id (User)
const getArticleByUser = async (UserId) => {
    const pool = await getPool();
    const query = queries.getArticleByUser;
    const result = await pool.query(query, [UserId]);
    return result.rows;
};

// POST: Create an Article (Service)
const createArticle = async (article) => {
    const pool = await getPool();
    const articles = new Article(article);
    const query = queries.createArticle;
    const result = await pool.query(query, [
        articles.Title,
        articles.Description,
        articles.Content,
        articles.CategoryId,
        articles.UserId,
    ]);
    return result.rows[0];
};

// PUT: Update an Article (Service)
const updateArticle = async (Id, article) => {
    const pool = await getPool();
    const articles = new Article(article);
    const query = queries.updateArticle;
    const result = await pool.query(query, [
        Id,
        articles.Title,
        articles.Description,
        articles.Content,
        articles.CategoryId,
        articles.UserId,
    ]);
    return result.rows[0];
};

// DELETE: Delete an Article (Service)
const deleteArticle = async (Id) => {
    const pool = await getPool();
    const query = queries.deleteArticle;
    const result = await pool.query(query, [Id]);
    return result.rows[0];
};

module.exports = {
    getAllArticles,
    getArticleById,
    getArticleByCategory,
    getArticleByUser,
    createArticle,
    updateArticle,
    deleteArticle,
};
