import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminAddTaskAction } from "../../behaviors/actions/admin";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { alertSuccess } from "../../common/libs";

const Body = styled.div`
  svg{
    height: 20px
  }
  > #popup {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: ${(props) => (props.isClicked ? "block" : "none")};

    .popup-content {
      overflow: hidden;
      border-radius: 10px;
      width: 50vw;
      height: 60vh;
      position: absolute;
      top: 50%;
      left: 50%;
      padding-top: 30px;
      transform: translate(-50%, -50%);
      background: rgb(244, 245, 247);

      .popup-header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        padding: 0 30px;
        .task-title {
          font-size: 26px;
          font-weight: 400;
          line-height: 0px;
        }
      }
      .header-status {
        position: absolute;
        top: 45px;
        left: 47px;
        a {
          color: black;
        }
      }
      .assign-container-content {
        width: 70%;
        margin-top: 30px;
        display: flex;

        .task-members {
          margin-right: 20px;
          margin-left: 27px;

          .member-avatars {
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            .member-avatars-circle,
            .member-add-circle {
              --sizing: 35px;
              width: var(--sizing);
              height: var(--sizing);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;

              .avatar-icon {
                width: 100%;
                font-size: 25px;
              }
            }
            .member-avatars-circle {
              background-color: gray;
            }
            .member-add-circle {
              position: relative;
              background-color: rgb(234, 236, 240);
              cursor: pointer;
              .add-member-popup-container {
                border: 1px solid black;
                position: absolute;
                background-color: rgb(234, 236, 240);
                width: 310px;
                top: 35px;
                left: 10px;
                border-radius: 5px;
                padding: 20px;
                display: ${(props) =>
                  props.isClickedAddMember ? "block" : "none"};

                .title {
                  display: flex;
                  align-item: center;
                  justify-content: center;
                  h2 {
                    margin: 0;
                  }
                }
                .list-member {
                  h3 {
                    font-size: 15px;
                    font-weight: 500;
                  }
                  .li-member {
                    border: 1px solid black;
                    margin-bottom: 4px;
                    border-radius: 3px;
                    padding: 0 5px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 10px;
                  }
                }
              }
            }
          }
        }
      }
      .task {
        margin: 10px 30px;
        input {
            width: calc(100% - 40px);
            font-size: 14px;
            padding: 0 20px;
            height: 40px;
            border: 1px black solid;
            border-radius: 8px;
        }
      }

      .description {
        height: 150px;
        margin-top: 20px;
        .header {
          padding: 10px 30px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          .des-title {
            font-size: 26px;
            font-weight: 400;
            line-height: 0px;
          }
        }
        .text-area {
          margin-left: 30px;
          margin-right: 30px;
          height: 100%;
          textarea {
            line-height: 20px;
            border: 1px black solid;
            border-radius: 8px;
            padding: 10px 20px;
            font-size: 14px;
            width: calc(100% - 40px);
            height: 100%;
            resize: none;
          }
        }
        .save-button {
          margin-top: 40px;
          margin-left: 30px;
          display: flex;
          gap: 15px;
          .save {
            border-radius: 10px;
            --sizing: 100px;
            width: var(--sizing);
            height: 40px;
            background-color: black;
            color: white;
            cursor: pointer;
          }
          .save:hover {
            box-shadow: 0 0 10px black;
          }
        }
      }
    }

    button.close-popup {
      background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/TQbmXZsHdfU.png);
      background-position: 0px -464px;
      background-size: 26px 930px;
      background-repeat: no-repeat;
      display: inline-block;
      position: absolute;
      height: 30px;
      width: 30px;
      border: none;
      top: 4px;
      right: -4px;
      cursor: pointer;
    }
  }
`;

export default function CreateTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const dispatch = useDispatch();
  const adminAddTaskReducer = useSelector(
    (state) => state.adminAddTaskReducer
  );
  const { success, loadingAddTask, message } = adminAddTaskReducer;
  
  if(message) {
    alertSuccess(title, message, 'home')  
  }

  function handleClickCreateTask() {  
    dispatch(adminAddTaskAction(title,description))
  }
  
  return (
    <Body isClicked={props.isClicked}>
      <div id="popup">
        <div className="popup-content">
          <div className="popup-header">
            <FontAwesomeIcon icon={faBriefcase} />
            <h2 className="task-title">Create New Task</h2>
          </div>

          <div className="task">
            <input 
              placeholder="Task title"
              onChange={(e) => {setTitle(e.target.value)}}
            ></input>
          </div>

          <div className="description">
            <div className="header">
              <FontAwesomeIcon icon={faList} />
              <h2 className="des-title">Description</h2>
            </div>
            <div className="text-area">
              <textarea
                placeholder="Task description"
                value={description}
                onChange={(e) => {setDescription(e.target.value)}}
              ></textarea>
            </div>
            <div className="save-button">
              <button className="save" onClick={handleClickCreateTask}>Create</button>
            </div>
          </div>
          <button 
            onClick={() => {props.setIsClicked(!props.isClicked)}} 
            className="close-popup"
          > 
          </button>
        </div>
      </div>
    </Body>
  );
}
