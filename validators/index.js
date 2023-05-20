const { validationResult } = require("express-validator");

const typedefs = require("../typedefs");
const { getNestedValuesString } = require("../utils/jsonTransformer");

/**
 * Refer: https://stackoverflow.com/questions/58848625/access-messages-in-express-validator
 * 
 * @param {typedefs.Req} req 
 * @param {typedefs.Res} res 
 * @param {typedefs.Next} next 
 */
const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}

	const extractedErrors = []
	errors.array().forEach(err => {
		if (err.type === 'alternative') {
			err.nestedErrors.forEach(nestedErr => {
				extractedErrors.push({
					[nestedErr.path]: nestedErr.msg
				});
			});
		} else if (err.type === 'field') {
			extractedErrors.push({
				[err.path]: err.msg
			});
		}
	});

	return res.status(400).send({
		message: getNestedValuesString(extractedErrors),
		errors: extractedErrors
	})
}

module.exports = {
	validate,
}