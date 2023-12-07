import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./authPages/LoginPage/Login";
import Register from "./authPages/RegisterPage/Register";
import Dashboard from "./Dashboard/Dashboard";
//import Notifications from "./Notifications/Notifications";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Notifications /> */}
    </>
  );
}

export default App;
