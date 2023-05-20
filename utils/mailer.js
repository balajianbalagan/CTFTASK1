const mailer = require("nodemailer");
const logger = require("./logger")(module);

// Creates a mailer transporter object with authentication and base config
const transport = mailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	service: "gmail",
	auth: {
		user: process.env.AUTOMAILER_ID,
		pass: process.env.AUTOMAILER_APP_PASSWD,
	}
});

/**
 * Sends a mail from web user to a mail inside organization
 * @param {string} mailTarget Target mail - must be within organization
 * @param {string} mailSubject Mail subject
 * @param {{name: string, email: string, message: string}} userData User details: name, email, and message
 */
const inboundMailer = (mailTarget, mailSubject, userData) => {
	if (!mailTarget.endsWith("cegtechforum.in")) {
		throw new Error("Invalid target mail domain.");
	}

	const message = {
		to: mailTarget,
		subject: mailSubject,
		html:
			"<p>Name: " + userData.name + "</p><p>Email: " + userData.email + "</p><br/><p>Message:<br/>" + userData.message + "</p>"
	};

	transport.sendMail(message, (err, info) => {
		if (err) {
			logger.error("Failure: QUERY mail NOT sent", { err, userData });
		} else {
			logger.info("Success: QUERY mail sent", { info });
		}
	});
};

module.exports = {
	inboundMailer
}
