import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forbiden from "../Forbiden";
import Home from "../Home";
import Log from "../Login/Log";
import Header from "./Header";
import ViewTask from "./Viewtask";
function HomeView({ homeRoute }) {
  let body = <div>
  {homeRoute === "home" && <Home />}
  {homeRoute === "log" && <Log />}
  </div>;
  return (
    <div>
      <Header />
      {body}
    </div>
  );
}

export default HomeView;
