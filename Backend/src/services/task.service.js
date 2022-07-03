const TaskRepository = require("../repository/task.repository");
const dataResponse = require("../utils/dataResponse.utils");

module.exports.addTask = async (taskData) => {
  let DataReturn = {};
  try{
    const newTask = await TaskRepository.createNewTask(taskData)
    DataReturn = dataResponse('success', 'Task created successfully', newTask);
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

module.exports.updateData = async (taskId, taskData) => {
  let DataReturn = {}
  try {
    await TaskRepository.updateTask(taskId, taskData)
    const updatedTask = await TaskRepository.findTaskAndUserInfoByTaskId(taskId);
    DataReturn = dataResponse('success', 'Task updated successfully', updatedTask)
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

module.exports.updateOwner = async(taskId, data) => {
  let DataReturn = {};  
  try {
    await TaskRepository.updateTaskOwner(data.userId, taskId);
    const updatedTask = await TaskRepository.findTaskAndUserInfoByTaskId(taskId);
    DataReturn = dataResponse('success','Task updated successfully', updatedTask);
  }
  catch (err){
    DataReturn = dataResponse('fail', err.message)
  }
  finally{
    return DataReturn;
  }
}

// module.exports.archivedTask = async (taskId) => {
//   let DataReturn = {};
//   try{
//     const task = await TaskRepository.archivedTaskById(taskId);
//     DataReturn = dataResponse('success', 'Data Response', task);
//   }
//   catch(err){
//     DataReturn = dataResponse('fail', err.message);
//   }
//   return DataReturn;
// }