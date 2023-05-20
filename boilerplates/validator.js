const { body, header, param, query } = require("express-validator");

const typedefs = require("../typedefs");

/**
 * Validator middleware function
 * 
 * Use the necessary part of the request, such as params for URL parameters, or query for query parameters.
 * 
 * Refer https://github.com/validatorjs/validator.js for a full list of the validators and sanitizers available.
 * 
 * @param {typedefs.Req} req 
 * @param {typedefs.Res} res 
 * @param {typedefs.Next} next 
 */
const __validator_func = async (req, res, next) => {
	await body("field_name")
		.notEmpty()
		.withMessage("field_name not defined in body")
		.run(req);

	next();
}

module.exports = {
	__validator_func,
}

