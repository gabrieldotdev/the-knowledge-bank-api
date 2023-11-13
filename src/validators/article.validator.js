// Path: Validation for article
const Joi = require('joi');

const validator = (schema) => (payload) => {
    schema.validatorOptions(payload, { abortEarly: false });
}

const articleSchema = Joi.object({
    Id: Joi.number().integer().min(1),
    Title: Joi.string().min(3).max(30).required(),
    Description: Joi.string(),
    Content: Joi.string().min(8).max(30).required(),
    PublishedOn: Joi.date().iso(),
    UpdatedOn: Joi.date().iso(),
});

module.exports = {
    articleValidator: validator(articleSchema),
};