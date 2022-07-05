import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getTaskLog } from "../../redux/apiRequest";
const Body = styled.div`
  button {
    padding: 10px;
  }

  table,
  th,
  td {
    border: 1px solid;
    text-align: center;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
`;
function Log() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  if (currentUser === null) {
    window.location.href = "/forbiden";
  }
  useEffect(() => {
    if (currentUser.data.data.role === "user") {
      navigate("/home");
    }
  });
  const refreshLog = () => {
    getTaskLog(currentUser.token, dispatch);
  };
  const { data } = useSelector((state) => state.task.getTaskLogs?.taskLogs);

  useEffect(() => {
    if (data) {
      console.log(data);
      console.log(currentUser);
    }
  }, []);
  return (
    <Body>
      <button onClick={refreshLog}>RefreshLog</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Info</th>
            <th>Created date</th>
            <th>User update</th>
            <th>User name</th>
            <th>User email</th>
            <th>Task id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>IsArchived</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.info}</td>
                <td>{data.createdAt.slice(0, 10)}</td>
                <td>{data.userUpdate}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.taskId}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>{data.status}</td>
                <td>{data.isArchived ? "True" : "False"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Body>
  );
}

export default Log;
