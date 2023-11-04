//Path: Validation for user
const Joi = require('joi');

const validator = (schema) => (payload) => {
    schema.validatorOptions(payload, { abortEarly: false });
};

const signUpSchema = Joi.object({
    Id: Joi.number().integer().min(1),
    Username: Joi.string().min(4).max(30).required(),
    Password: Joi.string().min(8).max(30).required(),
    PasswordConfirm: Joi.ref('Password'),
    Email: Joi.string().email().required(),
    PublishedOn: Joi.date().iso(),
    UpdatedOn: Joi.date().iso(),
});

const signInSchema = Joi.object({
    Username: Joi.string().min(4).max(30).required(),
    Password: Joi.string().min(8).max(30).required(),
});

module.exports = {
    signUpValidator: validator(signUpSchema),
    signInValidator: validator(signInSchema),
};