const getAllArticles = 'SELECT * FROM theknowledgebank.articles ORDER BY Id ASC';
const getArticleById = 'SELECT * FROM theknowledgebank.articles WHERE Id = $1';
const getArticleByCategory = 'SELECT * FROM theknowledgebank.articles WHERE CategoryId = $1';
const getArticleByUser = 'SELECT * FROM theknowledgebank.articles WHERE UserId = $1';
const getArticleByCategoryAndUser = 'SELECT * FROM theknowledgebank.articles WHERE CategoryId = $1 AND UserId = $2';

const createArticle = 'INSERT INTO theknowledgebank.articles (Title, Description, Content, CategoryId, UserId) VALUES ($1, $2, $3, $4, $5) RETURNING *';
const updateArticle = 'UPDATE theknowledgebank.articles SET Title = $2, Description = $3, Content = $4, CategoryId = $5, UserId = $6 WHERE Id = $1 RETURNING *';
const deleteArticle = 'DELETE FROM theknowledgebank.articles WHERE Id = $1 RETURNING *';

module.exports = {
    getAllArticles,
    getArticleById,
    getArticleByCategory,
    getArticleByUser,
    getArticleByCategoryAndUser,
    createArticle,
    updateArticle,
    deleteArticle,
};