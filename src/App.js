import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

// Components
import Api from "./api";
import Home from "./Home";
import Search from "./Search";
import Channel from "./Channel";
import Video from "./Video";
import Shorts from "./Shorts";

function App() {
  
  return (
    <div className="App">
      {/* <Api /> */}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/video" element={<Video />} />
            <Route path="/shorts" element={<Shorts />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
