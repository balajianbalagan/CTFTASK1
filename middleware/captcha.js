const fetch = require("cross-fetch");

const typedefs = require("../typedefs");
const logger = require("../utils/logger")(module);

/**
 * Google ReCAPTCHA v2 verification
 * 
 * @param {typedefs.Req} req 
 * @param {typedefs.Res} res 
 * @param {typedefs.Next} next 
 */
const verifyCaptcha = async (req, res, next) => {
	try {
		const secretKey = process.env.CAPTCHA_SECRET;

		const verifyCaptchaURL = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;

		const captchaResp = await fetch(verifyCaptchaURL);
		const captchaData = await captchaResp.json();
		if (captchaData.success !== undefined && !captchaData.success) {
			logger.error("Recaptcha", { captchaData });
			return res.status(403).send({
				message: "Failed captcha verification"
			});
		}
		next();
	} catch (error) {
		logger.error("Error", { error });
		return res.status(500).send({ message: "Server Error. Try again." });
	}
}

module.exports = {
	verifyCaptcha
}