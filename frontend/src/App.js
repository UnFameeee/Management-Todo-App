import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthView from "./screens/common/Authview";
import HomeView from "./screens/common/Homeview";
import ForbidenView from "./screens/common/Forbidenview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView homeRoute="home" />} />
        <Route path="/login" element={<AuthView authRoute="login" />} />
        <Route path="/home" element={<HomeView homeRoute="home" />} />
        <Route path="/forbiden" element={<ForbidenView forbidenRoute="forbiden"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
