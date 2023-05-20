const pathLib = require("path");
const qr = require("qrcode");
const logger = require("./logger")(module);
const { getSignedJWT } = require("./token");

/**
 * Generates QR code from data and writes to file in tmp folder.
 * To avoid race conditions, use email or other unique attributes for id.
 * @param {string|any} data String or JSON object
 */
const qrPNGFile = (id, data) => {
	qr.toFile(
		path = pathLib.join(__dirname, "../tmp/tmpQR-" + id + ".png"),
		text = (typeof data === "object" ? JSON.stringify(data) : data),
		options = { type: 'png' },
		(err) => {
			if (err) {
				logger.error("qrPNGFile", err);
				throw err;
			}
		}
	);
}

/**
 * Generates QR code from data after signing and writes to file in tmp or k-qrs folder.
 * 
 * To avoid race conditions, use email or other unique attributes for ID.
 * @param {string|any} data String or JSON object
 */
const qrSignedPNGFile = (id, data, tmp = true) => {
	const signedData = getSignedJWT(data);
	const qrFilename = `${tmp ? 'tmpEncQR' : 'K-QR'}-${id}.png`;
	const targetPath = pathLib.join(
		__dirname, "..",
		tmp ? "tmp" : pathLib.join("uploads", "2023", "k-qrs"),
		qrFilename,
	);

	qr.toFile(
		path = targetPath,
		text = (typeof data === "object" ? JSON.stringify(signedData) : signedData),
		options = { type: 'png' },
		(err) => {
			if (err) {
				logger.error("qrSignedPNGFile", err);
				throw err;
			}
		}
	)

	return qrFilename;
}

module.exports = {
	qrPNGFile,
	qrSignedPNGFile,
}