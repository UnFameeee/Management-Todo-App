import React from "react";
import Forbiden from "../Forbiden";

function ForbidenView({ forbidenRoute }) {
  let body = (
    <div>
      {forbidenRoute === "forbiden" && <Forbiden/>}
    </div>
  );
  return <div>{body}</div>;
}

export default ForbidenView;
