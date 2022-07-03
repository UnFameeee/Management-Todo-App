import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Header from "./Header";
function HomeView({ homeRoute }) {
  let body = <div>{homeRoute === "home" && <Home />}</div>;
  return (
    <div>
      <Header />
      {body}
    </div>
  );
}

export default HomeView;
