const TaskService = require('../services/task.service');

module.exports.addTask = async(req, res) => {
  const dataCreate = req.body;
  const dataReturn = await TaskService.addTask(dataCreate);
  res.status(dataReturn.statusCode).json(dataReturn.data);
}

module.exports.updateTaskOwner = async(req, res) => {
  const taskId = parseInt(req.params.id);
  const taskData = req.body;
  const dataReturn = await TaskService.updateOwner(taskId, taskData);
  res.status(dataReturn.statusCode).json(dataReturn.data);
}

module.exports.updateData = async(req, res) => {
  const taskId = parseInt(req.params.id);
  const taskData = req.body;
  const dataReturn = await TaskService.updateData(taskId, taskData)
  res.status(dataReturn.statusCode).json(dataReturn.data);
}

module.exports.viewTask = async(req, res) => {
  const taskId = parseInt(req.params.id);
  const dataReturn = await TaskService.viewTask(taskId)
  res.status(dataReturn.statusCode).json(dataReturn.data);
}

module.exports.getNewTasks = async(req, res) => {
  const dataReturn = await TaskService.getNewTasks();
  res.status(dataReturn.statusCode).json(dataReturn.data);
}