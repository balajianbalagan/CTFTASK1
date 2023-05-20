const router = require("express").Router();

const { validate } = require("../validators");
const { __controller_func } = require("./controller");

router.get(
	// URL,
	// middleware,
	// validators,
	// validate,
	// __controller_func
);

router.post(
	//similar
);

module.exports = router;
