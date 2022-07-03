const Task = require('../models/task.model');
const User = require('../models/user.model');
const TaskRepository = require("../repository/task.repository");
const dataResponse = require("../utils/dataResponse.utils");

module.exports.addTask = async (taskData) => {
  let DataReturn = {};
  try{
    await Task.create(taskData).then((newTask) => {
      DataReturn = dataResponse('success', 'Task created successfully', newTask);
    })
  }
  catch(err) {
    const ErrorList = err.errors;
    ErrorList.map(err => {
      const msg = err.message;
      DataReturn = dataResponse('fail', msg.split('.')[1])
    })
  }
  finally{
    return DataReturn;
  }
}

module.exports.updateOwner = async(userUpdate, taskData) => {
  let DataReturn = {};
  try {
    await TaskRepository.updateTaskOwner(userUpdate, taskData);
    const updatedTask = await Task.findOne({
      where: {id: taskData},
      include: [{model: User, attributes:['id', 'username']}]
    });
    DataReturn = dataResponse('success','Task updated successfully', updatedTask);

  }
  catch (err){
    DataReturn = dataResponse('fail', err.message)
  }
  finally{
    return DataReturn;
  }
}

module.exports.updateData = async (taskId, taskData) => {
  let DataReturn = {}

  try {
    await Task.update({
      title: taskData.title, 
      description: taskData.description,
      status: taskData.status,
      isArchived: taskData.isArchived
    }, {
      where: {id: taskId}
    }).then(async () => {
      const updatedTask = await Task.findOne({
        where: {id: taskId},
        include: [{model: User, attributes:['id', 'username']}]
      });

      DataReturn = dataResponse('success', 'Task updated successfully', updatedTask)
    })
  }
  catch (err){
    DataReturn = dataResponse('fail', err.message);
  }
  finally {
    return DataReturn;
  }
}

module.exports.viewTask = async (taskId) => {
  let DataReturn = {};
  try{
    const task = await TaskRepository.findTaskById(taskId);
    DataReturn = dataResponse('success', 'Data Response', task);
  }
  catch(err){
    DataReturn = dataResponse('fail', err.message);
  }
  finally {
    return DataReturn;
  }
}