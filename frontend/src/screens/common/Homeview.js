import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forbiden from "../Forbiden";
import Home from "../Home";
import Header from "./Header";
import ViewTask from "./Viewtask";
function HomeView({ homeRoute }) {
  let body = <div>
  {homeRoute === "home" && <Home />}
  {homeRoute === "viewtask" && <ViewTask />}
  </div>;
  return (
    <div>
      <Header />
      {body}
    </div>
  );
}

export default HomeView;
