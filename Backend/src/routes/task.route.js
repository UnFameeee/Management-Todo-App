const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");

const { addTask, updateTaskOwner, updateData, viewTask, getNewTasks } = require('../controller/task.controller')
const { isAuthenticatedUser, authorizeUserRole } = require('../middleware/authenticate.middleware')

/**
 * @swagger
 * /task/create:
 *   get:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - title
 *              - description
 *            properties:
 *              title:
 *                type: string
 *              description:
 *                type: string
 *     responses:
 *       200:
 *         description: Create a new task
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 */

router
  .route("/create")
  .post(addTask);


router
  .route("/update/:id/user", [
    param("id")
      .matches(/^[0-9]+$/)
      .withMessage("Id does not exist"),
  ])
  .put(isAuthenticatedUser, authorizeUserRole('leader'), updateTaskOwner);
router.route('/create').post(isAuthenticatedUser, authorizeUserRole('leader'), addTask);
router.route('/update/:id').put(isAuthenticatedUser, updateData);
router.route('/view/:id').get(isAuthenticatedUser, viewTask);
router.route('/newTasks').get(isAuthenticatedUser, authorizeUserRole('leader'), getNewTasks);

module.exports = router;
