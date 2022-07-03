const Task = require('../models/task.model');
const User = require('../models/user.model');
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

TaskRepository.findTaskAndUserInfoByTaskId = async (taskData) => {
    return await Task.findOne({
        where: {id: taskData},
        include: [{model: User, attributes:['id', 'username']}]
    });
}

TaskRepository.updateTask = async (taskId, taskData) => {
    await Task.update({
        title: taskData.title, 
        description: taskData.description,
        status: taskData.status,
        isArchived: taskData.isArchived
    }, {
        where: {id: taskId}
    })
}

module.exports = TaskRepository;