const typedefs = require("../typedefs");
const logger = require("../utils/logger")(module);

/**
 * Business logic to go in these controller functions.
 * Everything should be contained inside try-catch blocks
 * 
 * @param {typedefs.Req} req Express request object
 * @param {typedefs.Res} res Express response object
 */
const __controller_func = async (req, res) => {
	try {

	} catch (error) {
		logger.error("__controller_func", { error });
		return res.status(500).send({ message: "Server Error. Try again." });
	}
}

module.exports = {
	__controller_func
};