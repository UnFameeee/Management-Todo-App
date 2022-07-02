const Task = require('../models/task.model');
const TaskRepository = {};

TaskRepository.createNewTask = async (taskData) => {
    return await Task.create(taskData);
}

TaskRepository.findTaskById = async (taskId) => {
    return await Task.findOne({where: {id: taskId}});
}

TaskRepository.updateTaskOwner = async (userId, taskId) => {
    await Task.update(
        { userId: userId }, 
        { where: {id: taskId} }
    )
}

module.exports = TaskRepository;