import { DragDropContext } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasksNotAssingedAction, getAllTasksAssingedAction, adminAddTaskAction, adminAssignTaskAction  } from "../behaviors/actions/admin";
import Column from "./common/Column";
import CreateTask from "./common/CreateTask";
import { getAllTasksNotAssinged, getAllTasksAssinged, adminAssignTask } from "../redux/apiRequest";
import ViewTask from "./common/Viewtask";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [imageURL, setImageURL] = useState(); // user avatar

  // get avatar from file
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImageURL(URL.createObjectURL(file));
  };

  const dispatch = useDispatch();
  // const getAllTasksNotAssingedReducer = useSelector(
  //   (state) => state.getAllTasksNotAssingedReducer
  // );
  // const { TasksNotAssigned } = getAllTasksNotAssingedReducer;

  // const getAllTasksAssingedReducer = useSelector(
  //   (state) => state.getAllTasksAssingedReducer
  // );
  // const { TasksAssigned } = getAllTasksAssingedReducer; 

  let initialState = [
    {
      id: 'admin',
      name: "Task",
      tasks: [],
    },
  ];   

  const [taskList, setTasks] = useState(initialState);
  
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  const tasksNotAssinged = useSelector((state) => state.task.getAllTasksNotAssinged?.tasksNotAssinged);
  const tasksAssinged = useSelector((state) => state.task.getAllTasksAssinged?.tasksAssinged);
  // const assignTask = useSelector((state) => state.task.adminAssignTask?.success);


  useEffect(() => {
    getAllTasksNotAssinged(currentUser.token, dispatch);   
    getAllTasksAssinged(currentUser.token, dispatch); 
  },[]);

  useEffect(() => {
    if(tasksAssinged) {
      if(tasksNotAssinged) initialState[0].tasks = tasksNotAssinged.data
      for(let i=0;i<tasksAssinged.data.length;i++){
        initialState.push(tasksAssinged.data[i]);
      }
      setTasks(initialState)
    }
  }, [tasksAssinged, tasksNotAssinged]);

  function deleteElement(array, id){
    if (id>=array.length) return array;
    else{
      const task = array[id];
      return array.filter((data)=>{
        return (data!==task);
      })
    }
  }

  function addElement(array, id, data){
    let newArr = [];
    console.log(id, data);
    for (let i=0;i<array.length;i++){
      if (i === id) newArr.push(data);
      newArr.push(array[i]);
    }
    if (id>=array.length) newArr.push(data)
    return newArr;
  }
  
  async function onDragEnd(val) {    
    /// A different way!
    const { draggableId, source, destination } = val;

    const [sourceGroup] = taskList.filter(
      (column) => column.name === source.droppableId
    );

    // Destination might be `null`: when a task is
    // dropped outside any drop area. In this case the
    // task reamins in the same column so `destination` is same as `source`
    const [destinationGroup] = destination
      ? taskList.filter(
          (column) => column.name === destination.droppableId
        )
      : { ...sourceGroup };

    if(destinationGroup.id==='admin'|| sourceGroup===destinationGroup) return;
    
    await adminAssignTask(currentUser.token, destinationGroup.id, destinationGroup.name, draggableId, dispatch);

    // We save the task we are moving
    const [movingTask] = sourceGroup.tasks.filter((t) => t.id === draggableId);
    
    
    // const newSourceGroupTasks = sourceGroup.tasks.prototype.splice(source.index, 1);
    const newSourceGroupTasks = deleteElement(sourceGroup.tasks, source.index)
    //const newDestinationGroupTasks = destinationGroup.tasks.splice(destination.index, 0, movingTask);
    const newDestinationGroupTasks = addElement(destinationGroup.tasks, destination.index, movingTask);

    // Mapping over the task lists means that you can easily
    // add new columns
    const newTaskList = taskList.map((column) => {
      if (column.name === source.droppableId) {
        return {
          name: column.name,
          tasks: newSourceGroupTasks,
        };
      }
      if (column.name === destination.droppableId) {
        return {
          name: column.name,
          tasks: newDestinationGroupTasks,
        };
      }
      return column; 
    });
    setTasks(newTaskList);
    getAllTasksAssinged(currentUser.token, dispatch);
    getAllTasksNotAssinged(currentUser.token, dispatch);
  }

  function onDragStart(val) {
    
    const { draggableId, source, destination } = val;

  }

  const [isCreateClicked, setIsCreateClicked] = useState(false); //popup modals
  const [isViewClicked, setIsViewClicked] = useState(false); //popup modals
  const [taskId, setTaskId] = useState('admin');
  
  return (
    <>
      <div className="mainpage">
        <div className="left">
          <div className="search">
            <div className="filter">
              <div className="icon-search">
                <picture>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ffc6ff58b7c604477991f6df86966410b"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ffc6ff58b7c604477991f6df86966410b?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ffc6ff58b7c604477991f6df86966410b?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ffc6ff58b7c604477991f6df86966410b?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ffc6ff58b7c604477991f6df86966410b?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ffc6ff58b7c604477991f6df86966410b?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ffc6ff58b7c604477991f6df86966410b?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ffc6ff58b7c604477991f6df86966410b?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Ffc6ff58b7c604477991f6df86966410b"
                    className="image"
                    alt="filter"
                  />
                </picture>
                <div className="builder-image-sizer filter-icon" />
              </div>
              <div className="icon-search-txt">
                <picture>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F1e47e2e1f58e4706b4de81160e9d3bc4"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F1e47e2e1f58e4706b4de81160e9d3bc4?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F1e47e2e1f58e4706b4de81160e9d3bc4?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F1e47e2e1f58e4706b4de81160e9d3bc4?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F1e47e2e1f58e4706b4de81160e9d3bc4?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F1e47e2e1f58e4706b4de81160e9d3bc4?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F1e47e2e1f58e4706b4de81160e9d3bc4?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F1e47e2e1f58e4706b4de81160e9d3bc4?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F1e47e2e1f58e4706b4de81160e9d3bc4"
                    className="image"
                    alt="quick-filters"
                  />
                </picture>
                <div className="builder-image-sizer arrow-down-search" />
              </div>
              <div className="line">
                <picture>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcd5d23b5e4a04021a281107120b189a7"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcd5d23b5e4a04021a281107120b189a7?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcd5d23b5e4a04021a281107120b189a7?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcd5d23b5e4a04021a281107120b189a7?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcd5d23b5e4a04021a281107120b189a7?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcd5d23b5e4a04021a281107120b189a7?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcd5d23b5e4a04021a281107120b189a7?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcd5d23b5e4a04021a281107120b189a7?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fcd5d23b5e4a04021a281107120b189a7"
                    className="image"
                    alt="line"
                  />
                </picture>
                <div className="builder-image-sizer line-icon" />
              </div>
            </div>
            <div className="search-input-section">
              <div className="search-icon">
                <picture>
                  <source
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc"
                    type="image/webp"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279 088ccc428399d5fbb66fa5f5fc?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F6f0279088ccc428399d5fbb66fa5f5fc"
                    className="image"
                    alt="search-icon"
                  />
                </picture>
                <div className="builder-image-sizer search-icon-svg" />
              </div>
              <div className="search-input-txt">
                <input id="search" placeholder="Search"></input>
              </div>
            </div>
          </div>
          <button className="add-task" onClick={() => {setIsCreateClicked(!isCreateClicked)}}>Create Task</button>
          <div className="manage">
            <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
              {taskList &&
                taskList.map((user) => (
                  <Column
                    taskId = {taskId}
                    setTaskId = {setTaskId}
                    setIsViewClicked={setIsViewClicked} 
                    isViewClicked={isViewClicked}
                    key={user.name}
                    className="column"
                    droppableId={user.name}
                    list={user.tasks}
                    type="TASK"
                  />
                ))}
            </DragDropContext>
          </div>
        </div>
        <div className="boundary"></div>
        <div className="right">
          <div className="user-avt">
            <div className="browse-box">
              <input
                className="browse-file-input"
                type="file"
                onChange={(e) => {
                  onImageChange(e);
                }}
              />
            </div>
            {imageURL && (
              <img
                src={imageURL}
                style={{
                  overflow: "hidden",
                  borderRadius: "50%",
                  objectFit: "contain",
                }}
              ></img>
            )}
          </div>
          <div className="user">
            <div className="user-info">
              <label>Username:</label>
              <input></input>
            </div>
            <div className="user-info">
              <label>Job:</label>
              <input></input>
            </div>
          </div>
          <button>Change</button>
        </div>
        {isCreateClicked && <CreateTask setIsCreateClicked={setIsCreateClicked} isCreateClicked={isCreateClicked}/> }     
        {isViewClicked && <ViewTask setIsViewClicked={setIsViewClicked} isViewClicked={isViewClicked} taskId={taskId} setTaskId={setTaskId}/>}
      </div>
      <style>{`
          .mainpage {
            display: flex;
            min-height: 663px;     
            background: linear-gradient(to right, rgb(188 89 122), rgb(51, 51, 51));
          }
          .left {
            display: flex;
            flex-direction: column;
            width: 75%;
          }
          .add-task {
            cursor: pointer;
            outline: none;
            border: none;
            background-color: black;
            color: white;
            width: 120px;
            height: 40px;
            font-size: 16px;
            border-radius: 20px;
            margin-left: 30px;
            margin-bottom: 30px;
          }
          .add-task:hover {
            box-shadow: 0px 0px 6px #ffffff;
          }
          .manage {
            list-style: none;
            display: flex;
            width: 100%;
            align-content: center;
            justify-content: space-between;
          }
          .manage ul {
            border: 1px solid #81619e;
            list-style: none;
            border-radius: 12px;
            margin: 0;
            padding: 0;
            background-color: black;
            box-shadow: 0 0 10px #a72222;
            width: 25%;
            margin-left: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .manage ul:last-child {
            margin-right: 30px;
          }
          .manage ul li {
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #41106c;
            width: 80%;
            height: 40px;
            border-radius: 15px;
            border: 1px solid white;
            margin-bottom: 10px;
            font-weight: 600;
          }
          .user p {
            font-size: 20px;
            font-weight: 700;
            margin: 0;
            margin-bottom: 8px;
            height: 40px;
            line-height: 40px;
            color: white;
          }
          .boundary{
            width: 0.5px;
            background-color: #8f3131;
          }
          .search {
            display: flex;
            flex-direction: row;
            max-width: 90%;
            justify-content: flex-start;
            border-radius: 15px;
            margin: 30px auto;
            padding-right: 25px;
            padding-left: 25px;
            background-color: black;
            height: 60px;
            width: 100%;
          }
          .filter {
            display: flex;
            flex-direction: row;
            max-width: 161px;
            align-items: center;
            justify-content: space-between;
          }
          .icon-search {
            display: flex;
            position: relative;
            min-width: 20px;
            min-height: 20px;
            max-width: 29px;
            width: 29px;
          }
          .image {
            object-fit: contain;
            object-position: center;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
          }
          .filter-icon {
            width: 100%;
            padding-top: 86.20689655172413%;
            pointer-events: none;
            font-size: 0;
          }
          .icon-search-txt {
            display: flex;
            position: relative;
            min-width: 20px;
            min-height: 20px;
            max-width: 106px;
            width: 106px;
            margin-left: 15px;
          }
          .arrow-down-search {
            width: 100%;
            padding-top: 17.92452830188679%;
            pointer-events: none;
            font-size: 0;
          }
          .line {
            width: 2px;
            height: 20px;
            display: flex;
            position: relative;
            max-width: 2px;
            margin-left: 15px;
          }
          .line-icon {
            width: 100%;
            padding-top: 1350%;
            pointer-events: none;
            font-size: 0;
          }
          .search-input-section {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            margin-left: 20px;
          }
          .search-icon {
            cursor: pointer;
            display: flex;
            position: relative;
            min-width: 20px;
            min-height: 20px;
            max-width: 22px;
            width: 22px;
          }
          .search-icon-svg {
            width: 100%;
            padding-top: 104.54545454545455%;
            pointer-events: none;
            font-size: 0;
          }
          .search-input-txt {
            position: relative;
            width: 100%;
            margin-left: 10px;
            color: rgb(165 143 186);
            font-size: 16px;
            letter-spacing: 0%;
            text-align: center;
            font-family: Inter, sans-serif;
          }
          .search-input-txt label {
            position: absolute;
            top: 0;
            left: 16px;
          }
          #search {
            background-color: black;
            border: none;
            outline: none;
            width: 100%;
            height: 52px;
            color: white;
            font-size: 16px;
          }
          #search::placeholder {
            color: #a8a8a8;
          }
          .right {
            width: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .user-avt {
            position: relative;
            display: flex;
            border-radius: 50%;
            width: 200px;
            height: 200px;
            margin: 50px 0;
            background-color: white;
          }
          .browse-box {
            overflow: hidden;
            position: absolute;
            left: 0;
            // z-index: 100;
            width: 100%;
            height: 100%;
            background-color: grey;
            opacity: 0!important;
          }
          .user-avt .browse-file-input {
            border-radius: 50%;
            top: -2em !important;
            right: 0;
            position: absolute;
            width: 100%;
            height: 118%;
            margin: 0;
            padding: 0;
            border: 0;
            cursor: pointer;
          }
          .user-info {
            margin-bottom: 30px;
            align-items: center;
            justify-content: space-around;
          }
          .user-info label{
            color: white;
            font-size: 18px;
            margin-right: 10px;
          }
          .user-info input {
            max-width: 50%;
            border-radius: 10px;
            border: 0;
            font-size: 16px;
            padding: 8px 16px;
            color: black;
            background-color: white;
          }
          .right button {
            cursor: pointer;
            font-size: 16px;
            color: white;
            background-color: black;
            border: 0;
            width: 35%;
            height: 40px;
            border-radius: 30px;
          }
          .right button:hover {
            box-shadow: 0px 0px 6px #ffffff;
          }
        `}</style>
    </>
  );
}