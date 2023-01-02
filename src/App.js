import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NameList from "./components/pages/NameList/NameList";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/namelist" element={<NameList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
