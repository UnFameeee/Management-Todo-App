const express = require('express');
const router = express.Router();

const { addTask, updateTaskOwner, updateData, viewTask, getNewTasks } = require('../controller/task.controller')


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

//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: int
//  *         required: true
//  *         description: The task id

router.route('/create').post(addTask);
router.route('/update/:id/user').put(updateTaskOwner);
router.route('/update/:id').put(updateData);
router.route('/view/:id').get(viewTask);
router.route('/newTasks').get(getNewTasks);

module.exports = router;