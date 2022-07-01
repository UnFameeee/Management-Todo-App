const express = require('express')
const router = express.Router();

const { register, login, updateUserInfo, updatePassword } = require('../controller/user.controller');

router.route('/register').post(register);
router.route('/user/update-info/:id').put(updateUserInfo);
router.route('/user/:id/password/change').put(updatePassword);

module.exports = router;