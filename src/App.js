import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animate every time
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
