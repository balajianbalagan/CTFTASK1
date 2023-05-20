const typedefs = require("../typedefs");

const fastCSV = require("fast-csv");
const stream = require("stream");

/**
 * Sends object data from Sequelize after formatting into CSV
 * 
 * @param {typedefs.Res} res Express response object
 * @param {string} filename Filename for attachment. Prefer timestamped names
 * @param {any[]} data Data from database queries, without metadata
 * @returns 
 */
const sendCSV = async (res, filename, data) => {
	const csvData = await fastCSV.writeToBuffer(data, { headers: true });

	// refer https://stackoverflow.com/a/45922316/
	const fileStream = new stream.PassThrough();
	fileStream.end(csvData);

	res.attachment(filename + ".csv");
	res.type("text/csv");

	fileStream.pipe(res);
	return;
}

module.exports = {
	sendCSV,
}