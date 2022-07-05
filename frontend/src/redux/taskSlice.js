import { createSlice } from "@reduxjs/toolkit";
const taskSlice = createSlice({
    name:'task',
    initialState:{
        tasks:{
            allTasks:null,
            isFetching:false,
            error:false
        },
        updateTask:{
            isFetching:false,
            success:false,
            error:false
        },
        updateTaskUserOwner:{
            isFetching:false,
            success:false,
            error:false
        },
        getTaskInfo:{
            taskInfo:null,
            isFetching:false,
            error:false
        },
        adminAddTask:{
            isFetching:false,
            success:false,
            error:false
        },
        adminAssignTask:{
            isFetching:false,
            success:false,
            error:false
        },
        getAllTasksNotAssinged:{
            tasksNotAssinged:null,
            isFetching:false,
            error:false
        },
        getAllTasksAssinged:{
            tasksAssinged:null,
            isFetching:false,
            error:false
        },
        getTaskLogs:{
            taskLogs:null,
            isFetching:false,
            error:false
        },

    },
    reducers:{
        getTasksStart: (state) =>{
            state.tasks.isFetching = true;
        },
        getTasksSuccess: (state,action) =>{
            state.tasks.isFetching = false;
            state.tasks.allTasks = action.payload;
        },
        getTasksFailed: (state) =>{
            state.tasks.isFetching= false;
            state.tasks.error = true;
        },

        updateTaskStart: (state) =>{
            state.updateTask.isFetching = true;
        },
        updateTaskSuccess: (state) =>{
            state.updateTask.isFetching = false;
            state.updateTask.success = true;
        },
        updateTaskFailed: (state) =>{
            state.updateTask.isFetching= false;
            state.updateTask.success = false;
            state.updateTask.error = true;
        },

        updateTaskUserOwnerStart: (state) =>{
            state.updateTaskUserOwner.isFetching = true;
        },
        updateTaskUserOwnerSuccess: (state) =>{
            state.updateTaskUserOwner.isFetching = false;
            state.updateTaskUserOwner.success = true;
        },
        updateTaskUserOwnerFailed: (state) =>{
            state.updateTaskUserOwner.isFetching= false;
            state.updateTaskUserOwner.success = false;
            state.updateTaskUserOwner.error = true;
        },

        getTaskInfoStart: (state) =>{
            state.getTaskInfo.isFetching = true;
        },
        getTaskInfoSuccess: (state,action) =>{
            state.getTaskInfo.isFetching = false;
            state.getTaskInfo.taskInfo = action.payload;
        },
        getTaskInfoFailed: (state) =>{
            state.getTaskInfo.isFetching= false;
            state.getTaskInfo.error = true;
        },

        adminAddTaskStart: (state) =>{
            state.adminAddTask.isFetching = true;
        },
        adminAddTaskSuccess: (state) =>{
            state.adminAddTask.isFetching = false;
            state.adminAddTask.success = true;
            state.adminAddTask.error = false;
        },
        adminAddTaskFailed: (state) =>{
            state.adminAddTask.isFetching= false;
            state.adminAddTask.success = false;
            state.adminAddTask.error = true;
        },
        adminAssignTaskStart: (state) =>{
            state.adminAssignTask.isFetching = true;
        },
        adminAssignTaskSuccess: (state) =>{
            state.adminAssignTask.isFetching = false;
            state.adminAssignTask.success = true;
            state.adminAssignTask.error = false;
        },
        adminAssignTaskFailed: (state) =>{
            state.adminAssignTask.isFetching= false;
            state.adminAssignTask.success = false;
            state.adminAssignTask.error = true;
        },
        getAllTasksNotAssingedStart: (state) =>{
            state.getAllTasksNotAssinged.isFetching = true;
        },
        getAllTasksNotAssingedSuccess: (state,action) =>{
            state.getAllTasksNotAssinged.isFetching = false;
            state.getAllTasksNotAssinged.tasksNotAssinged = action.payload;
        },
        getAllTasksNotAssingedFailed: (state) =>{
            state.getAllTasksNotAssinged.isFetching= false;
            state.getAllTasksNotAssinged.error = true;
        },

        getAllTasksAssingedStart: (state) =>{
            state.getAllTasksAssinged.isFetching = true;
        },
        getAllTasksAssingedSuccess: (state,action) =>{
            state.getAllTasksAssinged.isFetching = false;
            state.getAllTasksAssinged.tasksAssinged = action.payload;
        },
        getAllTasksAssingedFailed: (state) =>{
            state.getAllTasksAssinged.isFetching= false;
            state.getAllTasksAssinged.error = true;
        },
        getTaskLogsStart: (state) =>{
            state.getTaskLogs.isFetching = true;
        },
        getTaskLogsSuccess: (state,action) =>{
            state.getTaskLogs.isFetching = false;
            state.getTaskLogs.taskLogs = action.payload;
        },
        getTaskLogsFailed: (state) =>{
            state.getTaskLogs.isFetching= false;
            state.getTaskLogs.error = true;
        },
    }
});

export const {
    getTasksStart,
    getTasksFailed,
    getTasksSuccess,
    updateTaskStart,
    updateTaskFailed,
    updateTaskSuccess,
    updateTaskUserOwnerFailed,
    updateTaskUserOwnerStart,
    updateTaskUserOwnerSuccess,
    getTaskInfoFailed,
    getTaskInfoSuccess,
    getTaskInfoStart,
    adminAddTaskFailed,
    adminAddTaskStart,
    adminAddTaskSuccess,
    adminAssignTaskFailed,
    adminAssignTaskStart,
    adminAssignTaskSuccess,
    getAllTasksNotAssingedFailed,
    getAllTasksNotAssingedStart,
    getAllTasksNotAssingedSuccess,
    getAllTasksAssingedFailed,
    getAllTasksAssingedStart,
    getAllTasksAssingedSuccess,
    getTaskLogsFailed,
    getTaskLogsStart,
    getTaskLogsSuccess
} = taskSlice.actions

export default taskSlice.reducer