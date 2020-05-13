const { body, validationResult } = require('express-validator');

const UserValidationRules = () => {
    return [
        body('name').notEmpty(),

        body('email').notEmpty().isEmail(),

        body('password').notEmpty().isLength({min:8, max: 20})

    ]
}

module.exports = {
    UserValidationRules,
}