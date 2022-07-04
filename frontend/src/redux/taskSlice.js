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
        }
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
        }
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
    updateTaskUserOwnerSuccess
} = taskSlice.actions

export default taskSlice.reducer