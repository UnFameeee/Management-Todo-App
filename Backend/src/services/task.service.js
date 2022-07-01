const Task = require('../models').tasks;
const User = require('../models').users;

module.exports.addTask = async (taskData) => {
  let DataReturn = {};
  try{
    await Task.create(taskData).then((newTask) => {
      DataReturn = {
        status: 'success',
        message: 'Task created successfully',
        data: newTask
      }
    })
  }
  catch(err) {
    const ErrorList = err.errors;
    ErrorList.map(err => {
      const msg = err.message;
      DataReturn = {
        status: 'fail',
        message: msg.split('.')[1]
      }
    })
  }
  finally{
    return DataReturn;
  }
}

module.exports.updateOwner = async(userUpdate, taskData) => {
  let DataReturn = {};
  try {
    await Task.update({userId: userUpdate}, {
      where: {id: taskData}
    }).then(async () => {
      const updatedTask = await Task.findOne({
        where: {id: taskData},
        include: [{model: User, attributes:['id', 'username']}]
      });

      DataReturn = {
        status: 'success',
        message: 'Task updated successfully',
        data: updatedTask
      }
    })

  }
  catch (err){
    DataReturn = {
      status: 'fail',
      message: err.message
    }
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

      DataReturn = {
        status: 'success',
        message: 'Task updated successfully',
        data: updatedTask
      }
    })
  }
  catch (err){
    DataReturn = {
      status: 'fail',
      message: err.message
    }
  }
  finally {
    return DataReturn;
  }
}

module.exports.viewTask = async (taskId) => {
  let DataReturn = {};
  try{
    const task = await Task.findOne({where: {id: taskId}}, )
  }
  catch(err){
    DataReturn = {
      success: false,
      message: err.message
    }
  }
  finally {
    return DataReturn;
  }
}