import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
