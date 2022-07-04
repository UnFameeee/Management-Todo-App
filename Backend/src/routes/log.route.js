const express = require("express");
const router = express.Router();

const { showAllLog } = require("../controller/log.controller");

const { isAuthenticatedUser, authorizeUserRole } = require('../middleware/authenticate.middleware');

router.route('/show').get(isAuthenticatedUser, authorizeUserRole('leader'), showAllLog);

module.exports = router;