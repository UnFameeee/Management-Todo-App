import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faUser,
  faPlus,
  faList,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";

const Body = styled.div`
  > .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    button {
      padding: 10px 20px;
      background: #eee;
      color: #111;
      font-size: 15px;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  > #popup {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: ${(props) => (props.isClicked ? "none" : "block")};

    .popup-content {
      border-radius:10px;
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
              background-color: rgb(234, 236, 240);
              cursor:pointer;
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
          .save{
            --sizing:40px;
            width:var(--sizing);
            height:30px;
            cursor:pointer;
          }
        }
      }
    }

    button.close-popup {
      position: absolute;
      border-radius:3px;
      top: 20px;
      right: 20px;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
export default function CreateTask() {
  const [isClicked, setIsClicked] = useState("false");
  const handleClickOpenModal = () => {
    setIsClicked((current) => !current);
  };
  return (
    <Body isClicked={isClicked}>
      <div className="center">
        <button onClick={handleClickOpenModal}>Open modal</button>
      </div>
      <div id="popup">
        <div className="popup-content">
          <div className="popup-header">
            <FontAwesomeIcon icon={faBriefcase} />
            <h2 className="task-title"> Install Package</h2>
            <div className="header-status">
              <text className="status-text">trong danh sách </text>
              <a href="/">Doing</a>
            </div>
          </div>
          <div className="assign-container-content">
            <div className="task-members">
              <text>Thành viên</text>
              <div className="member-avatars">
                <div className="member-avatars-circle">
                  <FontAwesomeIcon
                    className="avatar-icon"
                    icon={faUser}
                  ></FontAwesomeIcon>
                </div>
                <div className="member-add-circle">
                  <FontAwesomeIcon
                    className="avatar-icon"
                    icon={faPlus}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <div className="header">
              <FontAwesomeIcon icon={faList} />
              <h2 className="des-title">Mô tả</h2>
            </div>
            <div className="text-area">
              <textarea>dasdsadasdsa</textarea>
            </div>
            <div className="save-button">
              <button className="save">Lưu</button>
            </div>
          </div>

          <button onClick={handleClickOpenModal} className="close-popup">
            x
          </button>
        </div>
      </div>
    </Body>
  );
}
