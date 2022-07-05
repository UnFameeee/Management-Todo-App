import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
`;
function Log() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.login?.currentUser);
  const showLog = () => {
    getTaskLog(currentUser.token, dispatch);
  };
  const { data } = useSelector((state) => state.task.getTaskLogs?.taskLogs);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, []);
  return (
    <Body>
      <button onClick={showLog}>Show Log</button>
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
                <td>{data.createdAt}</td>
                <td>{data.userUpdate}</td>
                <th>User name</th>
                <th>User email</th>
                <td>{data.taskId}</td>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>IsArchived</th>
              </tr>
            ))}
        </tbody>
      </table>
    </Body>
  );
}

export default Log;
