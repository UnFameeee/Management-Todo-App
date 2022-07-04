const TaskRepository = require("../repository/task.repository");
const UserRepository = require("../repository/user.repository");
const dataResponse = require("../utils/dataResponse.utils");
const ErrorResponse = require("../utils/errorResponse.utils");

module.exports.addTask = async (taskData) => {
  let DataReturn = {};
  try{
    const newTask = await TaskRepository.createNewTask(taskData)
    DataReturn = dataResponse(201, 'success', 'Task created successfully', newTask);
  }
  catch(err) {
    const ErrorList = err.errors;
    ErrorList.map(err => {
      const msg = err.message;
      DataReturn = dataResponse(400, 'fail', msg.split('.')[1])
    })
  }
  finally{
    return DataReturn;
  }
}

module.exports.updateData = async (taskId, taskData) => {
  let DataReturn = {}
  try {
    const task = await TaskRepository.findTaskById(taskId);
    if(!task) throw new Error("Task does not exist")
    await TaskRepository.updateTask(taskId, taskData)
    const updatedTask = await TaskRepository.findTaskAndUserInfoByTaskId(taskId);
    DataReturn = dataResponse(201, 'success', 'Task updated successfully', updatedTask)
  }
  catch (err){
    DataReturn = dataResponse(400, 'fail', err.message);
  }
  finally {
    return DataReturn;
  }
}

module.exports.viewTask = async (taskId) => {
  let DataReturn = {};
  try{
    const task = await TaskRepository.findTaskById(taskId);
    if(!task) throw new Error("Task does not exist")
    DataReturn = dataResponse(200, 'success', 'Data Response', task);
  }
  catch(err){
    DataReturn = dataResponse(400, 'fail', err.message);
  }
  finally {
    return DataReturn;
  }
}

module.exports.updateOwner = async(taskId, data) => {
  let DataReturn = {};  
  try {
    const task = await TaskRepository.findTaskById(taskId);
    if(!task) throw new Error("Task does not exist")
    const user = await UserRepository.findUserById(data.userId);
    if(!user) throw new Error("User does not exist");

    await TaskRepository.updateTaskOwner(data.userId, taskId);
    const updatedTask = await TaskRepository.findTaskAndUserInfoByTaskId(taskId);
    DataReturn = dataResponse("200", 'success','Task updated successfully', updatedTask);
  }
  catch (err){
    DataReturn = dataResponse(400, 'fail', err.message)
  }
  finally{
    return DataReturn;
  }
}

module.exports.getNewTasks = async() => {
  let DataReturn = {};
  const data  = await TaskRepository.getNewTasks();
  DataReturn = dataResponse(200, 'success', 'Get success', data);
  return DataReturn;
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