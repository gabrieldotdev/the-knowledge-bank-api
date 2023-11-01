//Path: server/src/controllers/articles.controller.js
const articleService = require('../services/articles.service');

// GET: Get All Articles (Controller)
const getAllArticles = async (req, res) => {
    try {
        const articles = await articleService.getAllArticles();
        res.status(200).json({
            message: 'All articles retrieved successfully',
            articles,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// GET: Get an Article by Id (Controller)
const getArticleById = async (req, res) => {
    try {
        const Id = parseInt(req.params.Id);
        const article = await articleService.getArticleById(Id);
        res.status(200).json({
            message: `Article with Id ${Id} retrieved successfully`,
            article,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// GET: Get an Article by Id (Category)
const getArticleByCategory = async (req, res) => {
    try {
        const Id = parseInt(req.params.CategoryId);
        const article = await articleService.getArticleByCategory(Id);
        res.status(200).json({
            message: `Article with Id ${Id} retrieved successfully`,
            article,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// GET: Get an Article by Id (User)
const getArticleByUser = async (req, res) => {
    try {
        const Id = parseInt(req.params.UserId);
        const article = await articleService.getArticleByUser(Id);
        res.status(200).json({
            message: `Article with Id ${Id} retrieved successfully`,
            article,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// POST: Create an Article (Controller)
const createArticle = async (req, res) => {
    try {
        const article = await articleService.createArticle(req.body);
        res.status(201).json({
            message: 'Article created successfully',
            article,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// PUT: Update an Article (Controller)
const updateArticle = async (req, res) => {
    try {
        const Id = parseInt(req.params.Id);
        const article = await articleService.updateArticle(Id, req.body);
        res.status(200).json({
            message: `Article with Id ${Id} updated successfully`,
            article,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// DELETE: Delete an Article (Controller)
const deleteArticle = async (req, res) => {
    try {
        const Id = parseInt(req.params.Id);
        const article = await articleService.deleteArticle(Id);
        res.status(200).json({
            message: `Article with Id ${Id} deleted successfully`,
            article,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
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
