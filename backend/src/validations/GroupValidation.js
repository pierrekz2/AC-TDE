const { body, validationResult } = require('express-validator');

const GroupValidationRules = () => {
    return [
        body('name').notEmpty(),

        body('minumumValue').notEmpty(),

        body('maximumValue').notEmpty()

    ]
}

module.exports = {
    GroupValidationRules,
}