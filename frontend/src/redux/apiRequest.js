import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logOutFailed,
  logOutStart,
  logOutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authSlice";
import { apiUrl } from "../common/constant";
import {
  adminAddTaskFailed,
  adminAddTaskStart,
  adminAddTaskSuccess,
  getAllTasksAssingedFailed,
  getAllTasksAssingedStart,
  getAllTasksAssingedSuccess,
  getAllTasksNotAssingedFailed,
  getAllTasksNotAssingedStart,
  getAllTasksNotAssingedSuccess,
  getTaskInfoFailed,
  getTaskInfoStart,
  getTaskInfoSuccess,
  getTaskLogsFailed,
  getTaskLogsStart,
  getTaskLogsSuccess,
  getTasksFailed,
  getTasksStart,
  getTasksSuccess,
  updateTaskFailed,
  updateTaskStart,
  updateTaskSuccess,
  updateTaskUserOwnerFailed,
  updateTaskUserOwnerStart,
  updateTaskUserOwnerSuccess,
} from "./taskSlice";
import {
  alertAuthenticationError,
  alertError,
  alertSuccess,
  alertSuccess2,
} from "../common/libs";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${apiUrl}/user/login`, user);
    const { data } = await axios.post(`${apiUrl}/user/login`, user);

    dispatch(loginSuccess(res.data));
    navigate("/forbiden");
  } catch (err) {
    alertError(err.response.data.data.message);
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  console.log(user);
  dispatch(registerStart());
  try {
    const config = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };
    await axios.post(`${apiUrl}/user/register`, user, config);
    dispatch(registerSuccess());
    alertSuccess2(
      "Đăng ký thành công!",
      "Bạn đã đăng ký thành công vui lòng đăng nhập"
    );
  } catch (err) {
    alertError(err.response.data.message);
    console.log(err.response.data.message);
    dispatch(registerFailed());
  }
};

export const getAllTasks = async (accessToken, taskId, dispatch) => {
  dispatch(getTasksStart());
  try {
    const config = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        token: `Bearer ${accessToken}`,
      },
    };
    await axios.get(`${apiUrl}/task/view/${taskId}`, config);
    const res = await axios.get(`${apiUrl}/task/view/${taskId}`, config);
    console.log(res.data);
    dispatch(getTasksSuccess());
  } catch (err) {
    dispatch(getTasksFailed());
  }
};

export const updateTask = async (accessToken, taskInfo, taskId, dispatch) => {
  dispatch(updateTaskStart());
  try {
    const config = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        token: `Bearer ${accessToken}`,
      },
    };
    await axios.put(`${apiUrl}/task/update/${taskId}`, taskInfo, config);
    const res = await axios.put(
      `${apiUrl}/task/update/${taskId}`,
      taskInfo,
      config
    );
    console.log(res.data);
    dispatch(updateTaskSuccess());
  } catch (err) {
    dispatch(updateTaskFailed());
  }
};

export const updateTaskUserOwner = async (
  accessToken,
  userId,
  taskId,
  dispatch
) => {
  console.log(userId, taskId);
  dispatch(updateTaskUserOwnerStart());
  try {
    const config = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        token: `Bearer ${accessToken}`,
      },
    };
    await axios.put(`${apiUrl}/task/update/${taskId}/user`, userId, config);
    const res = await axios.put(
      `${apiUrl}/task/update/${taskId}/user`,
      userId,
      config
    );
    console.log(res.data);
    dispatch(updateTaskUserOwnerSuccess());
  } catch (err) {
    dispatch(updateTaskUserOwnerFailed());
  }
};

export const logOut = async (dispatch) => {
  dispatch(logOutStart());
  try {
    dispatch(logOutSuccess());
  } catch (err) {
    dispatch(logOutFailed());
  }
};

export const getTaskInfo = async (accessToken, taskId, userId, dispatch) => {
  dispatch(getTaskInfoStart());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
        token: `Bearer ${accessToken}`,
      },
    };
    const { data } = await axios.post(
      `${apiUrl}/task/view/${taskId}`,
      { userId },
      config
    );

    dispatch(getTaskInfoSuccess());
  } catch (error) {
    console.log(error);
    dispatch(getTaskInfoFailed());
  }
};

export const adminAddTask = async (title, description, dispatch) => {
  dispatch(adminAddTaskStart());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${apiUrl}/task/create`,
      { title, description },
      config
    );

    dispatch(adminAddTaskSuccess());
  } catch (error) {
    console.log(error);
    dispatch(adminAddTaskFailed());
  }
};

export const adminAssignTask =
  () => async (accessToken, userId, username, taskid, dispatch) => {
    dispatch(adminAddTaskStart());
    try {
      const config = {
        headers: {
          "content-type": "application/json",
          token: `Bearer ${accessToken}`,
        },
      };

      const { data } = await axios.put(
        `${apiUrl}/task/update/${taskid}/user`,
        { userId },
        config
      );

      if (data)
        alertSuccess(`Assign Task`, `To ${username} Successfully`, "home");

      dispatch(adminAddTaskSuccess());
    } catch (error) {
      console.log(error);
      dispatch(adminAddTaskFailed());
    }
  };

export const getAllTasksNotAssinged = async (accessToken, dispatch) => {
  dispatch(getAllTasksNotAssingedStart());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
        token: `Bearer ${accessToken}`,
      },
    };
    const { data } = await axios.get(`${apiUrl}/task/newTasks`, config);

    if (data) {
      dispatch(getAllTasksNotAssingedSuccess(data));
    } else {
      dispatch(getAllTasksNotAssingedFailed());
    }
  } catch (error) {
    console.log(error);
    dispatch(getAllTasksNotAssingedFailed());
  }
};

export const getAllTasksAssinged = async (accessToken, dispatch) => {
  dispatch(getAllTasksAssingedStart());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
        token: `Bearer ${accessToken}`,
      },
    };
    const { data } = await axios.get(`${apiUrl}/user/viewTask`, config);

    if (data) {
      dispatch(getAllTasksAssingedSuccess(data));
    } else {
      dispatch(getAllTasksAssingedFailed());
    }
  } catch (error) {
    console.log(error);
    dispatch(getAllTasksAssingedFailed());
  }
};

export const getTaskLog = async (accessToken, dispatch) => {
  console.log("show log", accessToken);
  // dispatch(getTaskLogsStart());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
        token: `Bearer ${accessToken}`,
      },
    };
    const { data } = await axios.get(`${apiUrl}/log/show`, config);

    if (data) {
      console.log(data);
      dispatch(getTaskLogsSuccess(data));
    } else {
      // dispatch(getTaskLogsFailed());
    }
  } catch (error) {
    // console.log(error);
    // dispatch(getTaskLogsFailed());
  }
};
