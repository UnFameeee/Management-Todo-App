const express = require('express')
const router = express.Router();

const { 
  register, 
  login, 
  updateUserInfo, 
  updatePassword, 
  viewUsersWithTask,
  getAllUser
} = require('../controller/user.controller');



router.route('/register').post(register);
router.route('/login').post(login);
router.route('/update-info/:id').put(updateUserInfo);
router.route('/:id/password/change').put(updatePassword);
router.route('/viewTask').get(viewUsersWithTask);
router.route('').get(getAllUser)

module.exports = router;