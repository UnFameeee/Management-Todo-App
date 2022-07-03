const express = require('express');
const router = express.Router();

const { addTask, updateTaskOwner, updateData, viewTask } = require('../controller/task.controller')

router.route('/create').post(addTask);
router.route('/update/:id/user').put(updateTaskOwner);
router.route('/update/:id').put(updateData);
router.route('/view/:id').get(viewTask);

module.exports = router;