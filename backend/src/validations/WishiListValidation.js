const { body, validationResult } = require('express-validator');

const WishiListValidationRules = () => {
    return [
        body('name').notEmpty().isLength({min: 6, max: 50}),

        body('description').notEmpty().isLength({max: 200}),

    ]
}

module.exports = {
    WishiListValidationRules,
}