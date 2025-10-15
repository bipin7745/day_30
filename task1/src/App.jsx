// src/App.jsx
import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import DublicatePage from "./componets/Dublicate";
import Third from "./componets/Third";

const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/duplicate" element={<DublicatePage />} />
        <Route path="/third" element={<Third/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
