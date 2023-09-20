import React from "react";
import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Form from "./Components/Form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
