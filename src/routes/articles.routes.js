//Path: server/src/routes/articles.routes.js
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articles.controller');

// Route to get all users
router.get('/articles', articleController.getAllArticles);

// Route to create a new article
router.post('/articles', articleController.createArticle);

// Route to update an article
router.put('/articles/:Id', articleController.updateArticle);

// Route to delete an article
router.delete('/articles/:Id', articleController.deleteArticle);

// Route to get an article by Id
router.get('/articles/:Id', articleController.getArticleById);

// Route to get an article by Category
router.get('/articles/category/:CategoryId', articleController.getArticleByCategory);

// Route to get an article by User
router.get('/articles/user/:UserId', articleController.getArticleByUser);

module.exports = router;
