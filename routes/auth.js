const router = require("express").Router();
const {login } = require("../controllers/auth/login");
const {register, confirm, forgotPassword, resetpass } = require("../controllers/auth/register");

router.post(
	'/login',
    login
);

router.post(
	'/register',
    register
);

router.post(
	'/confirm/:id',
    confirm
);

router.get(
	'/confirm/:id',
    confirm
);

router.post(
    '/forgotpass',
    forgotPassword
)

router.use(
    '/resetpass/:id',
    resetpass
)
module.exports = router;