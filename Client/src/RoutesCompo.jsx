import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Enrolled from "./Components/Enrolled/Enrolled";

const RoutesCompo = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/enrolled" element={<Enrolled />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesCompo;
