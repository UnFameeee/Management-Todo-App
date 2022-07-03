import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthView from "./screens/common/Authview";
import HomeView from "./screens/common/Homeview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView homeRoute="home" />} />
        <Route path="/login" element={<AuthView authRoute="login" />} />
        <Route path="/home" element={<HomeView homeRoute="home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
