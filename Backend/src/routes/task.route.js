const express = require("express");
const router = express.Router();
const { param } = require("express-validator");
const { handleValidation } = require("../middleware/validation.middleware")

const { addTask, updateTaskOwner, updateData, viewTask, getNewTasks } = require('../controller/task.controller')
const { isAuthenticatedUser, authorizeUserRole } = require('../middleware/authenticate.middleware')

router.route('/create').post(isAuthenticatedUser, authorizeUserRole('leader'), addTask);

router.route("/update/:id/user").put([
  param("id")
    .matches(/^[0-9]+$/)
    .withMessage("Id does not exist"),
], handleValidation, isAuthenticatedUser, authorizeUserRole('leader'), updateTaskOwner);

router.route('/update/:id').put([
  param("id")
    .matches(/^[0-9]+$/)
    .withMessage("Id does not exist"),
], handleValidation, isAuthenticatedUser, updateData);

router.route('/view/:id').get([
  param("id")
    .matches(/^[0-9]+$/)
    .withMessage("Id does not exist"),
], handleValidation, isAuthenticatedUser, viewTask);

router.route('/newTasks').get(isAuthenticatedUser, authorizeUserRole('leader'), getNewTasks);

module.exports = router;