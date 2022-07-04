const express = require('express')
const router = express.Router();
const { isAuthenticatedUser, authorizeUserRole } = require('../middleware/authenticate.middleware')

const { 
  register, 
  login, 
  updateUserInfo, 
  updatePassword, 
  viewUsersWithTask,
  getAllUser,
  getUserInfo,
  refreshTheToken
} = require('../controller/user.controller');



router.route('/register').post(register);
router.route('/login').post(login);
router.route('/update-info/:id').put(isAuthenticatedUser, updateUserInfo);
router.route('/:id/password/change').put(isAuthenticatedUser, updatePassword);
router.route('/viewTask').get(isAuthenticatedUser, viewUsersWithTask);
router.route('').get(isAuthenticatedUser, authorizeUserRole('leader'), getAllUser)
router.route('/:id').get(isAuthenticatedUser, getUserInfo)
router.route('/refreshToken').post(refreshTheToken);

module.exports = router;