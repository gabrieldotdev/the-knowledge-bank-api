const baseRepository = require('./base/base.repository');
const queries = require('../../database/queries/article.queries');
const Article = require('../models/article.model');

const getAllArticles = async () => {
    const Q = queries.getAllArticles;
    const result = await baseRepository.getAll(Q);
    return result;
};

const getArticleById = async (Id) => {
    const Q = queries.getArticleById;
    const article = new Article({ id: Id });
    const filter = article.getCommonMethod().getArticleById();
    const result = await baseRepository.getOneById(Q, filter);
    return result;
};

const getArticleByCategoryId = async (CategoryId) => {
    const Q = queries.getArticleByCategoryId;
    const article = new Article({ categoryId: CategoryId });
    const filter = article.getCommonMethod().getArticleByCategoryId();
    const result = await baseRepository.getAllById(Q, filter);
    return result;
};

const getArticleByUserId = async (UserId) => {
    const Q = queries.getArticleByUserId;
    const article = new Article({ userId: UserId });
    const filter = article.getCommonMethod().getArticleByUserId();
    const result = await baseRepository.getAllById(Q, filter);
    return result;
};

const createArticle = async (article) => {
    const Q = queries.createArticle;
    const articles = new Article(article);
    const arts = articles.getCommonMethod().getArticle();
    const result = await baseRepository.create(Q, arts);
    return result;
};

const updateArticle = async (Id, article) => {
    const Q = queries.updateArticle;
    const articles = new Article(article);
    const arts = articles.getCommonMethod().getArticle();
    const result = await baseRepository.update(Q, Id, arts);
    return result;
};

const deleteArticle = async (Id) => {
    const Q = queries.deleteArticle;
    const article = new Article({ id: Id });
    const filter = article.getCommonMethod().getArticleById();
    const result = await baseRepository.remove(Q, filter);
    return result;
};

module.exports = {
    getAllArticles,
    getArticleById,
    getArticleByCategoryId,
    getArticleByUserId,
    createArticle,
    updateArticle,
    deleteArticle,
};
