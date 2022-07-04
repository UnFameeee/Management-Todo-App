import React from "react";
import { useSelector } from "react-redux";

function Forbiden() {
  const currentUser = useSelector(state => state.auth.login?.currentUser)
  console.log(currentUser.token)
  const getAllTask = () =>{
    
  }
  return (
    <div>
    <button onClick={getAllTask}>Test get all task</button>
      <h2>WE'RE SORRY, YOUR REQUEST IS UNAUTHORIZED</h2>
      <a href="/login">Return to Login</a>
    </div>
  );
}

export default Forbiden;
