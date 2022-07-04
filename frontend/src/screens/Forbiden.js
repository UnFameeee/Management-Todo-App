import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks, updateTask, updateTaskUserOwner } from "../redux/apiRequest";

function Forbiden() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  console.log(currentUser.token);
  const getAllTask = () => {
    getAllTasks(currentUser.token, 2, dispatch);
  };
  const updatetask = () => {
    const updateTaskInfo = {
      title: "testlmao",
      description: "test data lmao",
      status: "Done",
      isArchived: "1",
    };
    updateTask(currentUser.token, updateTaskInfo, 1, dispatch);
  };
  const updateuserowner = () => {
    const userId = {
      userId:'3'
    };
    updateTaskUserOwner(currentUser.token,userId,1,dispatch)
  };
  return (
    <div>
      <button onClick={getAllTask}>Test get all task</button>
      <button onClick={updatetask}>Test update task</button>
      <button onClick={updateuserowner}>Test update user owner </button>
      <h2>WE'RE SORRY, YOUR REQUEST IS UNAUTHORIZED</h2>
      <a href="/login">Return to Login</a>
    </div>
  );
}

export default Forbiden;
