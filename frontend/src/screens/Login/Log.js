import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getTaskLog } from "../../redux/apiRequest";
const Body = styled.div`
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
  const taskLogs = useSelector((state) => state.task.getTaskLogs?.taskLogs);
  useEffect(() => {
    if (taskLogs) {
      console.log(taskLogs);
    }
  }, [taskLogs]);
  return (
    <Body>
      <button onClick={showLog}> show log</button>
      <table>
        <tr>
          <th>id</th>
          <th>info</th>
          <th>created date</th>
          <th>user update</th>
          <th>task id</th>
        </tr>
        <tr>
          <td>4</td>
          <td>user admin login to system</td>
          <td>7/52022</td>
          <td>lmao</td>
          <td>null</td>
        </tr>
      </table>
    </Body>
  );
}

export default Log;
