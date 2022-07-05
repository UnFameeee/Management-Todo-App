import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlus,
  faList,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getTaskInfo } from "../../redux/apiRequest";

const Body = styled.div`
  > #popup {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: ${(props) => (props.isViewClicked ? "block" : "none")};

    .popup-content {
      border-radius: 10px;
      width: 70vw;
      height: 70vh;
      position: absolute;
      top: 50%;
      left: 50%;
      padding: 10px 20px;
      transform: translate(-50%, -50%);
      background: rgb(244, 245, 247);

      .popup-header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        .task-title {
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
      .description {
        height: 150px;
        margin-top: 20px;
        .header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          .des-title {
            font-weight: 400;
            line-height: 0px;
          }
        }
        .text-area {
          margin-left: 30px;
          width: 100%;
          height: 90%;
          textarea {
            padding: 10px;
            width: 90%;
            height: 100%;
            resize: none;
          }
        }
        .save-button {
          margin-top: 31px;
          margin-left: 30px;
          display: flex;
          gap: 15px;
          .save {
            --sizing: 40px;
            width: var(--sizing);
            height: 30px;
            cursor: pointer;
          }
          .archived {
            --sizing: 70px;
            width: var(--sizing);
            height: 30px;
            cursor: pointer;
          }
        }
      }
    }

    button.close-popup {
      position: absolute;
      border-radius: 3px;
      top: 20px;
      right: 20px;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
export default function ViewTask(props) {
  const [description, setDescription] = useState();
  const getDescription = (event) => {
    setDescription(event.target.value);
  };
  
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  const taskInfo = useSelector((state) => state.task.getTaskInfo?.taskInfo);

  useEffect(() => {
    setDescription(taskInfo?taskInfo.description:'')
    getTaskInfo(currentUser.token, props.taskId, dispatch);
  }, []) 

  return (
    <Body isViewClicked={props.isViewClicked}>
      <div id="popup">
        <div className="popup-content">
          <div className="popup-header">
            <FontAwesomeIcon icon={faBriefcase} />
            <h2 className="task-title">Task Info</h2>
            <div className="header-status">
              <p className="status-text" style={{ margin: "0" }}>
                Status <span>{taskInfo?taskInfo.status:''}</span>
              </p>

              <div className="">
                <span>Task title: </span>
                <span>{taskInfo?taskInfo.title:''}</span>
              </div>

            </div>
          </div>
          <div className="assign-container-content">
            <div className="task-members">
              <p>Task Assignee</p>
              <div className="member-avatars">
                <div className="member-avatars-circle">
                  <FontAwesomeIcon
                    className="avatar-icon"
                    icon={faUser}
                  ></FontAwesomeIcon>
                </div>

                <span>{taskInfo?taskInfo.user.username:''}</span>

                {/* <div className="member-add-circle">
                  <FontAwesomeIcon
                    className="avatar-icon"
                    icon={faPlus}
                    onClick={handleClickedAddMember}
                  ></FontAwesomeIcon>
                  <div className="add-member-popup-container">
                    <div className="title">
                      <h2>Thành viên</h2>
                    </div>
                    <hr></hr>
                    <div className="list-member">
                      <h3 className="header">Thành viên của bảng</h3>
                      <div className="li-member">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        <p className="member-name">junrante</p>
                      </div>
                      <div className="li-member">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        <p className="member-name">Quan minh duke</p>
                      </div>
                    </div>
                    <button
                      onClick={handleClickedAddMember}
                      className="close-popup"
                    >
                      x
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="description">
            <div className="header">
              <FontAwesomeIcon icon={faList} />
              <h2 className="des-title">Description</h2>
            </div>
            <div className="text-area">
              <textarea
                value={description}
                onChange={getDescription}
              ></textarea>
            </div>
            <div className="save-button">
              <button className="save">Lưu</button>
              <button className="archived">Lưu trữ</button>
            </div>
          </div>

          <button onClick={() => {props.setIsViewClicked(!props.isViewClicked)}} className="close-popup">
            x
          </button>
        </div>
      </div>
    </Body>
  );
}
