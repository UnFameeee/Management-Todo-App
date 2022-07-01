const TaskService = require('../services/task.service');

module.exports.addTask = async(req, res) => {
  const dataCreate = req.body;
  res.json(await TaskService.addTask(dataCreate));
}

module.exports.updateTaskOwner = async(req, res) => {
  const taskUpdate = parseInt(req.params.id);
  const { userUpdate } = req.body;
  res.json(await TaskService.updateOwner(userUpdate, taskUpdate));
}

module.exports.updateData = async(req, res) => {
  const taskId = parseInt(req.params.id);
  const { taskData } = req.body;
  res.json(await TaskService.updateData(taskId, taskData));
}

module.exports.viewTask = async(req, res) => {
  const taskId = parseInt(req.params.id);
  res.json(await TaskService.viewTask(taskId));
}