const typedefs = require("../typedefs");
const logger = require("../utils/logger")(module);

const creds = JSON.parse(process.env.ADMIN_CREDS);

/**
 * Middleware to validate admin access
 * @param {typedefs.Req} req 
 * @param {typedefs.Res} res 
 * @param {typedefs.Next} next 
 */
const adminQueryCreds = async (req, res, next) => {
	try {
		/** @type {JSON} */
		const { user, access } = req.query;
		if (creds[user] === access) {
			logger.info("Admin access - " + user);
			next();
		}
		else {
			// we do a bit of trolling here
			const unauthIP = req.headers['x-real-ip'] || req.ip
			logger.warn("Intruder alert.", { ip: unauthIP });
			return res.status(401).send("Intruder alert. IP address: " + unauthIP);
		}
	} catch (error) {
		logger.error("adminQueryCreds", { error });
		return res.status(500).send({ message: "Server Error. Try again." });
	}
}

module.exports = {
	adminQueryCreds,
}