//Path: server/src/routes/articles.routes.js
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articles.controller');

// Route to get all users
router.get('/', articleController.getAllArticles);

// Route to create a new article
router.post('/', articleController.createArticle);

// Route to update an article
router.put('/:Id', articleController.updateArticle);

// Route to delete an article
router.delete('/:Id', articleController.deleteArticle);

// Route to get an article by Id
router.get('/:Id', articleController.getArticleById);

// Route to get an article by Category
router.get('/category/:CategoryId', articleController.getArticleByCategory);

// Route to get an article by User
router.get('/user/:UserId', articleController.getArticleByUser);

module.exports = router;
