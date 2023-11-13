//Path: server/src/services/articles.service.js
const userRepository = require('../repository/article.repo');

const getAllArticles = async () => {
    const result = await userRepository.getAllArticles();
    return result;
};

const getArticleById = async (Id) => {
    const result = await userRepository.getArticleById(Id);
    return result;
};

const getArticleByCategoryId = async (CategoryId) => {
    const result = await userRepository.getArticleByCategoryId(CategoryId);
    return result;
};

const getArticleByUserId = async (UserId) => {
    const result = await userRepository.getArticleByUserId(UserId);
    return result;
};

const createArticle = async (article) => {
    const result = await userRepository.createArticle(article);
    return result;
};

const updateArticle = async (Id, article) => {
    const result = await userRepository.updateArticle(Id, article);
    return result;
};

const deleteArticle = async (Id) => {
    const result = await userRepository.deleteArticle(Id);
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
