// Path: Validation for article
const Joi = require('joi');

const articleSchema = Joi.object({
    Title: Joi.string().min(3).max(30).required(),
    Description: Joi.string().min(3).max(30).required(),
    Content: Joi.string().min(8).max(30).required(),
});

const validateArticle = (article) => {
    return articleSchema.validate(article);
};

module.exports = {
    validateArticle,
};