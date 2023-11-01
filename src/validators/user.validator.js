//Path: Validation for user
const Joi = require('joi');

const userSchema = Joi.object({
    Id: Joi.number().integer().min(1),
    Username: Joi.string().min(3).max(30).required(),
    Password: Joi.string().min(8).max(30).required(),
    Email: Joi.string().email().required(),
    PublishedOn: Joi.date().iso(),
    UpdatedOn: Joi.date().iso(),
});

const validateUser = (user) => {
    return userSchema.validate(user);
};

module.exports = {
    validateUser,
};