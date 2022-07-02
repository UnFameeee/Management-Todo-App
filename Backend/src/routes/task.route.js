const express = require('express');
const router = express.Router();

const { addTask, updateTaskOwner } = require('../controller/task.controller')

router.route('/create').post(addTask); //leader
router.route('/update/:id/user').put(updateTaskOwner)

module.exports = router;